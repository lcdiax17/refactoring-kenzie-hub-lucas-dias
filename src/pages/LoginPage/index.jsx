import { LoginForm } from "../../Components/LoginForm";
import Logo from "../../assets/img/Logo.svg"

export const LoginPage = () => {
  return (
    <main className="container">
      <img src={Logo} alt="logo" />
      <LoginForm />
    </main>
  );
};
