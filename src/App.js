import "./App.css";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle, ThemeButton } from "./elements/darkButton";
import Navbar, { NavbarRow } from "./components/Navbar";
import navbarItems from "./elements/navbarItems";
import HomePage from "./pages/HomePage";
import FootballPage from "./pages/FootballPage";
import VolleyballPage from "./pages/VolleyballPage";
import BasketballPage from "./pages/BasketballPage";

//#008000

function App() {
  const [currentTheme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  const [page, setPage] = useState("Home");
  const CurrentPage = () => {
    if (page === "Home") return <HomePage />;
    else if (page === "Football") return <FootballPage />;
    else if (page === "Volleyball") return <VolleyballPage />;
    else if (page === "Basketball") return <BasketballPage />;
    else return <h1>404</h1>;
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <NavbarRow>
        <ThemeButton
          onClick={() => {
            toggleTheme();
          }}
        >
          {currentTheme === "dark" ? "light" : "dark"} mode
        </ThemeButton>
        <div>
          {navbarItems.map((item) => (
            <Navbar text={item} setPage={setPage} />
          ))}
        </div>
      </NavbarRow>
      <CurrentPage />
    </ThemeProvider>
  );
}

export default App;
