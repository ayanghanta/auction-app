import { Link, useRouteError } from "react-router-dom";
import styles from "./ErrorPage.module.css";
import Button from "../ui/buttons/Button";
function ErrorPage() {
  const error = useRouteError();
  return (
    <div className={styles.error}>
      <p>Something went Wrong :/</p>
      <p className={styles.message}>
        {error.data || error.message || error.statusText}
      </p>
      <Button type="primary">
        <Link to="/">&larr; Back To Home</Link>
      </Button>
    </div>
  );
}

export default ErrorPage;
