import React from 'react'
import { NavLink } from 'react-router-dom'
import { useInventory } from '../context/InventoryContext';

function Departments() {
    const { inventory } = useInventory();
    const temp = inventory.map(item => item.department);
    const departments = temp.filter((item, index) => temp.indexOf(item) === index);

    return (
        <div className='flex gap-4 justify-center p-8 font-semibold '>
            {departments.map(item => <NavLink to={`/products/${item}`} className='h-fit border-2 p-8 rounded-xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] text-2xl'>
                <p>{item}</p>
            </NavLink>)}
        </div>
    )
}

export default Departments