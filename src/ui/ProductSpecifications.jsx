import { getCountryFlag } from "../utils/helper";
import styles from "./ProductSpecifications.module.css";
function ProductSpecifications({
  originCountry,
  timePeriod,
  dimentions,
  meterial,
  condition,
}) {
  return (
    <ul className={styles.container}>
      <li className={styles.flagContainer}>
        <span className={styles.tagTitle}>Origin County: </span>
        {originCountry}
        {getCountryFlag(originCountry) && (
          <img
            className=""
            src={getCountryFlag(originCountry)}
            alt={`country falg of ${"INDIA"}`}
          />
        )}
      </li>
      <li>
        <span className={styles.tagTitle}>Time Period: </span>{" "}
        <span>{timePeriod}</span>
      </li>
      <li>
        <span className={styles.tagTitle}>Dimensions: </span>
        <span>
          {dimentions.height} cm x {dimentions.width} cm x {dimentions.depth}{" "}
          cm, Weight: {dimentions.weight} kg
        </span>
      </li>
      <li>
        <span className={styles.tagTitle}>Material: </span>
        <span>made of {meterial.split(",").join(", ")}</span>
      </li>
      <li>
        <span className={styles.tagTitle}>Condition: </span>
        {condition}
      </li>
    </ul>
    // <ul >

    // </ul>
  );
}

export default ProductSpecifications;
