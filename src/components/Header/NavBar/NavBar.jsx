import { NavLink } from "react-router-dom";
import style from "./NavBar.module.scss";

const NavBar = () => {
  const activeStyles = ({ isActive }) =>
    isActive ? `${style.link} ${style.link__active}` : style.link;

  return (
    <nav className={style.nav}>
      <NavLink className={activeStyles} to="/">
        Home
      </NavLink>
      <NavLink className={activeStyles} to="/favourites/">
        Favourites
      </NavLink>
    </nav>
  );
};

export default NavBar;
