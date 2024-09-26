import styles from "./Speciality.module.css";
function Speciality({ product }) {
  return (
    <div className={styles.specilitys}>
      <h2>Speciality of the Product</h2>
      <ul>
        {product.specilities.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
      <p>
        <strong>Origin County: </strong> India
      </p>
      <p>
        <strong>Time Period: </strong> 1800s
      </p>
    </div>
  );
}

export default Speciality;