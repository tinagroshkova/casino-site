
import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import useFetchData from "../../utils/useFetchData";
import { NavData } from "../../types";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import styles from "./MobileMenu.module.css";
import appLogo from "../../assets/app-logo.svg";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownState, setDropdownState] = useState<{ [key: string]: boolean }>({});

  const { data: navItems, loading, error } = useFetchData<NavData>({
    url: "/data.json",
    objectKey: "navItems",
  });

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleDropdown = (index: string) => {
    setDropdownState((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src={appLogo} alt="App Logo" className={styles.logoImage} />
        </div>
        <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
          <button
            className={`${styles.burger} ${isOpen ? styles.open : ""}`}
            aria-label="Toggle Menu"
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          <nav className={styles.navContainer}>
            <ul className={styles.firstList}>
              {navItems?.left.map((item, index) => (
                <li key={index}>
                  <div className={styles.dropdownList} onClick={() => item.dropdown && toggleDropdown(`first-${index}`)}>
                    <a href="#" className={dropdownState[`first-${index}`] ? styles.open : ""}>
                      {item.title}
                    </a>
                    {item.dropdown && (
                      <span className={`${styles.dropdownIcon} ${dropdownState[`first-${index}`] ? styles.open : ""}`}>
                        {dropdownState[`first-${index}`] ? <FaChevronUp size={16} /> : <FaChevronDown size={16} />}
                      </span>
                    )}
                  </div>
                  {item.dropdown && dropdownState[`first-${index}`] && (
                    <Dropdown items={item.dropdown.map((d) => ({ title: d.title }))} />
                  )}
                </li>
              ))}
            </ul>

            <ul className={styles.secondList}>
              {navItems?.right.map((item, index) => (
                <li key={index}>
                  <div
                    className={styles.dropdownList}
                    onClick={() => item.dropdown && toggleDropdown(`right-${index}`)}
                  >
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
                      <span
                        className={`${styles.dropdownIcon} ${dropdownState[`right-${index}`] ? styles.open : ""
                          }`}
                      >
                        {dropdownState[`right-${index}`] ? (
                          <FaChevronUp size={16} />
                        ) : (
                          <FaChevronDown size={16} />
                        )}
                      </span>
                    )}
                  </div>

                  {item.dropdown && dropdownState[`right-${index}`] && (
                    <Dropdown items={item.dropdown.map((d) => ({ title: d.title, image: d.image }))} />
                  )}
                </li>
              ))}
              <li >
                <ThemeSwitcher className={styles.switcher} />
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    </header>
  );
};

export default MobileMenu;
