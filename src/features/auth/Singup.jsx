import { Form, Link, redirect, useActionData } from "react-router-dom";

import Footer from "../../ui/Footer";
import Header from "../../ui/Header";
import styles from "./Singup.module.css";
import Button from "../../ui/buttons/Button";
import { createUser } from "../../services/apiAuctions";

function Singup() {
  return (
    <div>
      <Header />
      <main className={styles.singupContainer}>
        <div className={styles.singupForm}>
          <h1>Join Vintage Vault</h1>
          <p>
            Create your account and start bidding on unique, historical items.
          </p>
          <form>
            <div>
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Create a password"
                required
              />
            </div>
            <div>
              <label htmlFor="cPassword">Confrim Password</label>
              <input
                type="password"
                id="cPassword"
                name="confirmPassword"
                placeholder="Confrim your password"
                required
              />
            </div>

            <Button type="auth">Sign Up</Button>
          </form>

          <p className={styles.loginText}>
            Already have an account?
            <Link to="/login">Login</Link>
          </p>
        </div>
        <div>
          <img src="/other/cta-3.jpg" alt="theme image of our application" />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Singup;
