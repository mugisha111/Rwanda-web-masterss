import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Loader from "./components/Loader/Loader";

function App() {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 1600);
    const removeTimer = setTimeout(() => {
      setLoading(false);
      window.dispatchEvent(new Event("app-ready"));
    }, 2000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <BrowserRouter>
      {loading && <Loader fading={fading} />}
      <Home />
    </BrowserRouter>
  );
}

export default App;