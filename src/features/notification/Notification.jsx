import { useNavigate } from "react-router-dom";
import { getViewLink } from "../../utils/helper";
import styles from "./Notification.module.css";
import { useMarkRead } from "./useMarkRead";

function Notification({ notification, closeModal }) {
  const { message, type } = notification;
  const { markReadNotification } = useMarkRead();
  const navigate = useNavigate();

  function handleClickView() {
    navigate(viewlink);
    closeModal?.();
    markReadNotification(notification._id);
  }

  const viewlink = getViewLink(type);
  return (
    <li className={styles.notificationCard}>
      <div className={styles.notificationText}>
        <span>{message}</span>
        <span className={styles.notificationButton} onClick={handleClickView}>
          View Details
        </span>
      </div>
    </li>
  );
}

export default Notification;
