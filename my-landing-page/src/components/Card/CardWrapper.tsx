import Card from "./Card";
import styles from "./CardWrapper.module.css";
import useFetchData from "../../utils/useFetchData"; 

interface CardData {
  id: number;
  heading: string;
  image: string;
  title: string;
  description: string;
  date?: string;
  icon?: string;  
} 

const CardWrapper = () => {
  const { data: cards, loading, error } = useFetchData<CardData[]>({
    url: "/data.json",
    objectKey: "articles", 
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.cardWrapper}>
      {cards?.map((card) => (
        <Card
          key={card.id}
          heading={card.heading}
          image={card.image}
          title={card.title}
          description={card.description}
          date={card.date}
          showButton={true}
          iconName={card.icon} 
        />
      ))}
    </div>
  );
};

export default CardWrapper;
