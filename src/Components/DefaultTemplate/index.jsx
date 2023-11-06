import { Header } from "../Header/index";
import { Footer } from "../Footer/index";

export const DefaultTemplate = ({children}) => {
  return (
    <>
      <Header/>
      {children}
      <Footer />
    </>
  );
};
