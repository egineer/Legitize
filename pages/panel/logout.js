import { useEffect } from "react";
import { useSession, getSession } from "next-auth/react";
import { signOut } from "next-auth/react";

const Logout = () => {
  const { data: session, status } = useSession();

  const handleLogout = async () => {
    try {
      // const res = await signOut("credentials", {
      //     email: email,
      //     password: password,
      //     redirect: false,
      //   });
      //   if(res.ok===true){
      //     await Router.push("/panel");
      //   }
      //   if(res.error){
      //     setError(res.error);
      //   }

      const ress = await signOut({ callbackUrl: "/" });
      console.log(ress);
    } catch (error) {
      setError("There was an error while logging in.");
    }
  };
  useEffect(() => {
    handleLogout();
  }, []);
};

export default Logout;
