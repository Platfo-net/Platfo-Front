import { Body_Postman_Campaign, Body_Postman_Group, IParams_Pagination } from '@/types/api';
import BaseApi from '../axios.config';

class Postman extends BaseApi {
  constructor() {
    super({ suffix: "api/v1/postman" });
  }
  getGroups = (page_id: string, params?: IParams_Pagination) => this.$axios.get(`group/${page_id}`, { params });

  postGroup = (data: Body_Postman_Group) => this.$axios.post(`group`, data);

  deleteGroup = (id: string) => this.$axios.delete(`group/${id}`);

  getCampaigns = (params?: IParams_Pagination) => this.$axios.get(`campaign/all`, { params });

  getCampaignById = (id :string) => this.$axios.get(`campaign/${id}`)

  postCampaign = (data: Body_Postman_Campaign) => this.$axios.post(`campaign`, data);

}

const PostmanService = new Postman();
export default PostmanService;
