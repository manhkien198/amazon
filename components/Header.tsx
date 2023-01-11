import React from 'react';
import Logo from '../assets/images/logo.png';
import Image from 'next/image';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Header() {
  return (
    <header>
      {/* top nav */}
      <div className='py-2 bg-[#131921] flex items-center grow'>
        <div className='flex mt-2 sm:grow-0 md:grow items-center'>
          <Image
            src={Logo}
            alt='amazon logo'
            width={113}
            height={50}
            objectFit='contain'
            className='cursor-pointer'
          />
        </div>
        {/* search */}
        <div className='bg-yellow-400 hover:bg-yellow-500 sm:flex items-center h-10 rounded-md grow cursor-pointer'>
          <input
            type='text'
            className='h-full p-2 grow shrink rounded-l-md focus:outline-none'
          />
          <MagnifyingGlassIcon className='h-12 p-4' />
        </div>
      </div>
      {/* bottom nav */}
      <div></div>
    </header>
  );
}
