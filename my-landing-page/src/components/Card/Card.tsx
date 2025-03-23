import { useState } from "react";
import { FaStar, FaRegStar, FaRegCheckCircle, FaRegLightbulb } from "react-icons/fa";
import styles from "./Card.module.css";

interface CardProps {
  heading: string;
  image: string;
  title?: string;
  date?: string;
  description?: string;
  showButton?: boolean;
  iconName?: string;
}

const Card: React.FC<CardProps> = ({ heading, image, title, date, description, showButton, iconName }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to map the icon name to the actual icon component
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "FaRegStar":
        return <FaRegStar />;
      case "FaRegCheckCircle":
        return <FaRegCheckCircle />;
      case "FaRegLightbulb":
        return <FaRegLightbulb />;
      default:
        return <FaStar />;
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardInnerContainer}>
        <h3 className={styles.cardHeading}>
          {getIcon(iconName || "")}
          {heading}
        </h3>
        <div className={styles.cardImage}>
          <img src={image} alt={heading} className={styles.image} />
        </div>
        <div className={`${styles.cardContent} ${isExpanded ? styles.expanded : ""}`}>
          <h5 className={styles.cardTitle}>{title}</h5>
          {date && <p className={styles.cardDate}>({date})</p>}
          <p className={`${styles.cardDescription} ${isExpanded ? styles.open : ""}`}>
            {description}
          </p>
        </div>
        {showButton && (
          <button className={styles.readMore} onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? "Show Less" : "Read More"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
