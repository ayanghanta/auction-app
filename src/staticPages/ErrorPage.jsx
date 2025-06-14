import styles from "./ErrorPage.module.css";
import Button from "../ui/buttons/Button";
function ErrorPage() {
  return (
    <div className={styles.error}>
      <p>Something went Wrong :/</p>
      <p className={styles.message}>Page not found !</p>
      <Button type="error" to="/app">
        &larr; Back To Home
      </Button>
    </div>
  );
}

export default ErrorPage;
