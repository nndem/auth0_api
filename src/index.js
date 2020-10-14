import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-75n8r-m9.us.auth0.com"
    clientId="2r1Xn3mA7c9ehkbZYHKQeaDoSUTph1fC"
    redirectUri={window.location.origin}
    audience="https://dev-75n8r-m9.us.auth0.com/api/v2/"
    scope="read:current_user update:current_user_metadata"
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
