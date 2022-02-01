import { useContext, useState } from "react";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import WbSunnyRoundedIcon from "@material-ui/icons/WbSunnyRounded";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { header } from "../../portfolio";
import "./Header.css";
const Header = () => {
  document.querySelectorAll(".header-link").forEach((link) =>
    link.addEventListener("click", () => {
      document.querySelector("#nav").classList.remove("active");
      setShowMenuBtn(!showMenuBtn);
    })
  );
  /* const [{ themeName, toggleTheme }] = useContext(true); */
  const [themeName, setToggleTheme] = useState("true");
  const [showMenuBtn, setShowMenuBtn] = useState(false);
  const { portfolioCode, title } = header;

  const toggleMenuBtn = () => {
    setShowMenuBtn(!showMenuBtn);
    document.querySelector("#nav").classList.toggle("active");
  };
  return (
    <header>
      <div className="header-left">
        <h3>
          {portfolioCode ? (
            <a href={portfolioCode} className="logo">
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
      </div>
      <div className="header-right">
        <nav id="nav">
          <a href="#about" className="header-link">
            about
          </a>
          <a href="#projects" className="header-link">
            projects
          </a>
          <a href="#skills" className="header-link">
            skills
          </a>
          <a href="#contact" className="header-link">
            contact
          </a>
        </nav>
        <button
          type="button"
          /*  onClick={toggleTheme} */
          className="btn btn--icon nav__theme"
          aria-label="toggle theme"
        >
          {themeName === true ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
        </button>{" "}
        <button
          type="button"
          onClick={toggleMenuBtn}
          className="btn menu-btn "
          aria-label="toggle navigation"
        >
          {showMenuBtn ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
