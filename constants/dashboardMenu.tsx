import { IMenu } from "@/types/global";
import { Path } from "@/constants/enums";

type Menu = {
  [x: string]: IMenu[];
};
export const sidebarMenu: Menu = {
  products: [
    {
      key: "home",
      path: Path.Home,
      isDisable: true,
      type: "link",
      color: "secondary",
      icon: "Home",
    },
    {
      key: "chatbot",
      path: Path.Archive,
      type: "link",
      color: "chatbot",
      icon: "Chatbot",
      isDisable: false,
    },
    {
      key: "liveChat",
      path: Path.LiveChat,
      isDisable: true,
      type: "link",
      color: "liveChat",
      icon: "LiveChat",
    },
    {
      key: "notifier",
      path: Path.NotifierContacts,
      isDisable: false,
      type: "link",
      color: "notifier",
      icon: "Notifier",
    },
  ],
  tools: [
    {
      key: "connections",
      path: Path.Accounts,
      type: "link",
      color: "secondary",
      icon: "ChartConnected",
    },
    {
      key: "profile",
      path: Path.Profile,
      isDisable: true,
      type: "link",
      color: "secondary",
      icon: "Portrait",
    },
    {
      key: "theme",
      path: "theme",
      type: "button",
      color: "secondary",
      icon: "Moon",
    },
    {
      key: "logout",
      path: "logout",
      type: "button",
      color: "secondary",
      icon: "SignOutAlt",
    },
  ],
};

export const accountsMenu: IMenu[] = [
  {
    key: "Accounts",
    path: Path.Accounts,
  },
];

export const chatbotMenu: IMenu[] = [
  {
    key: "Chatbot",
    path: Path.Chatbot,
    isDisable: true,
  },
  {
    key: "Archive",
    path: Path.Archive,
    isDisable: true,
  },
  {
    key: "Contacts",
    path: Path.Contacts,
    isDisable: false,
  },
];

export const NotifierMenu: IMenu[] = [
  {
    key: "Campaign",
    path: Path.Campaign,
  },
  {
    key: "Groups",
    path: Path.NotifierGroups,
    isDisable: false,
  },
  {
    key: "Contacts",
    path: Path.NotifierContacts,
  },
];
