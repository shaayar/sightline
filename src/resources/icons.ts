import { IconType } from "react-icons";

import {
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

import {
  FaGithub,
  FaDiscord,FaBookOpen
} from "react-icons/fa";

import {
  MdEmail,
} from "react-icons/md";

export const iconLibrary: Record<string, IconType> = {
  rocket: HiOutlineRocketLaunch,

  github: FaGithub,
  discord: FaDiscord,
  email: MdEmail,
  book: FaBookOpen,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
