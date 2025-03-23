import { useState, useEffect } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";
import DesktopHeader from "./DesktopHeader";

const Header = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1080);
    };

    checkScreenSize(); 
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <>        
      {isMobile ? (
        <MobileMenu/>
      ) : (
        <DesktopHeader />
      )}
    </>
  );
};

export default Header;