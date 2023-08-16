import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login= () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  useEffect((()=>{loginWithRedirect();}),[])
  console.log('loginPageIsAuthenticated',isAuthenticated);

};

export default Login;