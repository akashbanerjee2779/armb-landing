import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Vision from "./components/Vision";
import Founders from "./components/Founders";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-500">

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-5 right-5 z-50 p-3 rounded-full bg-white dark:bg-slate-800 text-black dark:text-white shadow-lg"
      >
        {darkMode ? "☀️" : "🌙"}
      </button>

      <Hero darkMode={darkMode} />
      <Products darkMode={darkMode} />
      <Vision darkMode={darkMode} />
      <Founders darkMode={darkMode} />
      <Contact darkMode={darkMode} />   
      <Footer darkMode={darkMode} />    

    </div>
  );
}

export default App;