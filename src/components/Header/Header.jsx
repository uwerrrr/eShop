import style from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintbrush } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className={style.header}>
      <h3 className={style.page_name}>
        Can't paint?{" "}
        {/* <img
          src="https://em-content.zobj.net/thumbs/320/google/350/paintbrush_1f58c-fe0f.png"
          className={style.brush_icon}
        /> */}
      </h3>
      <div className={style.content}>abc</div>
    </div>
  );
};

export default Header;
