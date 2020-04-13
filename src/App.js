import React from 'react';
import logo from './logo.svg';
import Login from '../src/components/Login'
import Navbar from '../src/components/Navbar';
import CreateProfile from '../src/components/CreateProfile'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingRegister from "../src/components/LandingRegister";
import Register from "../src/components/Register";
import Profile from "../src/components/Profile";
import Profiles from "../src/components/Profiles";
import { Provider } from "react-redux";
import store from "./store";
import Dashboard from "../src/components/Dashboard";
import PrivateRouter from "../src/components/PrivateRouter";
import  react from '../src/components/CreateProfile';





function App() {
  return (
    <Provider store={store}>

    <Router>
    <div className="App">
     <Navbar></Navbar>
     <Login></Login> 
     {/* <CreateProfile></CreateProfile> */}
     <Route exact path="/" component={LandingRegister} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profiles" component={Profiles} />
           </div>

    
   
           <Switch>
            <PrivateRouter exact path="/dashboard" component={Dashboard} />
            <PrivateRouter
              exact
              path="/createprofile"
              isEdit={true}
              component={CreateProfile}
            />

          </Switch>

   
    
    </div>
    </Router>
    </Provider>
  );
}

export default App;
