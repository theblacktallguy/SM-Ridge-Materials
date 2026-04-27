import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const RouteScrollManager = () => {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    // HARD RESET scroll immediately on route change
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // If no hash, stop here
    if (!hash) return;

    const id = hash.replace("#", "");

    // Wait for DOM paint
    const attemptScroll = () => {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    // Multiple frame guarantee (fixes late-render issues)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(attemptScroll);
      });
    });

  }, [pathname, hash]);

  return null;
};

export default RouteScrollManager;