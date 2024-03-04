import React, { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

export const UserContext = createContext();

function UserProvider({ children }) {

  const [token, setToken] = useState(Cookies.get("token") ? Cookies.get("token") : null );
  const [decode, setDecode] = useState(null);

  useEffect(() => {
    if (token) {
    const tokenDecoded = jwtDecode(token);
    console.log(tokenDecoded);
    setDecode(tokenDecoded);
    }

  }, [token])
  

  function addToken(token) {
    setToken(token);
    Cookies.set('token', token , { expires: 7 })
    console.log(token);
  }

  function logOut() {
    setToken(null);
    Cookies.remove('token')
    setDecode(null);
    window.location.href = "/login"
  }

  const data = {
    token,
    decode,
    addToken,
    logOut,
  };
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
}

export default UserProvider;