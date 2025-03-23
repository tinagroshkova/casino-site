import { useState, useEffect } from "react";
import { ImageData } from "../../types";
import useFetchData from "../../utils/useFetchData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import styles from "./HeroSection.module.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

interface HeroSectionProps {
  images?: ImageData[];
  objectKey?: string;
  showHeroContent?: boolean;
  className?: string;
  height?: string; 
  responsiveHeights?: { sm?: string; md?: string; lg?: string }; 
}

const HeroSection: React.FC<HeroSectionProps> = ({
  images,
  objectKey = "banners",
  showHeroContent = true,
  className,
  height = "400px", 
  responsiveHeights = { sm: "300px", md: "500px", lg: "700px" }, // Default breakpoints
}) => {
  const { data: fetchedImages, loading, error } = useFetchData<ImageData[]>({
    url: "/data.json",
    objectKey,
  });

  const finalImages = images || fetchedImages;
  const [currentHeight, setCurrentHeight] = useState(height);

  useEffect(() => {
    const updateHeight = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setCurrentHeight(responsiveHeights.sm || height);
      } else if (width <= 1024) {
        setCurrentHeight(responsiveHeights.md || height);
      } else {
        setCurrentHeight(responsiveHeights.lg || height);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [height, responsiveHeights]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!finalImages || finalImages.length === 0) return <p>No images available.</p>;

  return (
    <section className={className || ""} style={{ height: currentHeight }}>
      <Swiper
        modules={[Pagination, EffectFade, Autoplay]}
        effect="fade"
        loop={finalImages.length > 1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className={styles.heroSwiper}
      >
        {finalImages.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className={styles.backgroundImage}
              style={{ backgroundImage: `url(${img.image})`, height: currentHeight }}
            ></div>

            <div className={styles.overlay}></div>

            {showHeroContent && img.heroTitle && (
              <div className={styles.heroContent}>
                <h1 className={styles.heroTitle} dangerouslySetInnerHTML={{ __html: img.heroTitle }} />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
