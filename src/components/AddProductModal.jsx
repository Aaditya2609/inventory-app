import React, { useState } from 'react'
import { useInventory } from '../context/InventoryContext'

function AddProductModal({ setShowModal }) {
    const { inventory, setInventory,updateLocalStorage } = useInventory();
    const [error, setError] = useState("")
    const [tempProduct, setTempProduct] = useState({
        id: 0,
        department: 'none',
        name: '',
        description:
            '',
        price: 0,
        stock: 0,
        sku: '',
        supplier: '',
        delivered: 0,
        imageUrl: ''
    })
    const handleAddProduct = () => {
        if (tempProduct.department === "none") {
            setError("Select Department")
        }
        else if (tempProduct.department !== "none" && tempProduct.name === "") {
            setError("Enter Valid Product Name")
        }
        else if (tempProduct.department !== "none" && tempProduct.name !== "" && tempProduct.description === "") {
            setError("Enter Valid Product Description")
        }
        else if (tempProduct.department !== "none" && tempProduct.name !== "" && tempProduct.description !== "" && tempProduct.price === 0) {
            setError("Enter Valid Product Price")
        }
        else if (tempProduct.department !== "none" && tempProduct.name !== "" && tempProduct.description !== "" && tempProduct.price !== 0 && tempProduct.stock === 0) {
            setError("Enter Valid Product Stock")
        }
        else if (tempProduct.department !== "none" && tempProduct.name !== "" && tempProduct.description !== "" && tempProduct.price !== 0 && tempProduct.stock !== 0 && tempProduct.sku === '') {
            setError("Enter Valid Product SKU")
        }
        else if (tempProduct.department !== "none" && tempProduct.name !== "" && tempProduct.description !== "" && tempProduct.price !== 0 && tempProduct.stock !== 0 && tempProduct.sku !== "" && tempProduct.supplier === "") {
            setError("Enter Valid Product Supplier")
        }
        else if (tempProduct.department !== "none" && tempProduct.name !== "" && tempProduct.description !== "" && tempProduct.price !== 0 && tempProduct.stock !== 0 && tempProduct.sku !== "" && tempProduct.supplier !== "" && tempProduct.delivered === 0) {
            setError("Enter Valid Product Delivered")
        }
        else if (tempProduct.department !== "none" && tempProduct.name !== "" && tempProduct.description !== "" && tempProduct.price !== 0 && tempProduct.stock !== 0 && tempProduct.sku !== "" && tempProduct.supplier !== "" && tempProduct.delivered !== 0 && tempProduct.imageUrl === "") {
            setError("Enter Valid Product ImageUrl")
        }
        else {
            const temp = { ...tempProduct, id: inventory.length + 1};
            const temp2 = [...inventory, temp]
            updateLocalStorage(temp2);
            setShowModal(false);
        }

    }

    return (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-70 z-100">
            <div className="bg-white p-4 w-[40%]">
                <div className='flex items-center justify-between px-16'>
                    <p className='text-3xl'>Add Product</p>
                    <button
                        className="m-2 p-3 bg-[#29b9f0ff] text-white rounded font-bold"
                        onClick={() => setShowModal(false)}
                    >
                        X
                    </button>
                </div>
                <div className='flex flex-col gap-2  items-center font-semibold text-xl'>
                    <label className='flex flex-col text-left w-4/6'>Department
                        <select onChange={(e) => setTempProduct({ ...tempProduct, department: e.target.value })}>
                            <option value={"none"}>None</option>
                            <option value={"Kitchen"}>Kitchen</option>
                            <option value={"Toys"}>Toys</option>
                            <option value={"Clothing"}>Clothing</option>
                        </select>
                    </label>
                    <label className='flex flex-col text-left w-4/6'>
                        Name
                        <input onChange={(e) => setTempProduct({ ...tempProduct, name: e.target.value })} className='border-2 border-black'></input>
                    </label>
                    <label className='flex flex-col text-left w-4/6'>
                        Description
                        <input onChange={(e) => setTempProduct({ ...tempProduct, description: e.target.value })} className='border-2 border-black'></input>
                    </label>
                    <label className='flex flex-col text-left w-4/6'>
                        Price
                        <input onChange={(e) => setTempProduct({ ...tempProduct, price: parseInt(e.target.value) })} className='border-2 border-black' type="number" step="any" />
                    </label>
                    <label className='flex flex-col text-left w-4/6'>
                        Stock
                        <input onChange={(e) => setTempProduct({ ...tempProduct, stock: parseInt(e.target.value) })} className='border-2 border-black' type="number" />
                    </label>
                    <label className='flex flex-col text-left w-4/6'>
                        SKU
                        <input onChange={(e) => setTempProduct({ ...tempProduct, sku: e.target.value })} className='border-2 border-black'></input>
                    </label>
                    <label className='flex flex-col text-left w-4/6'>
                        Supplier
                        <input onChange={(e) => setTempProduct({ ...tempProduct, supplier: e.target.value })} className='border-2 border-black'></input>
                    </label>
                    <label className='flex flex-col text-left w-4/6'>
                        Delivered
                        <input onChange={(e) => setTempProduct({ ...tempProduct, delivered: parseInt(e.target.value) })} className='border-2 border-black' type="number" />
                    </label>
                    <label onChange={(e) => setTempProduct({ ...tempProduct, imageUrl: e.target.value })} className='flex flex-col text-left w-4/6'>
                        Image URL
                        <input className='border-2 border-black'></input>
                    </label>
                    {error}
                    <button className='bg-[#29b9f0ff] text-white p-2 rounded-xl text-md font-semibold' onClick={() => handleAddProduct()}>Add Product</button>
                </div>
            </div>
        </div>
    )
}

export default AddProductModal