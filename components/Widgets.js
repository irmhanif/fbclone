import {
  DotsHorizontalIcon,
  SearchIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import { contacts, session } from "./constants";
import Contact from "./Contact";

function Widgets() {
 // const [session] = useSession();
  return (
    <div className='hidden lg:flex flex-col w-60 p-2 mt-5'>
      <div className='flex justify-between items-center text-gray-500 mb-5'>
        <h2 className='text-xl'>Contacts</h2>
        <div className='flex space-x-2'>
          <VideoCameraIcon className='h-6' />
          <SearchIcon className='h-6' />
          <DotsHorizontalIcon className='h-6' />
        </div>
      </div>
      {contacts?.map((contact, index) => {
        return <Contact key={index} src={contact.src} name={contact.name} />;
      })}
    </div>
  );
}

export default Widgets;
