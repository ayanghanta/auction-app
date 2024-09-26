import styles from "./UserOverview.module.css";
function UserOverview() {
  return (
    <div className={styles.userOverview}>
      <img src="/users/default-user.jpg" alt="image of user" />
    </div>
  );
}

export default UserOverview;
