import React from 'react';
import { ProductProps } from '../models';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';
import Currency from 'react-currency-formatter';
import Prime from '../assets/images/prime-logo.svg';
import { addToBasket, removeFromBasket } from '../slices/basketSlice';
import { useAppDispatch } from '../store';

interface CheckoutProductsProps {
  product: ProductProps;
}
export default function CheckoutProducts({ product }: CheckoutProductsProps) {
  const { id, title, rating, price, description, category, image, hasPrime } =
    product;
  const rate = Math.round(Number(rating.rate));
  const dispatch = useAppDispatch();
  const addProductToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      hasPrime,
      rating,
    };
    dispatch(addToBasket(product));
  };
  const removeProductFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };
  return (
    <div className='grid grid-cols-5'>
      <div className='w-40 h-52 relative'>
        <Image src={image} alt='checkout product' fill />
      </div>
      <div className='col-span-3 mx-5'>
        <h4 className='my-3'>{title}</h4>
        <div className='flex'>
          {Array(rate)
            .fill(0, 1)
            .map((_, i) => {
              return <StarIcon className='h-5 text-yellow-500' key={i} />;
            })}
        </div>
        <p className='text-xs my-2 line-clamp-2'>{description}</p>
        <div className='mb-5'>
          <Currency quantity={price} currency='GBP' />
        </div>
        {hasPrime && (
          <div className='flex items-center space-x-2 -mt-5'>
            <Image
              loading='lazy'
              src={Prime}
              alt='product prime'
              width={48}
              height={10}
            />
            <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
          </div>
        )}
      </div>
      <div className='flex flex-col mx-auto gap-2 items-center justify-center'>
        <button className='button w-40' onClick={addProductToBasket}>
          Add to basket
        </button>
        <button className='button w-40' onClick={removeProductFromBasket}>
          Remove from basket
        </button>
      </div>
    </div>
  );
}
