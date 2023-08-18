import style from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintbrush } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import NavBar from "./NavBar/NavBar";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style["left-section"]}>
        <Link className={style.link_wrapper} to={`/`}>
          <h3 className={style.page_name}>
            P.aint{" "}
            <FontAwesomeIcon icon={faPaintbrush} className={style.brush_icon} />
          </h3>
        </Link>

        <span className={style["made-by"]}>
          Made by{" "}
          <a
            href="https://github.com/uwerrrr"
            className={style["made-by__link"]}
          >
            {" "}
            Oscar NGUYEN
          </a>
        </span>
      </div>
      <div className={style.content}>
        <NavBar />
      </div>
    </div>
  );
};

export default Header;
