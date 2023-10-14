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
    src: "https://picsum.photos/400/300",
    profile: "https://picsum.photos/400/300",
  },
  {
    name: "Jeff Bezoz",
    src: "https://picsum.photos/400/300",
    profile: "https://picsum.photos/400/300",
  },
  {
    name: "Mark Zuckerberg",
    src: "https://picsum.photos/400/300",
    profile: "https://picsum.photos/400/300",
  },
  {
    name: "Bill Gates",
    src: "https://picsum.photos/400/300",
    profile: "https://picsum.photos/400/300",
  },
];

export const contacts = [
  { src: "https://picsum.photos/400/300", name: "Jeff Bezoz" },
  { src: "https://picsum.photos/400/300", name: "Elon Musk" },
  { src: "https://picsum.photos/400/300", name: "Bill Gates" },
  { src: "https://picsum.photos/400/300", name: "Mark Zuckerberg" },
  { src: "https://picsum.photos/400/300", name: "Harry Potter" },
  { src: "https://picsum.photos/400/300", name: "The Queen" },
  { src: "https://picsum.photos/400/300", name: "James Bond" },
];

export const session = {
  user: {
    name: 'Mohamed Idris M',
    image: 'https://scontent.fixm4-3.fna.fbcdn.net/v/t39.30808-1/353853656_2936670176466497_5154517390690126455_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=bJWJC7m71LsAX8lt2AW&_nc_ht=scontent.fixm4-3.fna&oh=00_AfD5D0fesKdb2EA54600VQTXS3gNXUVNtjGUzMbVVvSCpQ&oe=65309E8C',
    email: 'idris@idris.com'
  }
}