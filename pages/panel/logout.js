import { useEffect } from "react";
import { useSession, getSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";

const Logout = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const ress = await signOut({ redirect: false, callbackUrl: "/" });
      console.log(ress);
      // Remove User Data from Local Storage
      localStorage.removeItem("loggedInUser");
      if (typeof window !== "undefined") {
        router.push("/");
      }
    } catch (error) {
      console.log("There was an error while logging in.", error);
    }
  };
  useEffect(() => {
    handleLogout();
  }, []);
};

export default Logout;
