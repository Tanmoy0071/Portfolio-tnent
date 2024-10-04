import grainImage from '@/assets/images/grain.jpg';
import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export const Card = ({
  className,
  children,
}: PropsWithChildren<{className?:string}>) =>{
  return (
    <div className={twMerge(
      "bg-gray-800 rounded-3xl sticky z-0 after:z-10 overflow-hidden after:content-[''] after:absolute after:inset-0 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 pl-8 pr-8 pt-8 md:pt-12 md:px-10 after:pointer-events-none lg:pt-1",
      className
    )}>
       <div
        className="absolute inset-0 z-10 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>
       {children}
    </div>
  )
}
