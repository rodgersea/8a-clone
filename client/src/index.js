import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

// ReactDOM.render(
//   <Auth0Provider
//     domain="dev-w6ngsgg0.us.auth0.com"
//     clientId="7P4kuhZrJEpYztxQptzCUUwOd6ngVb6r"
//     redirectUri="http://localhost:3000/"
//   >
//     <App />
//   </Auth0Provider>,
//   document.getElementById("root")
// );

ReactDOM.render(
  <App />, 
  document.getElementById("root")
);
