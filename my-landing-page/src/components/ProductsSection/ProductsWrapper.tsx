import ProductCard from "./ProductCard";
import styles from "./ProductsWrapper.module.css";
import useFetchData from "../../utils/useFetchData"; 
import { ProductData } from "../../types";

const ProductsWrapper = () => {
  const { data: products, loading, error } = useFetchData<ProductData[]>({
    url: "/data.json",
    objectKey: "products",
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.productsWrapper}>
      <h2 className={styles.productsWrapperHeading}>Our Products</h2>
      <div className={styles.productsContainer}>
        {products?.map((product: ProductData, index: number) => (
          <ProductCard
            key={index}
            heading={product.heading}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsWrapper;
