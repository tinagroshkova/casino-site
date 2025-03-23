import { useState, useEffect } from "react";
import useFetchData from "../../utils/useFetchData";
import styles from "./MobileFooter.module.css";
import SocialLogo from "../SocialLogo/SocialLogo";

interface FooterItem {
  title: string;
  subitems: { title: string }[];
}

const MobileFooter = () => {
  const { data: footerItems, loading, error } = useFetchData<FooterItem[]>({
    url: "/data.json",
    objectKey: "footerItems",
  });

  const [companySubitems, setCompanySubitems] = useState<{ title: string }[] | null>(null);

  useEffect(() => {
    if (footerItems) {
      const companyItem = footerItems.find((item) => item.title === "Company");
      setCompanySubitems(companyItem?.subitems || null);
    }
  }, [footerItems]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!companySubitems || companySubitems.length === 0) return <p>No company information available.</p>;

  return (
    <footer className={styles.mobileFooter}>
      <ul className={styles.footerList}>
        {companySubitems.map((subitem, index) => (
          <li key={index} className={styles.footerItem}>
            <a href="#">{subitem.title}</a>
          </li>
        ))}
      </ul>
      <div className="socialIcons">
        <SocialLogo platform="facebook" url="https://facebook.com/your-page" />
        <SocialLogo platform="youtube" url="https://youtube.com/your-channel" />
      </div>
    </footer>
  );
};

export default MobileFooter;
