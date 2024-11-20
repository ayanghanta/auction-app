import { cloneElement, createContext, useContext, useState } from "react";
import { useOutsideClick } from "../utils/useOutsideClick";
import styles from "./Modal.module.css";
import { IoClose } from "react-icons/io5";

const ModalContext = createContext();

function Modal({ children }) {
  const [windowId, setWindowId] = useState("ok");

  const closeModal = () => setWindowId("");
  const openModal = (id) => setWindowId(id);

  // console.log(windowId);

  return (
    <ModalContext.Provider value={{ closeModal, openModal, windowId }}>
      {children}
    </ModalContext.Provider>
  );
}

function Button({ children, id }) {
  const { closeModal, openModal, windowId } = useContext(ModalContext);

  function handleClick() {
    if (windowId === "" || windowId !== id) openModal(id);
    else closeModal();
  }

  return cloneElement(children, { onClick: handleClick });
}

function Window({ children, id }) {
  const { windowId, closeModal } = useContext(ModalContext);
  // const { refEl } = useOutsideClick(closeModal);

  if (id !== windowId) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modalContainer}>
        <div className={styles.window}>
          <IoClose className={styles.modalCloses} onClick={closeModal} />
          {cloneElement(children, { handelCloseModal: closeModal })}
        </div>
      </div>
    </div>
  );

  // return cloneElement(children, { onCancel: closeModal });
}

Modal.Button = Button;
Modal.Window = Window;

export default Modal;
