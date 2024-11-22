import { useSearchParams } from "react-router-dom";
import styles from "./PaginationBox.module.css";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

function PaginationBox({ totalSize, resPerPage }) {
  const [searchParams, setSearchParams] = useSearchParams();
  /*
  const totalsSize=27
  const resPerPage=5

  how many page ?
  const totalPages=Math.cel(27/5) ===>Math.ceil(3.2)=>4
  Array.from({ length: n }, (_, i) => i + 1) ==>[1,2,3,4]


  */
  const totalPages = Math.ceil(totalSize / resPerPage);
  const buttonsArray = Array.from({ length: totalPages }, (_, i) => i + 1);

  const currentPage = +searchParams.get("page") || 1;

  function handleClick(page) {
    searchParams.set("page", page);
    setSearchParams(searchParams);
  }

  function handlePrev() {
    if (currentPage <= 1) return;
    searchParams.set("page", currentPage - 1);
    setSearchParams(searchParams);
  }
  function handeNext() {
    if (currentPage >= totalPages) return;
    searchParams.set("page", currentPage + 1);
    setSearchParams(searchParams);
  }

  return (
    <div className={styles.paginationBox}>
      <button
        onClick={handlePrev}
        className={`${styles.navButton} ${
          currentPage === 1 ? styles.disabled : ""
        }`}
        disabled={currentPage === 1}
      >
        <IoChevronBack />
        <span>Prev</span>
      </button>
      <div className={styles.buttons}>
        {buttonsArray.map((value) => (
          <button
            key={value}
            onClick={() => handleClick(value)}
            className={`${styles.pageButton} ${
              value === currentPage ? styles.active : ""
            }`}
          >
            {value}
          </button>
        ))}
      </div>
      <button
        onClick={handeNext}
        className={`${styles.navButton} ${
          currentPage === totalPages ? styles.disabled : ""
        }`}
        disabled={currentPage === totalPages}
      >
        <span>Next</span>
        <IoChevronForward />
      </button>
    </div>
  );
}

export default PaginationBox;
