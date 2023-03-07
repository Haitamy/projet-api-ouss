import React, {useState, useContext} from 'react';
import { ThemeContext } from '../context/themeContext';
import {useNavigate} from "react-router-dom";

export const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const {theme, changeTheme} = useContext(ThemeContext);
  const navigate = useNavigate();
  return (
    <header className="headerComponent">
      <h1 onClick={() => navigate("/countries")}>Where in the world?</h1>
      <h2 onClick={() => { setDarkMode(!darkMode); changeTheme(darkMode ? theme.light : theme.dark); }}> Dark Mode</h2> 
    </header>
  )
}
