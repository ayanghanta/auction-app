import { useState } from "react";
import { BASE_URL } from "../../constant";
import DropdownMenu from "../../ui/DropdownMenu";
import styles from "./UserOverview.module.css";
function UserOverview({ imageUrl }) {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div
      className={styles.userOverview}
      onClick={() => setShowMenu((sw) => !sw)}
    >
      <img src={`${BASE_URL}/images/users/${imageUrl}`} alt="image of user" />
      {showMenu && <DropdownMenu />}
    </div>
  );
}

export default UserOverview;
