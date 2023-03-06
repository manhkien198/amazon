import React from 'react';
import Logo from '../assets/images/logo.png';
import Image from 'next/image';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useAppSelector } from '../store';
import { selectItems } from '../slices/basketSlice';

export default function Header() {
  const { data } = useSession();
  const user = data?.user;
  const router = useRouter();
  const selectedItems = useAppSelector(selectItems);
  return (
    <header>
      {/* top nav */}
      <div className='py-2 bg-[#131921] flex items-center grow'>
        <div className='flex mt-2 grow items-center px-4'>
          <Image
            onClick={() => router.push('/')}
            src={Logo}
            alt='amazon logo'
            width={113}
            height={50}
            objectFit='contain'
            className='cursor-pointer'
          />
        </div>
        {/* search */}
        <div className='bg-yellow-400 hover:bg-yellow-500 hidden sm:flex items-center h-10 rounded-md grow cursor-pointer'>
          <input
            type='text'
            className='h-full p-2 grow shrink rounded-l-md focus:outline-none'
          />
          <MagnifyingGlassIcon className='h-12 p-4' />
        </div>
        <div className='text-white text-xs flex items-center space-x-6 mx-6 whitespace-nowrap'>
          <div
            className='link cursor-pointer'
            onClick={(e) => {
              e.preventDefault();
              !user ? signIn() : signOut();
            }}
          >
            <p>{user ? `Hello ${user.name}` : 'Sign In'}</p>
            <p className='font-extrabold md:text-sm'>Account & lists</p>
          </div>
          <div className='link'>
            <p>Returns</p>
            <p className='font-extrabold md:text-sm'>& Orders</p>
          </div>
          <div
            className='link relative flex items-center'
            onClick={() => router.push('/checkout')}
          >
            <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold'>
              {selectedItems.length}
            </span>
            <ShoppingCartIcon className='h-10' />
            <p className='hidden md:inline font-extrabold md:text-sm mt-2'>
              Basket
            </p>
          </div>
        </div>
      </div>
      <div className='flex items-center space-x-3 p-2 pl-6 bg-slate-700 text-white text-sm'>
        <p className='link flex items-center'>
          <Bars3Icon className='h-6 mr-1' />
          All
        </p>
        <p className='link'>Today&apos;s Deals</p>
        <p className='link'>Customer Service</p>
        <p className='link'>Gift Cards</p>
        <p className='link'>Registry</p>
        <p className='link'>Sell</p>
      </div>
    </header>
  );
}
