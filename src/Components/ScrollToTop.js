import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLocomotiveScroll } from "react-locomotive-scroll"; 

const ScrollToTop = ({children}) => {
  const { scroll } = useLocomotiveScroll();
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    scroll &&
      scroll.scrollTo("top", {
        duration: 0,
        disableLerp: true,
      });
  });

  return <>{children}</>;
}

export default ScrollToTop;