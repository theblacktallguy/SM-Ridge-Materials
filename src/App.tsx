import { useEffect } from "react";
import AppRouter from "./router/AppRouter";

const App = () => {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <>
      <AppRouter />
    </>
  );
};

export default App;