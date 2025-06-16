import { useState } from "react";
import { USER_IMG_URL } from "../../constant";
import DropdownMenu from "../../ui/DropdownMenu";
import styles from "./userOverview.module.css";
import { useOutsideClick } from "../../utils/useOutsideClick";
function UserOverview({ imageUrl }) {
  const [showMenu, setShowMenu] = useState(false);

  const { refEl } = useOutsideClick(() => setShowMenu(false));

  return (
    <div
      className={styles.userOverview}
      onClick={() => setShowMenu((sw) => !sw)}
    >
      <img src={`${USER_IMG_URL}/${imageUrl}`} alt="image of user" />
      {showMenu && <DropdownMenu refElement={refEl} />}
    </div>
  );
}

export default UserOverview;
