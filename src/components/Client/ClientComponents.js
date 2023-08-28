"use client";
import Link from "next/link";
import { useState, createContext, useContext } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from 'next/navigation'

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

  const router = useRouter();
  const {setUser } = useContext(Context);

  const logoutHandler = async() => {
    try {
      const res = await fetch("/api/logout");
      const data = await res.json();
      // console.log(data);
      if(data.success === 'false'){
      return toast.error(data.message);
      }
      else{
      setUser({});
      console.log("helllo");
      toast.success(data.message);
      return router.push('/login')
    }

    } catch (error) {
      toast.error(error)
    }
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
