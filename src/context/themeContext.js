import React, { useState, useEffect, createContext } from 'react';

const themes = {
  dark: "dark",
  light: "",
};

export const ThemeContext = createContext(themes);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(themes.light);
  
    function changeTheme(theme) {
      setTheme(theme);
    }

    useEffect(() => {
      switch (theme) {
        case themes.light:
          document.body.classList.remove('dark');
          break;
        case themes.dark:
        default:
          document.body.classList.add('dark');
          break;
      }
    }, [theme]);
  
    return (
      <ThemeContext.Provider value={{ theme: themes, changeTheme: changeTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  }