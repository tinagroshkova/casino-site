import { FaFacebook, FaYoutube } from 'react-icons/fa';
import styles from './SocialLogo.module.css';

interface SocialLogoProps {
  platform: 'facebook' | 'youtube';
  url: string;
}

const SocialLogo: React.FC<SocialLogoProps> = ({ platform, url }) => {
  const Icon = platform === 'facebook' ? FaFacebook : platform === 'youtube' ? FaYoutube : null;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
      {Icon && <Icon size={30} />}
    </a>
  );
};

export default SocialLogo;
