import { getCountryFlag } from "../../utils/helper";
import styles from "./Speciality.module.css";
function Speciality({ specilities, timePeriod, originCountry }) {
  return (
    <div className={styles.specilitys}>
      <h2>Speciality of the Product</h2>
      <ul>
        {specilities.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
      <p className={styles.flagContainer}>
        <strong>Origin County: </strong>
        {originCountry}
        <img
          className=""
          src={getCountryFlag(originCountry)}
          alt={`country falg of ${"INDIA"}`}
        />
      </p>
      <p>
        <strong>Time Period: </strong> {timePeriod}
      </p>
    </div>
  );
}

export default Speciality;
