import { DropdownItem } from "../../types";
import styles from "./Dropdown.module.css";

interface DropdownProps {
  items: DropdownItem[];
}

const Dropdown: React.FC<DropdownProps> = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} className={styles.dropdownItem}>
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
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;

