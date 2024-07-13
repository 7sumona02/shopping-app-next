'use client'
import React from 'react'
import clothData from '@/public/Data.json'

function page({ params }: { params: { proId: string } }) {
    console.log(params.proId)
    const tshirt = clothData.filter((cloth) => cloth.productId === params.proId )[0]

  return (
    <div>
      <img src={tshirt.image} alt="" />
    </div>
  )
}

export default page
