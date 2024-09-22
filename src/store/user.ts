import { Module } from "vuex";
import { GlobalDataProps } from ".";

export interface UserProps {
  userName?: string;
  isLogin: boolean;
}

const user: Module<UserProps, GlobalDataProps> = {
  state: {
    isLogin: false,
    userName: "zs",
  },
};

export default user;
