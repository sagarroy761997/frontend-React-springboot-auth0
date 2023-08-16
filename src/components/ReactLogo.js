import logo from '../logo.svg';
import '../App.css';
import Logout from './Logout';
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";
import { callExternalApi } from '../utils/callExternalApi';
import { useState } from 'react';

function ReactLogo() {
  const [message, setMessage] = useState("api is not called yet");
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  // console.log('ReactLOgoIsauthenticated', isAuthenticated);
  const apiServerUrl = process.env.REACT_APP_API_SERVER_URL;

  const api= `/helloWorld`;
  const apiCall = async() => {
    const accessToken = await getAccessTokenSilently();
    console.log('accessToken',accessToken);
    const config = {
      url: api,
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      // withCredentials: true,
    };

    axios(config)
      .then((response) => {
        setMessage(response.data.message);
        console.log(response.data);
      })
      .catch((error) => {
        setMessage(`{errorName: ${error.name}, errorMessage: ${error.message}}`);
        console.log(error);
      })
      .then(() => {
        console.log(`${api} called`);
      })

  };
  // const getProtectedResource = async (accessToken) => {
  //   const config = {
  //     url: `/crud/api/get-message`,
  //     method: "GET",
  //     headers: {
  //       "content-type": "application/json",
  //       Authorization: `Bearer ${accessToken}`,
  //     },
  //   };
  
  //   const { data, error } = await callExternalApi({ config });
  
  //   return {
  //     data: data || null,
  //     error,
  //   };
  // };
  // const getMessage = async () => {
  //   const accessToken = await getAccessTokenSilently();
  //   const { data, error } = await getProtectedResource(accessToken)

  //   if (data) {
  //     setMessage(JSON.stringify(data, null, 2));
  //   }

  //   if (error) {
  //     setMessage(JSON.stringify(error, null, 2));
  //   }

  //   console.log(message);
  // };
  return (
    isAuthenticated ? (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={apiCall}>apicall</button>
        <Logout />
        <p>{message}</p>
      </header>
    </div>
    ):(<p>Not authenticated</p>)
  );
}

export default ReactLogo;