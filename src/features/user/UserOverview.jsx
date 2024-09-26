import styles from "./UserOverview.module.css";
function UserOverview() {
  return (
    <div className={styles.userOverview}>
      <img src="/users/user-1.jpg" alt="image of user" />
    </div>
  );
}

export default UserOverview;
