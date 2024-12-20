import { Application, Platform } from "@/constants/enums";
import { StoryIndex } from "@storybook/store";

export type Pagination = {
  page: number;
  total_pages: number;
  page_size: number;
  total_count: number;
};

export type Body_Auth_AccessToken = {
  email: string;
  password: string;
};

export type Body_User = {
  phone_number: string;
  phone_country_code: string;
  first_name: string;
  last_name: string;
  password: string;
};

export type Body_Phone_Login = {
  phone_number: string;
  phone_country_code: string;
  password: string;
};

export type Body_Phone_Register = {
  phone_number: string;
  phone_country_code: string;
  first_name: string;
  last_name: string;
  password: string;
};

export type Body_Phone_Verification = {
  phone_number: string;
  phone_country_code: string;
};

export type Body_Activate_By_SMS = {
  phone_number: string;
  phone_country_code: string;
  code: string;
  token: string;
};

export type Res_Auth_AccessToken = {
  access_token: string;
  token_type: string;
};

export type Params_Account_All = {
  platform: Platform;
};

export interface IAccount {
  id: string;
  username: string;
  platform: Platform;
  profile_image: string;
  facebook_page_id: string;
}
export type Res_Account_All = IAccount[];

export type Body_Instagram = {
  facebook_user_id: string;
  facebook_user_token: string;
};

export interface IInformation {
  website?: string;
  followers_count?: number;
  biography?: string;
  name?: string;
  is_verified_user?: boolean;
  is_user_follow_business?: boolean;
  is_business_follow_user?: boolean;
}

export type Res_Account_Id = {
  id: string;
  facebook_page_id: string;
  facebook_page_token: string;
  instagram_page_id: string;
  instagram_username: string;
  instagram_profile_picture_url: string;
  facebook_user_long_lived_token: string;
  facebook_user_id: string;
  user_id: string;
  username: string;
  platform: string;
  profile_image: string;
  page_id: string;
  username?: string;
  information: IInformation;
};

export type Params_Connection_All = {
  account_id: string;
};

export interface IConnection {
  name: string;
  description: string;
  application_name: Application;
  account_id: string;
  id: string;
  account: IAccount;
}

export type Res_Connection_All = IConnection[];

export interface IChatflow {
  id: string;
  name: string;
  is_active: boolean;
  user_id: string;
  created_at: string;
  updated_at: string;
  date?: string;
}
export type Res_BotBuilder_Chatflow_All = IChatflow[];

export interface IParams_Pagination {
  page?: number;
  page_size?: number;
  facebook_page_id: string;
}

export interface INotification {
  id: string;
  title: string;
  description: string;
  created_at: string;
  is_readed: boolean;
}

export type Body_Livechat_Contact_All_FacebookPageId = {
  field: string;
  operator: string;
  value: number;
}[];

export interface IContact {
  contact_igs_id: boolean;
  facebook_page_id: number;
  first_impression?: string;
  id: string;
  last_interaction_at: string;
  last_message?: string;
  last_message_at: string;
  profile_image?: string;
  username: string;
  followers_count: number;
  is_business_follow_user: boolean;
  is_user_follow_business: boolean;
  is_verified_user: boolean;
  name: string;
}

export type Res_LiveChat_Contact_All_PageId = {
  items: IContact[];
  pagination: Pagination;
};

export type Res_LiveChat_Contact_Id = IContact;

export interface IContactGroup {
  id: string;
  name: string;
  description: string;
  contacts: { profile_image: string; username: string }[];
}
export type Res_Notifier_Group_FacebookPageId = {
  items: IContactGroup[];
  pagination: Pagination;
};

export type Body_Notifier_Group = {
  name: string;
  description: string;
  facebook_page_id: string;
  contacts: {
    contact_igs_id: string;
    contact_id: string;
  }[];
};

export type Body_Notifier_Campaign = {
  name: string;
  description: string;
  status: string;
  is_draft: boolean;
  group_id: string;
  facebook_page_id: string;
  image: {
    filename: string;
  };
  content: {
    text: string;
  };
};

export interface ICampaign {
  id: string;
  name: string;
  description: string;
  status: string;
  is_draft: Boolean;
  created_at: Date;
  group_name: string;
  facebook_page_id: string;
  account: {
    id: string;
    username: string;
    platform: string;
    profile_image: string;
    page_id: string;
  };
  content: {
    object;
    text: string;
  };
  user_id: string;
  contacts: [string];
  sent_count: number;
  seen_count: number;
  total_contact_count: number;
}
export type Res_Notifier_Campaign_FacebookPageId = {
  items: ICampaign[];
  pagination: Pagination;
};

export type file = {
  path: string;
  lastModified: number; // timestamp
  lastModifiedDate: Date;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
};

export type Res_file = {
  filename: string;
  url: string;
};
