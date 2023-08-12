import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useInventory } from '../context/InventoryContext';

function SingleProduct() {
    const{productId}=useParams();
    const {inventory}=useInventory();
    if (!productId) {
      return <div>Loading...</div>;
    }
    const product=inventory.find(item=>item.id===parseInt(productId))
  return (
    <div className='flex p-8 gap-8 text-xl'>
        <div>
        <img src={product.imageUrl} alt="product" className=''/>
        </div>
        <div className='text-left flex flex-col gap-2'>
            <p className='font-bold text-3xl'>{product.name}</p>
            <p><b>Price: $</b> {product.price}</p>
            <p><b>Stock:</b> {product.stock}</p>
            <p><b>Supplier:</b> {product.supplier}</p>
            <p><b>SKU:</b> {product.sku}</p>
            <p><b>Delivered:</b> {product.delivered}</p>
            <p><b>Description:</b> {product.description}</p>
        </div>
    </div>
  )
}

export default SingleProduct