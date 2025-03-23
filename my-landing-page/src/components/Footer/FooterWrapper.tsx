import { useState, useEffect } from "react";
import DesktopFooter from "./DesktopFooter";
import MobileFooter from "./MobileFooter";

const FooterWrapper = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1080);
    };

    checkScreenSize(); 
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return isMobile ? <MobileFooter /> : <DesktopFooter />;
};

export default FooterWrapper;
