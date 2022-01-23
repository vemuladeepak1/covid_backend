import React from "react";
import { Link, NavLink } from "react-router-dom";
import './styles.css'

const Login = ()=>{
return(
    <div id="email_root">
<div className="App">
            <NavLink
                to="/signin"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                SIGNIN
              </NavLink>{"  "}
               or{" "}
              <NavLink
                exact
                to="/signup"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                SIGNUP
              </NavLink>
{/* <img src={logo} className="logo" alt="Business view - Reports" /> */}
<form className="form">
  <div className="input-group email-group">
    <label htmlFor="email">Email</label>
    <input type="email" name="email" placeholder="enter your email" />
  </div>
  <div className="input-group email-group">
    <label htmlFor="password">Password</label>
    <input type="password" name="password" placeholder="create your password"/>
  </div>
  <div className="formField">
            <label className="formFieldCheckboxLabel">
              <input
                className="formFieldCheckbox"
                type="checkbox"
                name="hasAgreed"
              />{" "}
              I agree all statements in{" "}
              <a href="null" className="formFieldTermsLink">
                terms of service
              </a>
            </label>
          </div>
  <button className="primary signup-btn">SIGNUP</button>
  <div>
  <Link to="/signup" className="formFieldLink">
              Don't have an account
            </Link>
            </div>
</form>
</div>
</div>
)
}
export default Login