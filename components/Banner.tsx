import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Img1 from '../assets/images/carousel1.jpg';
import Img2 from '../assets/images/carousel2.jpg';
import Img3 from '../assets/images/carousel3.jpg';
import Img4 from '../assets/images/carousel4.jpg';
import Image from 'next/image';
export default function Banner() {
  return (
    <div className='relative'>
      <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0  z-20' />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
        <div className='h-[600px] relative'>
          <Image src={Img1.src} fill loading='lazy' alt='banner image' />
        </div>
        <div className='h-[600px] relative'>
          <Image src={Img2.src} fill loading='lazy' alt='banner image' />
        </div>
        <div className='h-[600px] relative'>
          <Image src={Img3.src} fill loading='lazy' alt='banner image' />
        </div>
        <div className='h-[600px] relative'>
          <Image src={Img4.src} fill loading='lazy' alt='banner image' />
        </div>
      </Carousel>
    </div>
  );
}
