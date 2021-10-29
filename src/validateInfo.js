// 입력한 정보 확인
export default function validateInfo(userInfo) {
   let errors = {};

   // 이름 확인
   if (!userInfo.userName.trim()) {
      errors.userName = "Username required";
   }

   // 이메일 확인
   if (!userInfo.email) {
      errors.email = "Email required";
   } else if (!/\S+@\S+\.\S+/.test(userInfo.email)) {
      errors.email = "Email address is invalid";
   }

   // 패스워드 확인
   if (!userInfo.password) {
      errors.password = "Password is required";
   } else if (userInfo.password.length < 6) {
      errors.password = "Password needs to be 6 characters or more";
   }

   // 패스워드 확인 확인
   if (!userInfo.password2) {
      errors.password2 = "Password is required";
   } else if (userInfo.password2 !== userInfo.password) {
      errors.password2 = "Password do not match";
   }

   return errors;
}
