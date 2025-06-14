import { useState } from "react";
import styles from "./LandingPage.module.css";

// Importing Phosphor Icons
import {
  PiMagnifyingGlassDuotone,
  PiUploadDuotone,
  PiCalendarBlankDuotone,
  PiHandshakeDuotone,
  PiCurrencyDollarDuotone,
  PiShieldCheckDuotone,
  PiUsersDuotone,
  PiHeadsetDuotone,
  PiQuestionDuotone,
  PiFacebookLogoDuotone,
  PiTwitterLogoDuotone,
  PiInstagramLogoDuotone,
} from "react-icons/pi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuctions } from "../features/auction/useAuctions";
import Spinner from "../ui/Spinner";
import { PRODUCT_IMG_URL } from "../constant";
import CollapsText from "../utils/CollapsText";
import { testimonials, faqs } from "../utils/demmyData";

const LandingPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const navigate = useNavigate();
  const { auctions, isLoading } = useAuctions();

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className={styles.landingPage}>
      {/* Sticky Navigation Bar */}
      <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
          <img
            src="/logo.png"
            alt="Vintage Vault Logo"
            className={styles.logo}
          />
        </div>
        <ul className={styles.navLinks}>
          <li>
            <NavLink to="/aboutus" className={styles.navLink}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/app" className={styles.navLink}>
              Explore
            </NavLink>
          </li>
          <li>
            <a href="#features" className={styles.navLink}>
              Features
            </a>
          </li>
          <li>
            <a href="#testimonials" className={styles.navLink}>
              Testimonials
            </a>
          </li>
          <li>
            <a href="#faq" className={styles.navLink}>
              FAQ
            </a>
          </li>
          <li>
            <NavLink
              to="/singup"
              className={`${styles.navLink} ${styles.ctaButton}`}
            >
              Sign In
            </NavLink>
          </li>
        </ul>
        <div className={styles.hamburger}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroHeading}>
            Discover Timeless Treasures & Uncover History
          </h1>
          <p className={styles.heroSubheading}>
            Welcome to{" "}
            <strong className={styles.highlight}>Vintage Vault</strong>, your
            gateway to discovering and bidding on timeless treasures.
          </p>
          <div className={styles.heroCta}>
            <button
              className={styles.primaryCta}
              onClick={() => navigate("/app")}
            >
              Explore Auctions
            </button>
            <button
              className={styles.secondaryCta}
              onClick={() => navigate("/singup")}
            >
              Submit Your Item
            </button>
          </div>
        </div>
        <div></div>
      </section>

      <div className={styles.mainContent}>
        {/* Hero Section */}

        {/* Features Section */}
        <section id="features" className={styles.featuresSection}>
          <h2 className={styles.sectionHeading}>How It Works</h2>
          <p className={styles.sectionSubheading}>
            A simple process to bring your treasures to light or find your next
            masterpiece.
          </p>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <PiUploadDuotone className={styles.featureIcon} />
              <h3>Submit Your Item</h3>
              <p>
                Easily upload details and documentation for your antique item.
                Our streamlined process makes listing a breeze.
              </p>
            </div>
            <div className={styles.featureCard}>
              <PiMagnifyingGlassDuotone className={styles.featureIcon} />
              <h3>Expert Verification</h3>
              <p>
                Our dedicated team rigorously verifies each product, ensuring
                authenticity and value for both buyers and sellers.
              </p>
            </div>
            <div className={styles.featureCard}>
              <PiCalendarBlankDuotone className={styles.featureIcon} />
              <h3>Schedule Your Auction</h3>
              <p>
                Once verified, you can schedule your item to go live. Set your
                desired auction duration and reserve price.
              </p>
            </div>
            <div className={styles.featureCard}>
              <PiHandshakeDuotone className={styles.featureIcon} />
              <h3>Live Bidding</h3>
              <p>
                Watch as collectors from around the globe bid on your unique
                piece. Experience the thrill of live auctions.
              </p>
            </div>
            <div className={styles.featureCard}>
              <PiCurrencyDollarDuotone className={styles.featureIcon} />
              <h3>Get Paid</h3>
              <p>
                After the auction concludes, the highest bidder secures the
                product, and you receive your payment securely and promptly.
              </p>
            </div>
          </div>
        </section>

        {/* Explore Section */}
        <section id="explore" className={styles.exploreSection}>
          <h2 className={styles.sectionHeading}>
            Explore Our Timeless Collection
          </h2>
          <p className={styles.sectionSubheading}>
            Dive into a curated selection of unique historical artifacts and
            cherished memorabilia currently up for auction.
          </p>
          {!isLoading ? (
            <div className={styles.exploreGrid}>
              {auctions.map((product) => (
                <ExploreProductCard product={product} key={product._id} />
              ))}
            </div>
          ) : (
            <div className={styles.exploreGrid}></div>
          )}
          <div className={styles.exploreCta}>
            <button
              className={styles.primaryCta}
              onClick={() => navigate("/app")}
            >
              View All Auctions
            </button>
          </div>
        </section>

        {/* Testimonial Section */}
        <section id="testimonials" className={styles.testimonialsSection}>
          <h2 className={styles.sectionHeading}>What Our Community Says</h2>
          <p className={styles.sectionSubheading}>
            Hear from collectors and sellers who&apos;ve experienced the Vintage
            Vault difference.
          </p>
          <div className={styles.testimonialGrid}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className={styles.testimonialCard}>
                <p className={styles.quoteText}>
                  &quot;{testimonial.quote}&quot;
                </p>
                <p className={styles.quoteAuthor}>- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className={styles.whyChooseUsSection}>
          <h2 className={styles.sectionHeading}>Why Choose Vintage Vault?</h2>
          <p className={styles.sectionSubheading}>
            Dedicated to providing a secure, transparent, and enjoyable auction
            experience.
          </p>
          <div className={styles.whyChooseUsGrid}>
            <div className={styles.whyChooseUsItem}>
              <PiShieldCheckDuotone className={styles.whyChooseUsIcon} />
              <h3>Authenticity Guaranteed</h3>
              <p>
                Each item undergoes rigorous verification, ensuring genuine
                historical artifacts.
              </p>
            </div>
            <div className={styles.whyChooseUsItem}>
              <PiUsersDuotone className={styles.whyChooseUsIcon} />
              <h3>Vibrant Community</h3>
              <p>
                Join a thriving network of collectors and history enthusiasts
                for competitive bidding.
              </p>
            </div>
            <div className={styles.whyChooseUsItem}>
              <PiHandshakeDuotone className={styles.whyChooseUsIcon} />
              <h3>Secure Transactions</h3>
              <p>
                Our platform ensures trusted sellers and secure, transparent
                transactions every time.
              </p>
            </div>
            <div className={styles.whyChooseUsItem}>
              <PiHeadsetDuotone className={styles.whyChooseUsIcon} />
              <h3>Dedicated Support</h3>
              <p>
                Our customer support team is always ready to assist you with any
                inquiries.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className={styles.faqSection}>
          <h2 className={styles.sectionHeading}>Frequently Asked Questions</h2>
          <p className={styles.sectionSubheading}>
            Find quick answers to common questions about Vintage Vault.
          </p>
          <div className={styles.faqContainer}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <button
                  className={styles.faqQuestion}
                  onClick={() => toggleFaq(index)}
                  aria-expanded={activeFaq === index}
                >
                  <PiQuestionDuotone className={styles.faqIcon} />
                  <span>{faq.question}</span>
                  <span
                    className={`${styles.arrow} ${
                      activeFaq === index ? styles.rotate : ""
                    }`}
                  >
                    &#9660;
                  </span>
                </button>
                {activeFaq === index && (
                  <div className={styles.faqAnswer}>
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <img
              src="/footer-logo.png"
              alt="Vintage Vault Footer Logo"
              className={styles.footerLogo}
            />
            <p className={styles.footerTagline}>
              Your Gateway to Timeless Treasures
            </p>
          </div>
          <div className={styles.footerLinks}>
            <h4>About Us</h4>
            <ul>
              <li>
                <Link to="/aboutus">Our Story</Link>
              </li>
              <li>
                <Link to="/team">Our Team</Link>
              </li>
              <li>
                <Link to="/privacy#contactUs">Meet the Team</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerLinks}>
            <h4>Support</h4>
            <ul>
              <li>
                <Link to="/help">Help Center</Link>
              </li>
              <li>
                <Link to="/privacy#contactUs">Contact Us</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms">Terms of Service</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerSocial}>
            <h4>Connect With Us</h4>
            <div className={styles.socialIcons}>
              <a href="#" aria-label="Facebook">
                <PiFacebookLogoDuotone className={styles.socialIcon} />
              </a>
              <a href="#" aria-label="Twitter">
                <PiTwitterLogoDuotone className={styles.socialIcon} />
              </a>
              <a href="#" aria-label="Instagram">
                <PiInstagramLogoDuotone className={styles.socialIcon} />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>
            &copy; {new Date().getFullYear()} Vintage Vault. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

function ExploreProductCard({ product }) {
  const navigate = useNavigate();

  const { basePrice, coverImage, summary, title, _id } = product;

  return (
    <div key={_id} className={styles.exploreCard}>
      <img
        src={`${PRODUCT_IMG_URL}/${coverImage}`}
        alt={`image of ${title}`}
        className={styles.exploreImage}
      />
      <div className={styles.exploreCardContent}>
        <h3>{title}</h3>
        <p>
          <CollapsText>{summary}</CollapsText>
        </p>
        <div className={styles.bidInfo}>
          <span className={styles.currentBid}>
            Base Price : <strong>{basePrice}</strong>
          </span>
        </div>
        <button
          className={styles.bidNowButton}
          onClick={() => navigate("/app")}
        >
          Bid Now
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
