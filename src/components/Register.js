import React, { Component } from 'react'
import { connect } from "react-redux";
//import axios from "axios";//Now actions will take care of callling the services
import { registerUser } from "../actions/authActions";
import { withRouter } from "react-router-dom";

class Register extends Component {

    
    render() {
        return (
            <div>
               <nav class="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
    <div class="container">
      <a class="navbar-brand" href="landing.html">DevConnector</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="mobile-nav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="profiles.html"> Developers
            </a>
          </li>
        </ul>

        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="register.html">Sign Up</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="login.html">Login</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  
  <div class="register">
    <div class="container">
      <div class="row">
        <div class="col-md-8 m-auto">
          <h1 class="display-4 text-center">Sign Up</h1>
          <p class="lead text-center">Create your DevConnector account</p>
          <form action="create-profile.html">
            <div class="form-group">
              <input type="text" class="form-control form-control-lg" placeholder="Name" name="name" required />
            </div>
            <div class="form-group">
              <input type="email" class="form-control form-control-lg" placeholder="Email Address" name="email" />
              <small className="form-text text-muted">This site uses Gravatar so if you want a profile image, use a Gravatar email</small>
            </div>
            <div class="form-group">
              <input type="password" class="form-control form-control-lg" placeholder="Password" name="password" />
            </div>
            <div class="form-group">
              <input type="password" class="form-control form-control-lg" placeholder="Confirm Password" name="password2" />
            </div>
            <input type="submit" class="btn btn-info btn-block mt-4" />
          </form>
        </div>
      </div>
    </div>
  </div>
 
            </div>
        )



}
          


    }
    const mapStateToProps = state => ({
      auth: state.auth,
      errors: state.error
    });
    //This will connect to redux.Interanlly it will go to redux and get the store and call the mapStateToProps.
    //State is created from calling root reducer (Index.js).
    //Also which Actions are mapped to this componant are defined as { registerUser } which is nothing but mapDispatchToProps
    export default connect(mapStateToProps, { registerUser })(withRouter(Register));
