import useFetchData from "../../utils/useFetchData"; 
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher"; 
import Dropdown from "../Dropdown/Dropdown";
import styles from "./DesktopHeader.module.css";
import appLogo from "../../assets/app-logo.svg"; 

interface NavItem {
  title: string;
  image?: string; 
  dropdown?: { title: string; image?: string }[]; 
}

interface NavData {
  left: NavItem[];
  right: NavItem[];
}

const DesktopHeader = () => {
  const { data: navItems, loading, error } = useFetchData<NavData>({
    url: "/data.json",
    objectKey: "navItems", 
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src={appLogo} alt="App Logo" className={styles.logoImage} />
        </div>

        <div className={styles.navContainer}>
          <ul className={`${styles.navList} ${styles.firstList}`}>
            {navItems?.left.map((item, index) => (
              <li key={index} className={styles.navItem}>
                <a href="#">{item.title.toUpperCase()}</a>
                {item.dropdown && (
                  <div className={styles.dropdown}>
                    <Dropdown items={item.dropdown.map((d) => ({ title: d.title, image: d.image }))} />
                  </div>
                )}
              </li>
            ))}
          </ul>

          <ul className={`${styles.navList} ${styles.secondList}`}>
            {navItems?.right.map((item, index) => (
              <li key={index} className={styles.navItem}>
                <a href="#">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className={styles.navImage}
                    />
                  )}
                  {item.title}
                </a>
                {item.dropdown && (
                  <div className={styles.dropdown}>
                    <Dropdown items={item.dropdown.map((d) => ({ title: d.title, image: d.image }))} />
                  </div>
                )}
              </li>
            ))}
            <li>
              <ThemeSwitcher />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default DesktopHeader;
