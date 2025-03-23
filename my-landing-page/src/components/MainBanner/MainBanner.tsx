import HeroSection from "../HeroSection/HeroSection";
import SocialLogo from "../SocialLogo/SocialLogo";
import { ImageData } from "../../types";

import styles from "./MainBanner.module.css";

interface HeroWrapperProps {
  images?: ImageData[];
  objectKey?: string;
  showHeroContent?: boolean;
  className?: string;
  height?: string;
  responsiveHeights?: { sm?: string; md?: string; lg?: string };
  socialLinks: { facebook: string; youtube: string }; 
}

const HeroWrapper: React.FC<HeroWrapperProps> = ({
  images,
  objectKey = "banners",
  showHeroContent = true,
  className,
  height = "400px",
  responsiveHeights = { sm: "500px", md: "600px", lg: "820px" },
  socialLinks,
}) => {
  return (
    <div className={styles.heroWrapper}>
      <HeroSection
        images={images}
        objectKey={objectKey}
        showHeroContent={showHeroContent}
        className={className}
        height={height}
        responsiveHeights={responsiveHeights}
      />

      <div className={styles.socialLinks}>
        <SocialLogo platform="facebook" url={socialLinks.facebook} />
        <SocialLogo platform="youtube" url={socialLinks.youtube} />
      </div>
    </div>
  );
};

export default HeroWrapper;
