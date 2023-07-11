import { Body_Activate_By_SMS, Body_Auth_AccessToken, Body_Phone_Login, Body_Phone_Verification } from "@/types/api";
import BaseApi from "../axios.config";

class Auth extends BaseApi {
  constructor() {
    super({ suffix: "api/v1/auth/" });
  }
  postPhoneLogin = (data: Body_Phone_Login) => this.$axios.post(`access-token-phone-number`, data);

  postEmailLogin = (data: Body_Auth_AccessToken) => this.$axios.post(`access-token`, data);

  postActivationCodeBySMS = (data: Body_Phone_Verification) => this.$axios.post(`send-activation-code-by-sms`, data);
  
  postActivateBySMS = (data: Body_Activate_By_SMS) => this.$axios.post(`activate-by-sms`, data);
}

const AuthService = new Auth();
export default AuthService;
