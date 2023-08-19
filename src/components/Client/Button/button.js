"use client";
import Link from "next/link";
import { useState, createContext, useContext } from "react";

const Context = createContext({ user: {} });

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  );
};

export const LogoutBtn = () => {
  const logoutHandler = () => {
    alert("Logged Out");
  };
  const { user } = useContext(Context);
  return (
    <>
      {!user.id ? (
        <Link href={"/login"}>Login</Link>
      ) : (
        <button className="btn" onClick={logoutHandler}>
          Logout
        </button>
      )}
    </>
  );
};
