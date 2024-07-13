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
import clothData from '@/public/Data.json'

const cloths = clothData.filter((cloth) => cloth.productId >= "1" && cloth.productId <= "4")


const TC = () => {
  return (
    <div>
      <h1 className='text-3xl ml-20 pt-16 tracking-wide'>Tees for cinephiles</h1>
      <div className='h-[80vh] bg-white px-10 py-6 overflow-x-auto overflow-y-hidden'>
        <div className='flex gap-4'>
          {cloths.map((cloth, index) => (
            <Card key={index} className='w-72 h-80 border-none'>
              <div className='w-[300px] h-full relative'>
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