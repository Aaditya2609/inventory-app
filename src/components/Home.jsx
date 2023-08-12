import React from 'react'
import { useInventory } from '../context/InventoryContext'

function Home() {
    const {inventory}=useInventory();
    const totalstock=inventory.reduce((acc,cv)=>acc+cv.stock,0)
    const totaldelivered=inventory.reduce((acc,cv)=>acc+cv.delivered,0)
    const lowStock=inventory.reduce((acc,cv)=>cv.stock<=10?acc+1:acc,0)
  return (
    <div className='flex gap-4 justify-center p-8 '>
        <div className='h-fit border-2 p-8 rounded-xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] text-2xl'>
            <p>Total Stock</p>
            <p className='text-green-400 font-bold'>{totalstock}</p>
        </div>
        <div className='h-fit border-2 p-8 rounded-xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] text-2xl'>
            <p>Total Delivered</p>
            <p className='text-blue-400 font-bold'>{totaldelivered}</p>
        </div>
        <div className='h-fit border-2 p-8 rounded-xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] text-2xl'>
            <p>Low Stock Items</p>
            <p className='text-red-500 font-bold'>{lowStock}</p>
        </div>
    </div>
  )
}

export default Home