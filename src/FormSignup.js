import React from "react";
import useForm from "./useForm";
import validate from "./validateInfo";
import "./Form.css";

const FormSignup = ({ setSubmitState }) => {
   const { inputValueChange, userInfo, formSubmit, errors } = useForm(
      setSubmitState,
      validate
   );

   // formSubmit
   // inputValueChange
   // console.log("userInfo: ", userInfo);

   return (
      <div className="form-content-right">
         <form action="" className="form" onSubmit={formSubmit}>
            <h1>
               Get started with us today! <br />
               Create your account by filling out the information below.
            </h1>
            <div className="form-inputs">
               <label htmlFor="userName" className="form-label">
                  ID
               </label>
               <input
                  id="userName"
                  type="text"
                  name="userName"
                  className="form-input"
                  placeholder="Enter your username"
                  value={userInfo.userName}
                  onChange={inputValueChange}
               />
               {errors.userName && <p>{errors.userName}</p>}
            </div>
            <div className="form-inputs">
               <label htmlFor="email" className="form-label">
                  Email
               </label>
               <input
                  id="email"
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="Enter your email"
                  value={userInfo.email}
                  onChange={inputValueChange}
               />
               {errors.email && <p>{errors.email}</p>}
            </div>
            <div className="form-inputs">
               <label htmlFor="password" className="form-label">
                  Password
               </label>
               <input
                  id="password"
                  type="password"
                  name="password"
                  className="form-input"
                  placeholder="Enter your username"
                  value={userInfo.password}
                  onChange={inputValueChange}
               />
               {errors.password && <p>{errors.password}</p>}
            </div>
            <div className="form-inputs">
               <label htmlFor="password2" className="form-label">
                  Confirm password
               </label>
               <input
                  id="password2"
                  type="password"
                  name="password2"
                  className="form-input"
                  placeholder="Enter your username"
                  value={userInfo.password2}
                  onChange={inputValueChange}
               />
               {errors.password2 && <p>{errors.password2}</p>}
            </div>
            <button className="form-input-btn" type="submit">
               Sign up
            </button>
            <span className="form-input-login">
               Already have an account? Login <a href="#!">here</a>
            </span>
         </form>
      </div>
   );
};

export default FormSignup;
