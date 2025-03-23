import React from 'react';
import styles from './ProductCard.module.css';

interface ProductCardProps {
    heading: string;
    image: string;
    className?: string; 
}

const ProductCard: React.FC<ProductCardProps> = ({ heading, image, className }) => {
  return (
    <div className={`${styles.productCard} ${className || ""}`}>
      <div className={styles.productCardImage}>
        <img src={image} alt={heading} className={styles.image} />
      </div>

      <h3 className={styles.productCardHeading}>{heading}</h3>
    </div>
  );
};

export default ProductCard;