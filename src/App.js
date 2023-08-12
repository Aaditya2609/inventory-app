import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import DepartmentsPage from './pages/DepartmentsPage';
import ProductListingPage from './pages/ProductListingPage';
import SingleProductPage from './pages/SingleProductPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/departments" element={<DepartmentsPage/>}/>
        <Route path="/products/:departmentId" element={<ProductListingPage/>}/>
        <Route path="/products/singleproduct/:productId" element={<SingleProductPage/>}/>
      </Routes>
      

      
    </div>
  );
}

export default App;
