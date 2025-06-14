import { Link, useNavigate } from "react-router-dom";

import styles from "./Login.module.css";
import Button from "../../ui/buttons/Button";
import Header from "../../ui/Header";
import Footer from "../../ui/Footer";
import { useState } from "react";
import { useLogin } from "./useLogin";
import SmallSpinner from "../../ui/SmallSpinner";

function Login() {
  // const [email, setEmail] = useState("test7@gmail.com");
  // const [password, setPassword] = useState("test1234");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
        onSuccess: () => navigate("/app"),
      }
    );
  }

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
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" style={styles.label}>
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter your email"
                style={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                required
                placeholder="Enter your password"
                style={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Button type="auth" role="submit">
              {isLoading ? <SmallSpinner /> : "Login"}
            </Button>

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
