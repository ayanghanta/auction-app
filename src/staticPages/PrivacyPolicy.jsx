import styles from "./PrivacyPolicy.module.css";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
function PrivacyPolicy() {
  return (
    <div>
      <Header />
      <main className={styles.privacyPolicy}>
        <h1>Privacy Policy</h1>

        <p>
          At <strong>Antique Bazzar</strong>, we are committed to protecting
          your privacy. This Privacy Policy outlines how we collect, use, and
          safeguard your personal information when you use our website and
          services.
        </p>

        <h2>1. Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li>
            <strong>Personal Information:</strong> Name, email address, billing
            information, and other contact details.
          </li>
          <li>
            <strong>Usage Data:</strong> Information on how you interact with
            our platform, including browsing activity and preferences.
          </li>
          <li>
            <strong>Device Information:</strong> Details about your device, such
            as IP address, browser type, and operating system.
          </li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use your information for various purposes, including:</p>
        <ul>
          <li>Providing and maintaining our services.</li>
          <li>
            Processing transactions and communicating with you about your
            purchases.
          </li>
          <li>Improving our website, services, and customer experience.</li>
          <li>Ensuring the security of our platform.</li>
          <li>Sending marketing and promotional materials, if you opt-in.</li>
        </ul>

        <h2>3. Sharing Your Information</h2>
        <p>
          We may share your personal information in the following circumstances:
        </p>
        <ul>
          <li>
            With trusted third-party service providers who help us operate our
            platform (e.g., payment processors).
          </li>
          <li>To comply with legal obligations or to protect our rights.</li>
          <li>
            In the event of a merger, acquisition, or sale of all or part of our
            assets.
          </li>
        </ul>

        <h2>4. Security of Your Information</h2>
        <p>
          We take reasonable steps to protect your personal information from
          unauthorized access, use, or disclosure. However, please note that no
          method of transmission over the internet or electronic storage is
          completely secure.
        </p>

        <h2>5. Your Data Protection Rights</h2>
        <p>
          Depending on your location, you may have the following rights
          regarding your personal data:
        </p>
        <ul>
          <li>The right to access your data.</li>
          <li>The right to rectify inaccurate information.</li>
          <li>The right to request the deletion of your data.</li>
          <li>
            The right to restrict processing or object to certain uses of your
            data.
          </li>
        </ul>

        <h2>6. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new policy on our website and
          updating the &quot;Effective Date&quot; at the top of this page.
        </p>

        <h2 id="contactUs">7. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy or how we handle
          your personal information, please contact us at:
        </p>
        <p>
          <strong>Email:</strong> support@vintagevault.com <br />
          <strong>Address:</strong> National Highway 6, Banitabla, Uluberia,
          Howrah, West Bengal 711316
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
