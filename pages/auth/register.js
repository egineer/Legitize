import React, { useState, useEffect } from "react";
import Link from "next/link";
import Router from "next/router";
import { useSession, getSession } from "next-auth/react";

const Register = () => {
  const { data: session, status } = useSession();

  const [firstName, setFirstName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (status === "authenticated") Router.replace("/panel");
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    if (firstName && username && email && password) {
      // send a request to the server.
      try {
        const body = { firstName, username, email, password };
        const res = await fetch(`/api/auth/register`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });

        const data = await res.json();
        console.log(data);
        if (res.ok === true) {
          setMessage("Your account has been created successfully!");
        } else {
          if (data && data.errorMessage) {
            setError(data.errorMessage);
          } else {
            setError("There was an error while creating your account.");
          }
        }

        await Router.push("/auth/login");
      } catch (error) {
        console.error(error);
        setError("There was an error while creating your account.");
      }
    } else {
      setError("All fields are required");
      return;
    }
  };

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
            <a href="index.html" className="relative inline-block py-36">
              <img
                src="/img/logo_white.png"
                className="inline-block max-h-7"
                alt="Xhibiter | NFT Marketplace"
              />
            </a>
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
                Register
              </h1>
              <p className="dark:text-jacarta-300 mb-10 text-lg leading-normal">
                Create an account within seconds. <br /> Already have an account
                ?{" "}
                <Link href={"/auth/login"} className="text-accent">
                  Login here
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
                  <form>
                    <div className="flex flex-row">
                      <div className="mb-6 mr-3">
                        <label
                          for="item-name"
                          className="mb-2 block font-display text-jacarta-700 dark:text-white text-left"
                        >
                          Name<span className="text-red">*</span>
                        </label>
                        <input
                          type="text"
                          className="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
                          placeholder="Display Name"
                          required
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </div>
                      <div className="mb-6">
                        <label
                          for="item-name"
                          className="mb-2 block font-display text-jacarta-700 dark:text-white text-left"
                        >
                          Username<span className="text-red">*</span>
                        </label>
                        <input
                          type="text"
                          className="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
                          placeholder="Unique Username"
                          required
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="flex flex-row">
                      <div className="mb-6 mr-3">
                        <label
                          for="item-name"
                          className="mb-2 block font-display text-jacarta-700 dark:text-white text-left"
                        >
                          Email<span className="text-red">*</span>
                        </label>
                        <input
                          type="email"
                          className="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
                          placeholder="Email Address"
                          required
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="mb-6 ml-6">
                        <label
                          for="item-name"
                          className="mb-2 block font-display text-jacarta-700 dark:text-white text-left"
                        >
                          Password<span className="text-red">*</span>
                        </label>
                        <input
                          type="password"
                          className="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
                          placeholder="Password"
                          required
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>
                  </form>
                  <button
                    type="submit"
                    className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 dark:hover:bg-accent hover:bg-accent text-white mb-4 flex w-full items-center justify-center rounded-full border-2 bg-accent py-4 px-8 text-center font-semibold transition-all hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent"
                    onClick={(e) => handleSubmit(e)}
                  >
                    <span>Register</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Register;
