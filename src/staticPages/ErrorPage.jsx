import { Link, useRouteError } from "react-router-dom";
import styles from "./ErrorPage.module.css";
import Button from "../ui/buttons/Button";
function ErrorPage() {
  const error = useRouteError();
  return (
    <div className={styles.error}>
      <p>404 Page not Found :/</p>
      <p className={styles.message}>{error.data || error.message}</p>
      <Button type="primary">
        <Link to="/">&larr; Back To Home</Link>
      </Button>
    </div>
  );
}

export default ErrorPage;
