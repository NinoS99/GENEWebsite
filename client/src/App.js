import React from 'react';
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import Connect from "./pages/connect/Connect"
import Settings from "./pages/settings/Settings"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

//import {Person} from "@material-ui/icons"

function App() {

  const {user} = useContext(AuthContext)

  return(
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Register/>}
        </Route>
        <Route exact path="/login">
          {user ? <Redirect to="/" /> : <Login />} 
        </Route>
        <Route exact path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route> 
        <Route exact path="/profile/:username">
          <Profile />
        </Route> 
        <Route path="/connect">
        <Redirect to="/connect" /> : <Connect />
        </Route> 
        <Route path="/settings">
        <Redirect to="/settings" /> : <Settings />
        </Route> 
      </Switch>
    </Router>
  );
}

export default App;
