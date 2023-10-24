import {
  BriefcaseIcon,
  ChatBubbleLeftRightIcon,
  HomeIcon,
} from "@heroicons/react/20/solid";
import { NavigationType } from "./typings";

export const experiences = [
  {
    year: "Current",
    name: "Golf Caddie",
    company: "Al Ain Equestrian, Shooting & Golf Club",
    where: "Al Ain, UAE",
    type: "work",
  },
  {
    year: "June 2022",
    name: "IT Technical Support",
    company: "Hachiko Lending Star Corporation",
    where: "Pagadian City, PH",
    type: "work",
  },
  {
    year: "January 2022",
    name: "Bachelor of Science in Computer Engineering",
    school: "Southern Mindanao Colleges",
    where: "Pagadian City, PH",
    type: "school",
  },
];

export const types = ["education", "work"];

export const navigations = [
  {
    name: "home",
    link: "#home",
    icon: HomeIcon,
  },
  // {
  //   name: "about",
  //   link: "#about",
  // },
  // {
  //   name: "experiences",
  //   link: "#experiences",
  // },
  {
    name: "projects",
    link: "#projects",
    icon: BriefcaseIcon,
  },
  {
    name: "contact",
    link: "#contact",
    icon: ChatBubbleLeftRightIcon,
  },
] satisfies NavigationType[];
