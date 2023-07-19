import style from "./Header.module.scss";

const Header = () => {
  return (
    <div className={style.header}>
      <h3 className={style.page_name}>PageName</h3>
    </div>
  );
};

export default Header;
