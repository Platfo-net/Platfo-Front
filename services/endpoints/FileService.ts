import { file } from '@/types/api';
import BaseApi from '../axios.config';

class File extends BaseApi {
  constructor() {
    super({ suffix: "api/v1/file/upload/notifier" });
  }

  uploadCampaignPhoto = (data: file) => this.$axios.post(`campaign`, data);
}

const FileService = new File();
export default FileService;
