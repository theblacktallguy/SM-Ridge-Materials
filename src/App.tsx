// src/App.tsx
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <>
      {/* Include LordIconPlayer to load the icon script globally */}
      <AppRouter />
    </>
  );
};

export default App;