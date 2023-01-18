import { StarIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { ProductProps } from '../models/index';
import { useState } from 'react';
import Currency from 'react-currency-formatter';
import Prime from '../assets/images/prime-logo.svg'
export default function Product({id,title,price,description,category,image,rating}:ProductProps) {
    const rate= Math.round(Number(rating.rate))
    const [hasPrime]=useState(Math.random()<0.5)
  return (
    <div className='relative  flex flex-col m-5 bg-white z-30 p-10'>
        <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>
        <Image src={image} alt='product image' width={200} height={200}/>
        <h4 className='my-3'>{title}</h4>
        <div className="flex">
            {Array(rate).fill(0,1).map((_,i)=>{
                return (<StarIcon className='h-5 text-yellow-500' key={i}/>)
            })}
        </div>
        <p className='text-xs my-2 line-clamp-2'>{description}</p>
        <div className='mb-5'>
            <Currency quantity={price} currency="GBP" />
        </div>
        {hasPrime&&(
            <div className='flex items-center space-x-2 -mt-5'>
                <Image src={Prime} alt='product prime' width={48} height={10}/>
                <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
            </div>
        )}
        <button className='mt-auto button'>Add to basket</button>
    </div>
  )
}
