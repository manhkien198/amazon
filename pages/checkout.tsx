import React, { useId } from 'react';
import Header from '../components/Header';
import { useAppSelector } from '../store';
import { selectItems, selectTotal } from '../slices/basketSlice';
import { ProductProps } from '../models/index';
import CheckoutProducts from '../components/CheckoutProducts';
import Currency from 'react-currency-formatter';
import { useSession } from 'next-auth/react';

export default function Checkout() {
  const items = useAppSelector(selectItems);
  const session = useSession();
  const total = useAppSelector(selectTotal);
  return (
    <div className='bg-gray-100'>
      <Header />
      <main className='lg:flex max-w-screen-2xl m-5 shadow-sm mx-auto '>
        {/* left */}
        <div className='w-full'>
          <div className='flex flex-col p-5 space-y-10 bg-white'>
            {items.length ? (
              <h2 className='text-2xl cart-title w-full'>Shopping cart</h2>
            ) : (
              <h1 className='text-3xl border-b pb-4'>
                Your Amazon basket is empty
              </h1>
            )}
            {items.map((item: ProductProps, i) => (
              <CheckoutProducts key={item.id} product={item} />
            ))}
          </div>
        </div>

        {/* right */}
        <div className='flex flex-col bg-white p-10 shadow-md'>
          {items.length > 0 && (
            <>
              <h2 className='whitespacce-nowrap'>
                SubTotal ({items.length} items) :
                <span className='font-bold'>
                  <Currency quantity={total} currency='GBP' />
                </span>
              </h2>
              <button
                disabled={!session}
                className={`button mt-2 ${
                  !session &&
                  'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'
                }`}
              >
                {!session ? 'Sign in to checkout' : 'Proceed to checkout'}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
