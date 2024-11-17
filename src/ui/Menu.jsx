import { IoEllipsisVertical } from "react-icons/io5";
import styles from "./Menu.module.css";
import { createContext, useContext, useState } from "react";
import { useOutsideClick } from "../utils/useOutsideClick";

const MenuContext = createContext();

function Menus({ children }) {
  const [openMenu, setOpenMenu] = useState("");

  const close = () => setOpenMenu("");
  const open = (id) => setOpenMenu(id);
  return (
    <MenuContext.Provider value={{ openMenu, close, open }}>
      {children}
    </MenuContext.Provider>
  );
}

function Menu({ children, id }) {
  const { open, close, openMenu } = useContext(MenuContext);
  function handleClick() {
    if (openMenu === "" || openMenu !== id) open(id);
    else close();
  }
  const { refEl } = useOutsideClick(close, false);
  return (
    <div className={styles.container} ref={refEl} onClick={handleClick}>
      {children}
    </div>
  );
}

function MenusToggle({ id }) {
  const { open, close, openMenu } = useContext(MenuContext);

  function handleClick(e) {
    e.stopPropagation();
    if (openMenu === "" || openMenu !== id) open(id);
    else close();
  }

  return <IoEllipsisVertical className={styles.toggle} onClick={handleClick} />;
}
function List({ children, id }) {
  const { openMenu } = useContext(MenuContext);

  if (openMenu !== id) return null;
  return <ul className={styles.list}>{children}</ul>;
}

function Button({ children, onClick }) {
  const { close } = useContext(MenuContext);
  function handleClick() {
    onClick?.();
    close();
  }
  return (
    <li className={styles.button} onClick={handleClick}>
      {children}
    </li>
  );
}

Menus.Menu = Menu;
Menus.MenusToggle = MenusToggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
