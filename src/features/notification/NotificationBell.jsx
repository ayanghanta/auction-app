import { IoNotificationsOutline } from "react-icons/io5";
import styles from "./NotificationBell.module.css";
import Notification from "./Notification";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getNotifications } from "../../services/apiNotification";
import { useOutsideClick } from "../../utils/useOutsideClick";

const FAKE_NOTIFICATION = [
  {
    _id: 1,
    message: "🎉Congratulations! You've won a bid for Retro Sun Glass",
    itemName: "Retro Sun Glass",
    productId: "123",
    url: "",
    isRead: false,
    createdAt: "2024-01-01T12:00:00Z",
  },
];

function NotificationBell() {
  const [isOpen, setIsOpen] = useState(false);
  const { refEl } = useOutsideClick(() => setIsOpen(false));

  const { data: notifications, isLoading } = useQuery({
    queryFn: getNotifications,
    queryKey: ["notifications"],
  });

  function handleOpen() {
    setIsOpen((open) => !open);
  }

  return (
    <div className={styles.container} ref={refEl}>
      <li className={styles.notifyIconContainer} onClick={handleOpen}>
        <IoNotificationsOutline className={styles.notifyIcon} />
        {!isLoading && notifications.length > 0 && (
          <span className={styles.notifyCount}>{notifications.length}</span>
        )}
      </li>
      {!isLoading && isOpen && (
        <ul className={styles.notificationsContainer}>
          <li className={styles.header}>All Notifications</li>
          {notifications.map((notification) => (
            <Notification
              key={notification._id}
              notification={notification}
              closeModal={() => setIsOpen(false)}
            />
          ))}
          {notifications.length === 0 && (
            <p className={styles.emptyMessage}>
              🔕 No notifications yet. Stay tuned for updates!
            </p>
          )}
        </ul>
      )}
    </div>
  );
}

export default NotificationBell;
