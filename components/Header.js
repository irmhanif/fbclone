/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  ChevronUpIcon,
  FlagIcon,
  LogoutIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";
import { TABS, session } from "./constants";
import { signOut, useSession } from "next-auth/react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

function Header() {
  const [activeTab, setActiveTab] = useState("Home");
  const options = [
    { value: "Logout", className: "myOptionClassName", onClick: signOut },
  ];
  const handleTab = (tab) => {
    setActiveTab(tab);
  };

  const [logBox, setLogBox] = useState(false);
  const toggleBox = () => {
    setLogBox(!logBox);
  };
  return (
    <div className='px-2 sticky top-0 z-50 bg-white flex items-center lg-px-5 shadow-md'>
      {/* l */}
      <div className='flex items-center'>
        <Image
          src='https://cdn-icons-png.flaticon.com/128/1312/1312139.png'
          width={40}
          height={40}
          layout={"fixed"}
        />
        <div className='flex ml-2 items-center rounded-full bg-gray-200 p-2'>
          <SearchIcon className='h-6 text-gray-600' />
          <input
            type='text'
            name='Facebook'
            placeholder='Search Facebook'
            className='hidden font-sans md:inline-flex flex-shrink ml-2 outline-none placeholder-gray-500 items-center bg-transparent'
          />
        </div>
      </div>

      {/* m */}
      <div className='flex justify-center flex-grow'>
        <div className='flex space-x-6 md:space-x-2'>
          <HeaderIcon
            Icon={HomeIcon}
            active={activeTab === TABS.HOME}
            onHandle={handleTab}
            name={TABS.HOME}
          />
          <HeaderIcon
            Icon={FlagIcon}
            active={activeTab === TABS.FLAG}
            onHandle={handleTab}
            name={TABS.FLAG}
          />
          <HeaderIcon
            Icon={PlayIcon}
            active={activeTab === TABS.PLAY}
            onHandle={handleTab}
            name={TABS.PLAY}
          />
          <HeaderIcon
            Icon={ShoppingCartIcon}
            active={activeTab === TABS.MARKET}
            onHandle={handleTab}
            name={TABS.MARKET}
          />
          <HeaderIcon
            Icon={UserGroupIcon}
            active={activeTab === TABS.GROUP}
            onHandle={handleTab}
            name={TABS.GROUP}
          />
        </div>
      </div>
      {/* r */}
      <div className='flex items-center sm:space-x-2 justify-end'>
        <Image
          onClick={signOut}
          className='rounded-full cursor-pointer'
          src={session?.user?.image}
          width='40'
          height='40'
          layout='fixed'
        />
        <p className='font-semibold pr-3 whitespace-nowrap'>
          {session?.user?.name}
        </p>

        <ViewGridIcon className='icon' />
        <ChatIcon className='icon' />
        <BellIcon className='icon' />
        {!logBox ? (
          <ChevronDownIcon className='icon' onClick={toggleBox} />
        ) : (
          <ChevronUpIcon className='icon' onClick={toggleBox} />
        )}
        <LogoutIcon className='logout' onClick={signOut}/>
      
      </div>
    </div>
  );
}

export default Header;
