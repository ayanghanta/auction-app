import { Link } from "react-router-dom";

import styles from "./Login.module.css";
import Button from "../../ui/buttons/Button";
import Header from "../../ui/Header";
import Footer from "../../ui/Footer";

function Login() {
  return (
    <div>
      <Header />
      <main className={styles.loginContainer}>
        <div className={styles.loginForm}>
          <h1>Welcome Back to Vintage Vault</h1>
          <p style={styles.tagline}>
            Unlock the treasures of history. Log in to start bidding on
            exclusive items!
          </p>
          <form>
            <div>
              <label htmlFor="email" style={styles.label}>
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                style={styles.input}
              />
            </div>

            <div>
              <label htmlFor="password" style={styles.label}>
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                style={styles.input}
              />
            </div>

            <Button type="auth">Login</Button>

            <div className={styles.forgotText}>
              <Link to="#">Forgot Password?</Link>
            </div>
          </form>

          <p className={styles.singUpText}>
            Don&apos;t have an account yet?
            <Link to="/singup">create one today</Link>
          </p>
        </div>
        <div>
          <img src="/other/cta-side.jpg" alt="theme image of our application" />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Login;
