import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UsersIcon,
} from "@heroicons/react/solid";

export const TABS = {
  HOME: "Home",
  FLAG: "Flag",
  PLAY: "Play",
  MARKET: "Marketplace",
  GROUP: "Groups",
  WATCH: "Watch",
  EVENTS: "Events",
  MEMORIES: "Memories",
  SEE_MORE: "See more",
};

export const SIDE_BAR = [
  {
    name: "Friends",
    icon: UsersIcon,
  },
  {
    name: TABS.GROUP,
    icon: UserGroupIcon,
  },
  {
    name: TABS.MARKET,
    icon: ShoppingBagIcon,
  },
  {
    name: TABS.WATCH,
    icon: DesktopComputerIcon,
  },
  {
    name: TABS.EVENTS,
    icon: CalendarIcon,
  },
  {
    name: TABS.MEMORIES,
    icon: ClockIcon,
  },
  {
    name: TABS.SEE_MORE,
    icon: ChevronDownIcon,
  },
];

export const stories = [
  {
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk",
  },
  {
    name: "Jeff Bezoz",
    src: "https://links.papareact.com/k2j",
    profile: "https://links.papareact.com/f0p",
  },
  {
    name: "Mark Zuckerberg",
    src: "https://links.papareact.com/xql",
    profile: "https://links.papareact.com/snf",
  },
  {
    name: "Bill Gates",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy",
  },
];

export const contacts = [
  { src: "https://links.papareact.com/f0p", name: "Jeff Bezoz" },
  { src: "https://links.papareact.com/kxk", name: "Elon Musk" },
  { src: "https://links.papareact.com/zvy", name: "Bill Gates" },
  { src: "https://links.papareact.com/snf", name: "Mark Zuckerberg" },
  { src: "https://links.papareact.com/d0c", name: "Harry Potter" },
  { src: "https://links.papareact.com/6gg", name: "The Queen" },
  { src: "https://links.papareact.com/r57", name: "James Bond" },
];

export const session = {
  user: {
    name: 'Mohamed Idris M',
    image: 'https://scontent.fixm4-3.fna.fbcdn.net/v/t39.30808-1/353853656_2936670176466497_5154517390690126455_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=bJWJC7m71LsAX8lt2AW&_nc_ht=scontent.fixm4-3.fna&oh=00_AfD5D0fesKdb2EA54600VQTXS3gNXUVNtjGUzMbVVvSCpQ&oe=65309E8C',
    email: 'idris@idris.com'
  }
}