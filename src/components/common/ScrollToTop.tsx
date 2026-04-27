import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // ALWAYS reset scroll immediately on route change
    window.scrollTo(0, 0);

    if (!hash) return;

    const id = hash.replace("#", "");

    const tryScroll = () => {
      const el = document.getElementById(id);

      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    // wait for DOM paint
    requestAnimationFrame(() => {
      requestAnimationFrame(tryScroll);
    });

  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;