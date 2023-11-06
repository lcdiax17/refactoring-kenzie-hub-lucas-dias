import { useForm } from "react-hook-form";
import { Input } from "../Inputs";
import { Select } from "../SelectComponent";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "./registerSchema";
import { InputPassword } from "../Inputs/InputPassword";
import styles from "./style.module.scss";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export const RegisterForm = () => {

  const {userRegisterCreate} = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const submit = (formData) => {
    userRegisterCreate(formData);
  };

  return (
    <form className={styles.formRegister} onSubmit={handleSubmit(submit)}>
      <h2 className="title-3">Crie sua conta</h2>
      <p className="text-1">Rapido e gratis, vamos nessa</p>

      <Input
        label="Nome"
        placeholder="Digite aqui seu nome"
        type="text"
        {...register("name")}
        error={errors.name}
      />
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
      <InputPassword
        label="Confirmar Senha"
        placeholder="Confirme sua senha"
        {...register("confirmPassword")}
        error={errors.confirmPassword}
      />
      <Input
        label="Bio"
        placeholder="Fale sobre você"
        type="text"
        {...register("bio")}
        error={errors.bio}
      />
      <Input
        label="Contato"
        placeholder="Opção de contato"
        type="text"
        {...register("contact")}
        error={errors.contact}
      />
      <Select 
        label="Selecionar Módulo"
        {...register("course_module")}
        error={errors.course_module}
      />

      <button className={styles.registerBtn}>Cadastrar</button>
    </form>
  );
};
