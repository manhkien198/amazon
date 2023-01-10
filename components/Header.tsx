import React from 'react';
import Logo from '../assets/images/logo.png';
import Image from 'next/image';
export default function Header() {
  return (
    <header>
      {/* top nav */}
      <div className='py-2 bg-[#131921] flex items-center flex-grow'>
        <div className='flex mt-2 flex-grow sm:flex-grow-0 items-center'>
          <Image
            src={Logo}
            alt='amazon logo'
            width={113}
            height={50}
            objectFit='contain'
            className='cursor-pointer'
          />
        </div>
      </div>
      {/* bottom nav */}
      <div></div>
    </header>
  );
}
