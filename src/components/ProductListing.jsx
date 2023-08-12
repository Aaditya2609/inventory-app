import React, { useEffect, useState } from 'react';
import { useInventory } from '../context/InventoryContext';
import { NavLink, useParams } from 'react-router-dom';

function ProductListing() {
  const { inventory } = useInventory();
  const {departmentId}=useParams();
  const [filteredInventory, setFilteredInventory] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState(departmentId);
  const [showLowStock, setShowLowStock] = useState(false);
  const [sortBy, setSortBy] = useState('');
  if (!departmentId) {
    return <div>Loading...</div>;
  }

  useEffect(() => {
    let filteredData = [...inventory];

    if (selectedDepartment !== 'all') {
      filteredData = filteredData.filter(item => item.department === selectedDepartment);
    }

    if (showLowStock) {
      filteredData = filteredData.filter(item => item.stock <= 10);
    }

    if (sortBy === 'Name') {
      filteredData.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'Price') {
      filteredData.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'Stock') {
      filteredData.sort((a, b) => a.stock - b.stock);
    }

    setFilteredInventory(filteredData);
  }, [inventory, selectedDepartment, showLowStock, sortBy]);

  return (
    <div className='flex flex-col items-start gap-4 p-4'>
      <div className='flex gap-8 items-center'>
        <p className='text-xl font-bold '>All Products</p>
        <label className='flex gap-2'>
          Filter by Department:
          <select
            value={selectedDepartment}
            onChange={event => setSelectedDepartment(event.target.value)}
          >
            <option value="all">All departments</option>
            <option value="Kitchen">Kitchen</option>
            <option value="Toys">Toys</option>
            <option value="Clothing">Clothing</option>
          </select>
        </label>

        <label className='flex gap-2'>
          <input
            type="checkbox"
            checked={showLowStock}
            onChange={() => setShowLowStock(!showLowStock)}
          />
          Show Low Stock
        </label>

        <label className='flex gap-2'>
          Sort by:
          <select
            value={sortBy}
            onChange={event => setSortBy(event.target.value)}
          >
            <option value="">None</option>
            <option value="Name">Name</option>
            <option value="Price">Price</option>
            <option value="Stock">Stock</option>
          </select>
        </label>
      </div>

      <table className='w-full text-md text-center'>
        <tr className='border-2'>
          <td>Image</td>
          <td>Name</td>
          <td className='w-4/12'>Description</td>
          <td>Price</td>
          <td>Stock</td>
          <td>Supplier</td>
        </tr>
        {filteredInventory.map(item => (
          <tr className='border-2' key={item.id}>
            <td className='p-2'><img src={item.imageUrl} alt="product" className='w-28' /></td>
            <td><NavLink className="font-semibold text-purple-600"to={`/products/singleproduct/${item.id}`}>{item.name}</NavLink></td>
            <td>{item.description}</td>
            <td>$ {item.price}</td>
            <td>{item.stock}</td>
            <td>{item.supplier}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default ProductListing;
