import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, NavLink } from "react-router-dom";
import apiList from "../lib/apiList";
import isAuth, { userType } from "../lib/isAuth";
import './styles.css'

const Signup = ()=>{
    const dispatch = useDispatch();
    const result = useSelector(state=>state.data)
    const [signupDetails, setSignupDetails] = useState({
        type: "applicant",
        email: "",
        password: "",
        name: "",
        contactNumber: ""
      });
      const handleInput = (e) => {
        setSignupDetails({
          ...signupDetails,
          [e.target.name]: e.target.value,
        });
      };

      const handleLoginRecruiter = () => {
        console.log(signupDetails)
        axios
        .post(apiList.signup,signupDetails)
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("type", response.data.type);
          dispatch({type:"USER",payload:response.data})
          console.log(response);
        })
        .catch((err) => {
          console.log(err.response);
        });
    }

    const handleLogin = (e)=>{
        e.preventDefault()
        console.log(signupDetails)
          axios
          .post(apiList.signup,signupDetails)
          .then((response) => {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("type", response.data.type);
            dispatch({type:"USER",payload:response.data})
            console.log(response);
          })
          .catch((err) => {
            console.log(err.response);
          });
      }
return(<>
    {
        result ? (
        result.type === 'recruiter'?
        <Navigate to="/company_profile" />
          : 
         <Navigate to="/myprofile" /> )
         :
    <div id="email_root">
   <div className="App">
            <NavLink
                to="/signin"
                activeClassName="active"
                className="pageSwitcherItem"
              >
                SIGNIN
              </NavLink>{"  "}
              or{" "}
              <NavLink
                exact
                to="/signup"
                activeClassName="active"
                className="pageSwitcherItem"
              >
                SIGNUP
              </NavLink>
{/* <img src={logo} className="logo" alt="Business view - Reports" /> */}
<form className="form">
<div className="email-type">
<select class="form-control" name="type" onChange={(e)=>handleInput(e)}>
<option value="applicant" selected>Applicant</option>
<option value="recruiter">Recruiter</option>
</select> 
</div>
<div className="input-group email-group">
    <label htmlFor="email">Name</label>
    <input type="text" name="name" placeholder="enter your name" onChange={(e)=>handleInput(e)}/>
  </div>
  <div className="input-group email-group">
    <label htmlFor="email">Email</label>
    <input type="email" name="email" placeholder="enter your email" onChange={(e)=>handleInput(e)} />
  </div>
  <div className="input-group email-group">
    <label htmlFor="email">ContactNumber</label>
    <input type="text" name="contactNumber" placeholder="enter your contactnumber" onChange={(e)=>handleInput(e)}/>
  </div>
  <div className="input-group email-group">
    <label htmlFor="password">Password</label>
    <input type="password" name="password" placeholder="create your password" onChange={(e)=>handleInput(e)}/>
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
  <button type="button" className="primary signup-btn" onClick={(e) => {
            signupDetails.type === "applicant"
              ? handleLogin(e)
              : handleLoginRecruiter(e);
          }}>SIGNUP</button>
  <div>
  <Link to="/signin" className="formFieldLink">
              I'm already member
            </Link>
            </div>
</form>
</div>
</div>
}
</>)
}
export default Signup