import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Dashboard from "./components/dashboard/Dashboard";
import NavBar from "./components/layout/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';

LogRocket.init('kkty3b/todo-application-4hhwt');
setupLogRocketReact(LogRocket);
function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <NavBar />
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
