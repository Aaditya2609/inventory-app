import React from 'react'
import Nav from '../components/Nav'
import SingleProduct from '../components/SingleProduct'

function SingleProductPage() {
  return (
    <div className='flex w-full gap-4'>
        <Nav/>
        <SingleProduct/>
    </div>
  )
}

export default SingleProductPage