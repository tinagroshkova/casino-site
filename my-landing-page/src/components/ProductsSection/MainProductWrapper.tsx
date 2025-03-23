import HeroSection from "../HeroSection/HeroSection";
import { ImageData } from "../../types";
import useFetchData from "../../utils/useFetchData";
import styles from "./MainProductWrapper.module.css";

interface ProductData extends ImageData {
    description: string;
    model: string,
    className?: string;
}

const MainProductWrapper = () => {
    const { data: products, loading, error } = useFetchData<ProductData[]>({
        url: "/data.json",
        objectKey: "mainProduct",
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!products || products.length === 0) return <p>No product found.</p>;

    return (
        <div className={styles.mainProductWrapper}>
            <h2 className={styles.productsWrapperHeading}>Our Global Server Based Solution</h2>
            <div className={styles.heroWrapper}>
                <HeroSection images={products} showHeroContent={false} className="mainProductSection" responsiveHeights={{ sm: "600px", md: "600px", lg: "750px" }} />
                <div className={styles.modelContent}>
                    <h3 className={styles.productHeading}>{products[0].model}</h3>
                    <p className={styles.productDescription}>{products[0].description}</p>
                </div>
            </div>
        </div>
    );
};

export default MainProductWrapper;




