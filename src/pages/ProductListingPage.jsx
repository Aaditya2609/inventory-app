import React from 'react'
import Nav from '../components/Nav'
import ProductListing from '../components/ProductListing'

function ProductListingPage() {
    return (
        <div className='flex w-full gap-8'>
            <Nav />
            <ProductListing/>
        </div>
    )
}

export default ProductListingPage