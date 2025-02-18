import { useLocation } from "react-router";
import Login from "./Login";
import Register from "./Register";
import Verification from "./Verification";
import PasswordReset from "./PasswordReset";

const AuthLayout = () => {
  const location = useLocation();

  return (
    <section>
      {location.pathname === "/login" ? (
        <Login />
      ) : location.pathname === "/register" ? (
        <Register />
      ) : location.pathname === "/verification" ? (
        <Verification />
      ) : location.pathname === "/password-reset" ? (
        <PasswordReset />
      ) : null}
    </section>
  );
};

export default AuthLayout;
