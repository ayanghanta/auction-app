import { useSearchParams } from "react-router-dom";
import styles from "./PaginationBox.module.css";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

function PaginationBox({ totalSize, resPerPage }) {
  /*
  const totalsSize=27
  const resPerPage=5

  how many page ?
  const totalPages=Math.cel(27/5) ===>Math.ceil(3.2)=>4
  Array.from({ length: n }, (_, i) => i + 1) ==>[1,2,3,4]


  */
  const [searchParams, setSearchParams] = useSearchParams();

  const totalPages = Math.ceil(totalSize / resPerPage);
  const buttonsArray = Array.from({ length: totalPages }, (_, i) => i + 1);

  const currentPage = +searchParams.get("page") || 1;

  function hanldeClick(page) {
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
      <button onClick={handlePrev}>
        <IoChevronBack />
        <span>Prev</span>
      </button>
      <div className={styles.buttons}>
        {buttonsArray.map((value) => (
          <button
            key={value}
            onClick={() => hanldeClick(value)}
            className={value === currentPage ? styles.active : ""}
          >
            {value}
          </button>
        ))}
      </div>
      <button onClick={handeNext}>
        <span>Next</span>
        <IoChevronForward />
      </button>
    </div>
  );
}

export default PaginationBox;
