import { useState } from "react";
import { USER_IMG_URL } from "../../constant";
import DropdownMenu from "../../ui/DropdownMenu";
import styles from "./UserOverview.module.css";
function UserOverview({ imageUrl }) {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div
      className={styles.userOverview}
      onClick={() => setShowMenu((sw) => !sw)}
    >
      <img src={`${USER_IMG_URL}/${imageUrl}`} alt="image of user" />
      {showMenu && <DropdownMenu />}
    </div>
  );
}

export default UserOverview;
