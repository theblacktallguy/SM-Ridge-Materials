import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    const id = hash?.replace("#", "");

    const runScroll = () => {
      if (id) {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
          return;
        }
      }

      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };

    // wait 2 animation frames (ENSURES DOM is fully painted)
    requestAnimationFrame(() => {
      requestAnimationFrame(runScroll);
    });

  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;