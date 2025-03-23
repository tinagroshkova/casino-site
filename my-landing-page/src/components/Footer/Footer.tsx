import styles from './Footer.module.css';

const Footer = () => {
    return (
      <footer className={styles.footer}>
        <div>&copy; {new Date().getFullYear()} My Landing Page. All Rights Reserved.</div>
      </footer>
    );
  };
  
  export default Footer;