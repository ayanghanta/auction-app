import styles from "./UserPersonalInfo.module.css";
import Button from "./buttons/Button";

function UserPersonalInfo() {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.imageContainer}>
        <img src="/users/user-1.jpg" alt="image of USER" />
        <Button type="update">Upadte Photo</Button>
      </div>
      <form className={styles.infoData}>
        <div>
          <label htmlFor="userName">Full Name</label>
          <input
            type="text"
            name="userName"
            id="userName"
            defaultValue={"Ayan Ghanta"}
          />
        </div>
        <div>
          <label htmlFor="phoneNo">Phone No</label>
          <input type="text" name="phoneNo" id="phoneNo" />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            type="emial"
            name="address"
            id="address"
            defaultValue={"ayan674@gamil.com"}
          />
        </div>
        <div className={styles.buttns}>
          <Button type="secondary" role="reset">
            Cancel
          </Button>
          <Button type="update">Update</Button>
        </div>
      </form>
    </div>
  );
}

export default UserPersonalInfo;
