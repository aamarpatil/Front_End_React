import React , {createContext, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar, { NavBar } from './components/Navbar';
//import { ProductPage } from './pages/ProductPage';
import { PageNotFoundPage } from './pages/PageNotFoundPage';
import { BrowserRouter, Route } from 'react-router-dom';
import {WelcomePage} from './pages/WelcomePage';
import { GoalsPage } from './pages/GoalsPage';
import { Routes } from 'react-router-dom';
import ReactSwitch from 'react-switch';

export const ThemeContext = createContext({theme: "dark", toggleTheme:() => {}});

export const UserContext = createContext("none");
function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () =>{  
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };



  return (

    <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <div className="App" id={theme}>
    <div className="switch">
      <label>{theme === "light"? "Light Mode" :"Dark Mode"}</label>
        <ReactSwitch onChange={toggleTheme} checked={theme==="dark"}></ReactSwitch>
    </div>

   
       <BrowserRouter>
       <Navbar></Navbar>
      <Routes>
        <Route path='welcome' element={<WelcomePage></WelcomePage>}></Route>
        {/* <Route path='product' element={<ProductPage></ProductPage>}></Route> */}
        <Route path='Goals' element={<GoalsPage></GoalsPage>}></Route>
        <Route path='pagenotfound' element={<PageNotFoundPage></PageNotFoundPage>}></Route>
        </Routes>
        </BrowserRouter>
   
        </div>
    </ThemeContext.Provider>
  );
}

export default App;


