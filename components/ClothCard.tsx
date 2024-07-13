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

const ClothCard = () => {
  return (
    <Card className='w-72 h-80 border-none'>
        <div className='w-[300px] h-full relative'>
            <img src='/t1.png' alt='image' className='object-cover h-full w-full' />
            <div>
                <button className='bg-blue-800 px-4 py-1 text-white tracking-wide rounded-full absolute bottom-3 left-6'>Sale</button>
            </div>
        </div>
        <CardContent className='mt-4'>
            <p className='text-sm hover:underline underline-offset-2'>Madness tee</p>
        </CardContent>
        <CardContent>
            <p className='-mt-4 font-medium'><span className='text-sm line-through'>Rs. 900.00</span><span className='ml-4'>From Rs. 699.00</span></p>
        </CardContent>
        <CardContent>
            <Button className='w-full rounded-none border-2 border-black bg-white text-black font-medium'>Buy now</Button>
        </CardContent>
    </Card>
  )
}

export default ClothCard
