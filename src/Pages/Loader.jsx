import React from 'react';
import Logo from '/mydiarynotes.png';
import UserSearch from "/UserSearch.gif";

const Loader = () => {
  return (
    <div className='flex flex-wrap items-center justify-center h-screen w-screen text-center'>
      <img
        src={Logo}
        alt="MY DIARY NOTES"
        title='MY DIARY NOTES'
        className='h-[15em] sm:h-[18em] md:h-[20em] lg:h-[23em] xl:h-[25em] 2xl:h-[30em]'
      />
      
      {/* This div acts as a line break in flex-wrap */}
      <div className='w-full'></div>

      <img
        src={UserSearch}
        alt="LOADING...."
        className='relative bottom-[10em] rounded-[10%] border-[5px] border-[#324b4a] h-[3em] sm:h-[4em] md:h-[5em] lg:h-[6em]'
      />
    </div>
  );
};

export default Loader;
