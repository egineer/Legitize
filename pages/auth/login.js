import { useState, useEffect } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import Router from "next/router";
import { useSession, getSession } from "next-auth/react";
import axios from "axios";

const Login = () => {
  const { data: session, status } = useSession();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [userJustLoggedIn, setUserJustLoggedIn] = useState(false);

  const getUserData = async () => {
    // Get User Info
    const response = await axios.get(`/api/user/data`);
    if (response.data && response.data.user) {
      localStorage.setItem("loggedInUser", JSON.stringify(response.data.user));
      setUserJustLoggedIn(false);
    }
  };

  useEffect(() => {
    if (userJustLoggedIn) {
      getUserData();
    } else if (status === "authenticated") Router.replace("/panel");
  }, [status, userJustLoggedIn]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    if (email && password) {
      // send a request to the server.
      try {
        const res = await signIn("credentials", {
          email: email,
          password: password,
          redirect: false,
        });
        console.log(res);
        if (res.ok === true) {
          // Save User Data to Local Storage
          setUserJustLoggedIn(true);
          // await Router.push("/panel");
        }
        if (res.error) {
          setError(res.error);
        }
      } catch (error) {
        setError("There was an error while logging in.");
      }
    } else {
      setError("All fields are required");
      return;
    }
  };

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <main>
      <section className="relative h-screen">
        <div className="lg:flex lg:h-full">
          <div className="relative text-center lg:w-1/2">
            <img
              src="/img/login.jpg"
              alt="login"
              className="absolute h-full w-full object-cover"
            />
            <Link href="/" className="relative inline-block py-36">
              <img
                src="/img/logo_white.png"
                className="inline-block max-h-7"
                alt="Xhibiter | NFT Marketplace"
              />
            </Link>
          </div>

          <div className="relative flex items-center justify-center p-[10%] lg:w-1/2">
            <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
              <img
                src="/img/gradient_light.jpg"
                alt="gradient"
                className="h-full w-full"
              />
            </picture>

            <div className="w-full max-w-[25.625rem] text-center">
              <h1 className="text-jacarta-700 font-display mb-6 text-4xl dark:text-white">
                Login
              </h1>
              <p className="dark:text-jacarta-300 mb-10 text-lg leading-normal">
                Login to your account. <br /> You are new here?{" "}
                <Link href={"/auth/register"} className="text-accent">
                  Create an account
                </Link>
              </p>

              {error ? (
                <p className="text-red mb-10 text-lg leading-normal mb-2">
                  {error}
                </p>
              ) : (
                ""
              )}

              {message ? (
                <p className="text-green mb-10 text-lg leading-normal mb-2">
                  {message}
                </p>
              ) : (
                ""
              )}

              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="ethereum"
                  role="tabpanel"
                  aria-labelledby="ethereum-tab"
                >
                  <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                      <label
                        for="item-name"
                        className="mb-2 block font-display text-jacarta-700 dark:text-white text-left"
                      >
                        Email<span className="text-red">*</span>
                      </label>
                      <input
                        type="email"
                        id="item-name"
                        className="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
                        placeholder="Email Address"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        for="item-name"
                        className="mb-2 block font-display text-jacarta-700 dark:text-white text-left"
                      >
                        Password<span className="text-red">*</span>
                      </label>
                      <input
                        type="password"
                        id="item-name"
                        className="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
                        placeholder="Password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <button
                      type="submit"
                      className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 dark:hover:bg-accent hover:bg-accent text-white mb-4 flex w-full items-center justify-center rounded-full border-2 bg-accent py-4 px-8 text-center font-semibold transition-all hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent"
                    >
                      <span>Login</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
