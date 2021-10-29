import { useState, useEffect } from "react";

const useForm = (setSubmitState, validate) => {
   // 폼 관련 상태값 (유저정보, 에러, 폼전송 여부)
   const [userInfo, setValues] = useState({
      userName: "",
      email: "",
      password: "",
      password2: "",
   });
   const [errors, setErrors] = useState({});
   const [isSubmitting, setIsSubmitting] = useState(false);

   // input value 변경시 value 상태값 변경
   const inputValueChange = (inputEvent) => {
      const { name, value } = inputEvent.target;
      console.log("name: ", name);
      console.log("value: ", value);
      console.log({ ...userInfo, ["userName"]: "1231223" });
      setValues({
         ...userInfo,
         [name]: value,
      });
   };

   // 폼 전송
   const formSubmit = (e) => {
      e.preventDefault();
      setErrors(validate(userInfo));
      setIsSubmitting(true);
   };

   // 에러가 없거나, 전송이 됐을 때는 넘겨준 폼전송 실행
   useEffect(() => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
         setSubmitState();
      }
   }, [errors]);

   return { inputValueChange, userInfo, formSubmit, errors };
};

export default useForm;
