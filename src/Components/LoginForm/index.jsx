import { Link } from "react-router-dom";
import { Input } from "../Inputs/index";
import { useForm } from "react-hook-form";
import { InputPassword } from "../Inputs/InputPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./loginSchema";
import styles from "./style.module.scss";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export const LoginForm = () => {

  const {userLogin} = useContext(UserContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const submit = (formData) => {
    userLogin(formData);
  };

  return (
    <form className={styles.formLogin} onSubmit={handleSubmit(submit)}>
      <Input
        label="Email"
        placeholder="Digite aqui seu email"
        type="email"
        {...register("email")}
        error={errors.email}
      />
      <InputPassword
        label="Senha"
        placeholder="Digite aqui sua senha"
        {...register("password")}
        error={errors.password}
      />

      <button className="btn">Entrar</button>
      <Link to="/register">
        <button className={styles.registerBtn}>Cadastre-se</button>
      </Link>
    </form>
  );
};
