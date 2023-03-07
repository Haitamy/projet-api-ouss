import React from 'react';
import './css/App.css';
import './css/responsive.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Header} from './components/Header.js';
import {Filter} from './components/Filter.js';
import {Main} from './components/Main.js';
import Detail from './components/Detail';
import { ThemeProvider } from './context/themeContext';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
  <ThemeProvider>
    <GlobalProvider>
      <Router>
        <Header />
        <Routes>
          <Route exact path="countries/" element={<><Filter /><Main /></>}/>
          <Route exact path='/countries/:name' element={<Detail />} />
        </Routes>
      </Router>
    </GlobalProvider>
  </ThemeProvider>
  );
}

export default App;
