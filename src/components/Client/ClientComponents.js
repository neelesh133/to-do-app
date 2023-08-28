"use client";
import Link from "next/link";
import { useState, createContext, useContext } from "react";

export const Context = createContext({user: {}});

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  return (
    <Context.Provider value={{ user, setUser }}>
      {children}
    </Context.Provider>
  );
};

export const LogoutBtn = () => {
  const logoutHandler = () => {
    alert("Logged Out");
  };
  const { user } = useContext(Context);
  var length = (Object.entries(user).length);
  console.log(length);
  return (
    <>
      {(length === 0) ? (
        <Link href={"/login"}>Login</Link>
      ) : (
        <button className="btn" onClick={logoutHandler}>
          Logout
        </button>
      )}
    </>
  );
};

export const TodoButtton = (id, completed) => {
  const deleteHandler = (id) => {
    alert(`Deleteing, ${id}`);
  };
  return (
    <>
      <input type="checkbox" checked={completed} />
      <button
        className="btn"
        onClick={() => {
          deleteHandler(id);
        }}
      >
        Delete
      </button>
    </>
  );
};
