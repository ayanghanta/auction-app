import { Link, useNavigate } from "react-router-dom";

import Footer from "../../ui/Footer";
import Header from "../../ui/Header";
import styles from "./Singup.module.css";
import Button from "../../ui/buttons/Button";
import { useForm } from "react-hook-form";
import InputError from "../../ui/InputError";
import { useSignup } from "./useSignup";
import SmallSpinner from "../../ui/SmallSpinner";

function Singup() {
  const navigate = useNavigate();
  const { register, reset, formState, getValues, handleSubmit } = useForm();
  const { errors } = formState;
  const { signup, isLoading } = useSignup();

  function handleSignup(data) {
    // console.log(data);
    signup(
      { ...data },
      {
        onSuccess: () => {
          navigate("/");
        },
        onSettled: () => {
          reset();
        },
      }
    );
  }

  return (
    <div>
      <Header />
      <main className={styles.singupContainer}>
        <div className={styles.singupForm}>
          <h1>Join Vintage Vault</h1>
          <p className={styles.tagline}>
            Create your account and start bidding on unique, historical items.
          </p>
          <form onSubmit={handleSubmit(handleSignup)}>
            <div>
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                {...register("fullName", {
                  required: "This field is required",
                })}
              />
              <InputError error={errors.fullName?.message} />
            </div>

            <div>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "This field is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Please provide a valid email",
                  },
                })}
              />
              <InputError error={errors.email?.message} />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Create a password"
                {...register("password", {
                  required: "This field is required",
                  minLength: {
                    value: 8,
                    message: "Password must be atlest 8 charcter long",
                  },
                })}
              />
              <InputError error={errors.password?.message} />
            </div>
            <div>
              <label htmlFor="cPassword">Confrim Password</label>
              <input
                type="password"
                id="cPassword"
                placeholder="Confrim your password"
                {...register("confirmPassword", {
                  required: "This field is required",
                  validate: (cPassword) =>
                    cPassword === getValues().password ||
                    "Password and password confirm must be same",
                })}
              />
              <InputError error={errors.confirmPassword?.message} />
            </div>

            <Button type="auth" role="submit" disabled={isLoading}>
              {isLoading ? <SmallSpinner /> : "Sign Up"}
            </Button>
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
