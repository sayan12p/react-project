import React, { Component } from 'react'
import axios from "axios";
import {apiUrl} from "../config";
import classnames from "classnames";
import CreateProfile from "../components/CreateProfile";

export default class Login extends Component {




    constructor(){
        super();
        this.state = {
          email: "",
          password: "",
          errors: {},
          isLogin:false
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
      e.preventDefault();
  
      const userData = {
        email: this.state.email,
        password: this.state.password
      };
      
      let loginUrl=`${apiUrl.baseUrl}${apiUrl.login}`;
      axios
      .post(loginUrl, userData)
      .then(res => {
        // Save to localStorage
        const { token } = res.data;
        // Set token to ls
        localStorage.setItem("jwtToken", token);
        this.setState({isLogin:true});
        this.props.history.push("/dashboard");
      })
      .catch(err => {
        console.log(err);
      });
      
        }
  
    onChange(e) {
      this.setState({ [e.target.name]: e.target.value });
    }
  
    render() {
      const { errors } = this.state;
        return (
           <div>
             {this.state.isLogin ?(
               <CreateProfile></CreateProfile>
             ):(
          
               <div class="login">
    <div class="container">
      <div class="row">
        <div class="col-md-8 m-auto">
          <h1 class="display-4 text-center">Log In</h1>
          <p class="lead text-center">Sign in to your DevConnector account</p>
          <form action="dashboard.html" onSubmit={this.onSubmit}>
            <div class="form-group">
              <input type="email" class="form-control form-control-lg" className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.email
                    })}
                    placeholder="Email Address"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}

            </div>
            <div class="form-group">
              <input type="password" class="form-control form-control-lg" className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.password
                    })}
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    />
                    {errors.password && (
                      <div className="invalid-feedback">{errors.password}</div>
                    )}
  
            </div>
            <input type="submit" class="btn btn-info btn-block mt-4" />
          </form>
        </div>
      </div>
    </div>
  </div>   
             )}
             </div>       
        )
    }
}
