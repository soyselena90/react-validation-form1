import React, { useState } from "react";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";
import "./Form.css";

const Form = () => {
   const [isSubmitted, setIsSubmitted] = useState(false);

   // 폼 전송
   function setSubmitState() {
      setIsSubmitted(true);
   }

   return (
      <>
         <div className="form-container">
            <span className="close-btn">X</span>
            <div className="form-content-left">
               <img src="img/main.jpg" alt="main" />
            </div>
            {!isSubmitted ? (
               <FormSignup setSubmitState={setSubmitState} />
            ) : (
               <FormSuccess />
            )}
         </div>
      </>
   );
};

export default Form;
