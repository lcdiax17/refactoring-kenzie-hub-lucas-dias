import { DefaultTemplate } from "../../Components/DefaultTemplate";
import { RegisterForm } from "../../Components/RegisterForm"

export const RegisterPage = () => {

  return (
    <DefaultTemplate>
      <main>
        <section className="container">
          <RegisterForm/>
        </section>
      </main>
    </DefaultTemplate>
  );
};
