import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router } from "react-router-dom";
import LoginComponent from "./login/login";
import SignupComponent from "./signup/signup";
import DashboardComponent from "./dashboard/dashboard";

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: "chatty-box-c6eed.firebaseapp.com",
  databaseURL: "https://chatty-box-c6eed.firebaseio.com",
  projectId: "chatty-box-c6eed",
  storageBucket: "chatty-box-c6eed.appspot.com",
  messagingSenderId: "936679149448",
  appId: "1:936679149448:web:58c79891e332e193"
});

const routing = (
  <Router>
    <div id="routing-container">
      <Route path="/login" component={LoginComponent} />
      <Route path="/signup" component={SignupComponent} />
      <Route path="/dashboard" component={DashboardComponent} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
