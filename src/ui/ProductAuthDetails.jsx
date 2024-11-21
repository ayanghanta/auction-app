import { BASE_URL } from "../constant";
import styles from "./ProductAuthDetails.module.css";

function ProductAuthDetails({ certificateNo, verifiedBy, legalDocument }) {
  const DOC_URL = `${BASE_URL}/documents/${legalDocument}`;

  return (
    <div className={styles.authDetailsContainer}>
      <h3 className={styles.sectionTitle}>Product Authentication Details</h3>
      <table className={styles.authTable}>
        <tbody>
          <tr>
            <td className={styles.tableLabel}>Certificate Number:</td>
            <td>{certificateNo}</td>
          </tr>
          <tr>
            <td className={styles.tableLabel}>Verified By:</td>
            <td>{verifiedBy}</td>
          </tr>
          <tr>
            <td className={styles.tableLabel}>Legal Document:</td>
            <td>
              <a
                href={DOC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.downloadLink}
              >
                Download Document
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProductAuthDetails;
