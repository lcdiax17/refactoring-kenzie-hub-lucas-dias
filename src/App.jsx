import { RoutesMain } from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./scss/index.scss"

function App() {
  return (
    <>
      <RoutesMain />
      <ToastContainer limit={5} position="top-right" autoClose={2 * 700} />
    </>
  );
}

export default App;
