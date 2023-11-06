import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/apiBase";
import { toast } from "react-toastify";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("TOKEN")

    const getUserInfo = async() =>{
      try{
        const { data } = await api.get("profile", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setUser(data)
        console.log(data)
      } catch(error){
        console.log(error)
      }
    }

    getUserInfo();
  }, []);

  
  const userRegisterCreate = async (formData) => {
    try {
      await api.post("users", formData);
      navigate("/login");
      toast.success("Usuário cadastrado com sucesso!");
    } catch (error) {
      if (error.response?.data === "Email already exists") {
        toast.error("Usuário já cadastrado!!");
      }
    }
  };
  
  const userLogin = async (formData) => {
    try {
      const { data } = await api.post("sessions", formData);
      setUser(data.user);
      localStorage.setItem("@TOKEN", data.token);
      toast.success("Login realizado com sucesso!");
      navigate("/home");
    } catch (error) {
      if (error.response?.message === "Incorrect password") {
        toast.error("Email ou senha invalidos");
      }
    }
  };
  
  const userLogout = () => {
    localStorage.removeItem("@TOKEN");
    setUser(null);
    navigate("login");
  };
  return (
    <UserContext.Provider
      value={{ user, userRegisterCreate, userLogin, userLogout }}
    >
      {children}
    </UserContext.Provider>
  );
};
