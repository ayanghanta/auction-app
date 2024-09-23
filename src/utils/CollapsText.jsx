import { useState } from "react";
import styles from "./CollapsText.module.css";

function CollapsText({ children, wordShown = 10, colaps = true }) {
  const [isColaps, setIsColaps] = useState(colaps);
  return (
    <>
      {isColaps
        ? children.split(" ").slice(0, wordShown).join(" ") + "... "
        : children}
      <span onClick={() => setIsColaps((c) => !c)} className={styles.colapsBtn}>
        {isColaps ? "See more" : " Hide"}
      </span>
    </>
  );
}

export default CollapsText;
