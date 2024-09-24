import { Form, Link, redirect, useActionData } from "react-router-dom";

import Footer from "../../ui/Footer";
import Header from "../../ui/Header";
import styles from "./Singup.module.css";
import Button from "../../ui/buttons/Button";
import { createUser } from "../../services/apiAuctions";

function Singup() {
  const errorData = useActionData();

  return (
    <div>
      <Header />
      <main className={styles.singupContainer}>
        <div className={styles.singupForm}>
          <h1>Join Vintage Vault</h1>
          <p>
            Create your account and start bidding on unique, historical items.
          </p>
          <Form method="POST">
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
              {errorData?.password && (
                <p className="formError">{errorData.password}</p>
              )}
            </div>

            <Button type="auth">Sign Up</Button>
          </Form>

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

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const error = {};
  if (data.password !== data.confirmPassword)
    error.password = "password and confirm password must be same";
  if (Object.keys(error).length > 0) return error;

  //FIXME: should handle in backend
  const userData = { ...data };
  delete userData.confirmPassword;
  userData.address = "";
  userData.walletBalance = 0;

  await createUser(userData);
  return redirect("/");
}

export default Singup;
