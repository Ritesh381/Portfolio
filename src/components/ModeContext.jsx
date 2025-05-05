import { createContext, useState, useEffect } from "react";

// Create context with default value
const ModeContext = createContext({ darkMode: true, toggleMode: () => {} });

const ModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  
  // Apply dark mode or light mode globally
  useEffect(() => {
    if (darkMode) {
      // For Bootstrap dark mode
      document.body.classList.add("bg-dark");
      document.body.classList.add("text-light");
    } else {
      document.body.classList.remove("bg-dark");
      document.body.classList.remove("text-light");
    }
  }, [darkMode]);
  
  // Toggle dark/light mode
  const toggleMode = () => {
    setDarkMode(!darkMode);
  };
  
  return (
    <ModeContext.Provider value={{ darkMode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export { ModeContext, ModeProvider };  // Named export