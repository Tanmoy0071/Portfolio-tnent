import emojiimage from '@/assets/images/memoji-computer.png'
import Image from "next/image";
import grainImage from '@/assets/images/grain.jpg'
import StarIcon from '@/assets/icons/star.svg';
import Rotatingimage1 from '@/assets/images/memoji-avatar-4.png'
import Hehe from '@/assets/icons/github.svg'

export const HeroSection = () => {
  return (
    <div className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>
      <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]'>
      <div className='absolute inset-0 -z-30 opacity-5' style={{
        backgroundImage: `url(${grainImage.src})`,
      }}></div>
    <div className='size-[620px] hero-ring'></div>
    <div className='size-[820px] hero-ring'></div>
    <div className='size-[1020px] hero-ring'></div>
    <div className='size-[1220px] hero-ring'></div>
    <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  '>
    <div className='animate-spin [animation-duration:30s]   size-[800px]'>
    <div className='border border-red-500 inline-flex ro'>
      <Hehe className='size-28'/>
      </div>
    </div>
    </div>
    </div>
  <div className='container lg:mt-[-43px]'>
    <div className='flex flex-col items-center'>
    <Image src={emojiimage}
    className='size-[100px]' alt=''/>
    <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
      <div className='bg-green-500 animate-pulse size-2.5 rounded-full'></div>
      <div className='text-sm font-medium'>We are Hiring</div>
    </div>
    </div>
    <div className='max-w-lg mx-auto'>
    <h1 className='font-serif md:text-5xl text-3xl text-center mt-8 tracking-wide'>Tnent Store - Apno Ka Dukan, Apno Ke liye</h1>
    <p className='mt-4 text-center text-white/60 md:text-lg'>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est excepturi dicta, alias 
    </p>
    </div>
    <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
      <button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl'>
      
        <span className='font-semibold'>Play Store</span>
      </button>
      <button className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl'>
        <span className='font-semibold'>App Store</span>
      </button>
    </div>
  </div>
  </div>
  );
};
