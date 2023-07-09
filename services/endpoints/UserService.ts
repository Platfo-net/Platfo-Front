import { Body_Phone_Register } from '@/types/api';
import BaseApi from '../axios.config';

class User extends BaseApi {
  constructor() {
    super({ suffix: 'api/v1/user/' });
  }

  registerByPhoneNumber = (data: Body_Phone_Register) =>
    this.$axios.post(`register-by-phone-number`, data);
}

const UserService = new User();
export default UserService;
