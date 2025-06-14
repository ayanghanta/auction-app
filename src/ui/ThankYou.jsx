import styles from "./ThankYou.module.css";

export default function ThankYou() {
  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <img
          src="/logo.png"
          alt="Antique Bazzar Logo"
          className={styles.logo}
        />
        <h1 className={styles.heading}>Thank You for Your Purchase! 🎉</h1>
        <p className={styles.message}>
          Your transaction was successful. We appreciate your support and hope
          you enjoy your item from <strong>Antique Bazzar</strong>.
        </p>
        <p className={styles.subText}>
          A confirmation email has been sent to your inbox.
        </p>
        <button
          className={styles.button}
          onClick={() => (window.location.href = "/app/myOrders")}
        >
          Track your orders
        </button>
      </div>
    </main>
  );
}
