/* eslint-disable jsx-a11y/alt-text */
import { PlusCircleIcon, PlusIcon } from "@heroicons/react/outline";
import Image from "next/image";

function StoryCard({ name, src, profile, createStory }) {
  return (
    <div className='relative h-14 w-14 md:h-20 md:w-20 lg:h-48 lg:w-32 cursor-pointer overflow-x p-3 transition duration-200 transform ease-in hover:scale-105'>
      <Image
        className='absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10'
        src={profile}
        width={40}
        height={40}
        layout='fixed'
        objectFit='cover'
      />
      <Image
        className='object-cover filter brightness-75 rounded-full lg:rounded-3xl'
        src={src}
        layout='fill'
      />
      {createStory && (
        <>
          <div className='opacity-0 lg:opacity-100 absolute bottom-8 block text-center left-0 right-0 z-50'>
            <div >
              <button className='rounded-full border-white border-2 bg-blue-500 text-white w-8 h-8 items-center'>
                  <PlusIcon className='w-7 h-5'/>
              </button>
            </div>
          </div>
          <div className='opacity-0 lg:opacity-100 absolute bg-white left-0 right-0 text-center block items-center bottom-0 rounded-bl-xl rounded-br-xl shadow-md pt-4 pb-2 z-40'>
            <p>Create Story</p>
          </div>
        </>
      )}
    </div>
  );
}

export default StoryCard;
