import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"  
import { Button } from './ui/button'

const clothData = [
  {
    image: '/c1.png',
    title: 'Madness tee',
    originalPrice: '900.00',
    discountedPrice: '699.00',
    saleText: 'Sale'
  },
  {
    image: '/c2.png',
    title: 'Cool tee',
    originalPrice: '1000.00',
    discountedPrice: '799.00',
    saleText: 'Sale'
  },
  {
    image: '/c3.png',
    title: 'Pretty tee',
    originalPrice: '700.00',
    discountedPrice: '499.00',
    saleText: 'Sale'
  },
  {
    image: '/c4.png',
    title: 'Kitty tee',
    originalPrice: '800.00',
    discountedPrice: '599.00',
    saleText: 'Sale'
  }
];

const TC = () => {
  return (
    <div>
      <h1 className='text-3xl ml-20 pt-16 md:pt-0 tracking-wide'>Tees for cinephiles</h1>
      <div className='h-[80vh] bg-white px-10 py-8 element overflow-x-auto overflow-y-hidden'>
        <div className='flex gap-5'>
          {clothData.map((cloth, index) => (
            <Card key={index} className='w-72 h-80 border-none'>
              <div className='w-[300px] h-full relative overflow-hidden'>
                <img src={cloth.image} alt='image' className='object-fit h-full w-full hover:scale-105 transition-all duration-600' />
                <div>
                  <button className='bg-blue-800 px-4 py-1 text-white tracking-wide rounded-full absolute bottom-3 left-6'>{cloth.saleText}</button>
                </div>
              </div>
              <CardContent className='mt-4 cursor-pointer'>
                <p className='text-sm hover:underline underline-offset-2'>{cloth.title}</p>
              </CardContent>
              <CardContent className='cursor-pointer'>
                <p className='-mt-4 font-medium'><span className='text-sm line-through'>Rs. {cloth.originalPrice}</span><span className='ml-4'>From Rs. {cloth.discountedPrice}</span></p>
              </CardContent>
              <CardContent>
                <Button className='w-full rounded-none border-2 border-black bg-white text-black font-medium'>Buy now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TC