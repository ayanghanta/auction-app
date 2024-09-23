import Header from "../ui/Header";
import Footer from "../ui/Footer";
import styles from "./AboutUs.module.css";

function AboutUs() {
  return (
    <div>
      <Header />
      <main className={styles.aboutUs}>
        <h1>About Vintage Vault</h1>
        <p>
          Welcome to <strong>Vintage Vault</strong>, your gateway to discovering
          and bidding on timeless treasures. From historical artifacts to
          cherished memorabilia, our platform is a curated marketplace where
          collectors, history enthusiasts, and curious bidders come together to
          acquire unique pieces of history.
        </p>
        <p>
          Our mission is to preserve history by connecting valuable artifacts
          with those who appreciate their stories. Whether you&apos;re looking
          for a rare book, a historical memento, or something with sentimental
          value, <strong>Vintage Vault</strong> brings these hidden gems into
          the spotlight.
        </p>
        <p>
          We are dedicated to providing a secure, transparent, and enjoyable
          auction experience. Each item listed on our platform goes through a
          rigorous verification process, ensuring authenticity and value.
        </p>
        <h2>Why Choose Vintage Vault?</h2>
        <ul>
          <li>Authentic, verified historical artifacts.</li>
          <li>A vibrant auction community with competitive bidding.</li>
          <li>Secure transactions and trusted sellers.</li>
          <li>Dedicated customer support for any inquiries.</li>
        </ul>
        <p>
          Join us at <strong>Vintage Vault</strong> to uncover the stories of
          the past and become a part of the legacy. Whether you are buying,
          selling, or just exploring, we are excited to have you with us.
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default AboutUs;
