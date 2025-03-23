import useFetchData from '../../utils/useFetchData';
import styles from './DesktopFooter.module.css';

interface NavItem {
  title: string;
  subitems?: { title: string }[];
}

const FooterWrapper = () => {
  const { data: navItems, loading, error } = useFetchData<NavItem[]>({
    url: '/data.json',
    objectKey: 'footerItems',
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerContainer}>
        {navItems?.map((item, index) => (
          <div key={index} className={styles.navItem}>
            <div className={styles.navItemTitle}>
              {item.title}
            </div>
            {item.subitems && (
              <div className={styles.subitems}>
                {item.subitems.map((subitem: { title: string }, i: number) => (
                  <div key={i} className={styles.subitem}>
                    {subitem.title}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default FooterWrapper;
