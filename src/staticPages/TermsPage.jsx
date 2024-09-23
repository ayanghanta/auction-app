import styles from "./TermsPage.module.css";
import Footer from "../ui/Footer";
import Header from "../ui/Header";
function TermsPage() {
  return (
    <div>
      <Header />

      <main className={styles.termsContainer}>
        <h1>Terms of Service</h1>
        <p>Effective Date: September 1, 2024</p>

        <p>
          Welcome to <strong>Vintage Vault</strong>. By accessing or using our
          website and services, you agree to comply with and be bound by the
          following terms and conditions. Please review these terms carefully.
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using the <strong>Vintage Vault</strong> platform, you
          agree to be bound by these Terms of Service and any additional terms
          applicable to certain features of our website.
        </p>

        <h2>2. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms of Service at any time. We
          will notify you of significant changes by updating the &quot;Effective
          Date&quot; at the top of this page. Continued use of our services
          after such changes constitutes your acceptance of the new terms.
        </p>

        <h2>3. User Accounts</h2>
        <p>
          To access certain features of our platform, you may be required to
          create an account. You agree to provide accurate, complete, and
          current information during the registration process and to update such
          information as necessary. You are responsible for maintaining the
          confidentiality of your account credentials and for all activities
          that occur under your account.
        </p>

        <h2>4. User Conduct</h2>
        <p>When using our platform, you agree to:</p>
        <ul>
          <li>Comply with all applicable laws and regulations.</li>
          <li>
            Not use the platform for any illegal or unauthorized purposes.
          </li>
          <li>
            Not post or transmit any material that is offensive, defamatory, or
            infringes upon others&quot; rights.
          </li>
          <li>Respect the intellectual property rights of others.</li>
        </ul>

        <h2>5. Auction and Bidding Policies</h2>
        <p>
          Our platform allows users to participate in auctions for historical
          and vintage items. By participating, you agree to:
        </p>
        <ul>
          <li>
            Bid only if you intend to purchase the item if your bid is the
            highest.
          </li>
          <li>
            Understand that all sales are final, and items are sold &quot;as
            is.&quot;
          </li>
          <li>
            Provide accurate payment information if you are the winning bidder.
          </li>
        </ul>

        <h2>6. Listing Your Items</h2>
        <p>
          As a seller, you may list items for auction, subject to the following
          conditions:
        </p>
        <ul>
          <li>You are the rightful owner or authorized to sell the item.</li>
          <li>You provide accurate and complete information about the item.</li>
          <li>
            Your listing does not violate any applicable laws or regulations.
          </li>
          <li>
            The item will be delivered to the winning bidder in the condition
            described.
          </li>
        </ul>

        <h2>7. Intellectual Property</h2>
        <p>
          All content on the <strong>Vintage Vault</strong> platform, including
          text, images, graphics, logos, and software, is the property of
          <strong> Vintage Vault</strong> or its licensors and is protected by
          intellectual property laws. You may not use, reproduce, or distribute
          any content without our prior written permission.
        </p>

        <h2>8. Termination</h2>
        <p>
          We reserve the right to terminate or suspend your account and access
          to our services at any time, without prior notice, for conduct that we
          believe violates these Terms of Service or is harmful to other users,
          us, or third parties.
        </p>

        <h2>9. Limitation of Liability</h2>
        <p>
          In no event shall <strong>Vintage Vault</strong> be liable for any
          indirect, incidental, special, consequential, or punitive damages
          arising out of or relating to your use of our platform or services.
        </p>

        <h2>10. Governing Law</h2>
        <p>
          These Terms of Service and your use of the platform will be governed
          by and construed in accordance with the laws of India, without regard
          to its conflict of law principles.
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default TermsPage;
