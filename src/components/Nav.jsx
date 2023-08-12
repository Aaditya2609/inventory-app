import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import AddProductModal from './AddProductModal';

function Nav() {
    const location = useLocation();
    const [showModal,setShowModal]=useState(false);
    return (
        <div className='flex flex-col w-[20%] min-h-[100vh] gap-8 bg-[rgba(0,0,0,0.9)] py-12 px-8 font-bold text-2xl'>
            <NavLink to="/" className={`flex items-center justify-center ${location.pathname === '/' ? 'text-[#29b9f0ff]' : ' text-[white]'
                }`}>
                Dashboard
            </NavLink>
            <NavLink to="/departments" className={`flex items-center justify-center ${location.pathname === '/departments' ? 'text-[#29b9f0ff]' : 'text-[white]'
                }`}>
                Departments
            </NavLink>
            <NavLink to="/products/all" className={`flex items-center justify-center ${ location.pathname.includes('/product') ? 'text-[#29b9f0ff]' : ' text-[white]'
                }`}>
                Products
            </NavLink>
            <button className=' bg-[#29b9f0ff] text-white p-4 rounded-xl text-md font-semibold' onClick={()=>setShowModal(true)}>Add Product</button>
            {showModal&&<AddProductModal setShowModal={setShowModal}/>}
        </div>
        
    ) 
}

export default Nav