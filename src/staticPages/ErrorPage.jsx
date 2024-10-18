import { Link, useRouteError } from "react-router-dom";
import styles from "./ErrorPage.module.css";
import Button from "../ui/buttons/Button";
function ErrorPage() {
  return (
    <div className={styles.error}>
      <p>Something went Wrong :/</p>
      <p className={styles.message}>Page not found !</p>
      <Button type="error">
        <Link to="/">&larr; Back To Home</Link>
      </Button>
    </div>
  );
}

export default ErrorPage;
