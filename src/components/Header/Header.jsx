import style from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintbrush } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import NavBar from "./NavBar/NavBar";

const Header = () => {
  return (
    <div className={style.header}>
      <Link className={style.link_wrapper} to={`/`}>
        <h3 className={style.page_name}>
          P.aint{" "}
          <FontAwesomeIcon icon={faPaintbrush} className={style.brush_icon} />
          {/* <img
          src="https://em-content.zobj.net/thumbs/320/google/350/paintbrush_1f58c-fe0f.png"
          className={style.brush_icon}
        /> */}
        </h3>
      </Link>
      <div className={style.content}>
        <NavBar />
      </div>
    </div>
  );
};

export default Header;
