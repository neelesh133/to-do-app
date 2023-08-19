"use client";
import '../../../styles/app.scss'

export const LogoutBtn = ()=>{
    const logoutHandler = ()=>{
        alert("Logged Out")
    }
    return(
        <button className="btn" onClick={logoutHandler}>Logout</button>

    )
}