import { Route, Redirect } from "react-router-dom";

import React, { Component } from 'react'

export default class PrivateRouter extends Component {

    constructor(props) {
        super(props);
        let token = localStorage.getItem("jwtToken");
      let isAuthenticated = false;
      if (token != undefined && token != null) {
        isAuthenticated = true;
      }
      }

      
  
    render() {
        const { component: Component } = this.props; 
        //this.setState({ isLogin: true });
    let token = localStorage.getItem("jwtToken");
    let isAuthenticated = false;
    if (token != undefined && token != null) {
        isAuthenticated = true;
    }
    return (
      <Route
        exact
        path={this.props.path}
        render={props =>
          isAuthenticated === true ? (
            <Component {...props} {...this.props} />
          ) : (
            <Redirect to="/login" />
          )
        }
      />

    )
      }
    }
    

