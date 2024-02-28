// ProductAll.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductAll = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/product/productAll');
      const sortedProducts = response.data.sort((a, b) => a.id - b.id);
      setProducts(sortedProducts);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };



  const handleDelete = async (productId) => {
    try {
      const response = await axios.delete(`http://localhost:8080/product/delete/${productId}`);
      console.log(response);
      fetchData(); // โหลดข้อมูลใหม่หลังจากลบ
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-base-content">Product List</h2>
      <ul>
        {products.map((product) => (
          <li
            key={product.id}
            className={`border p-4 my-4 rounded ${
              product.id % 2 === 0 ? 'bg-base-100' : 'bg-base-300'
            }`}
          >
            <h3 className="text-xl font-bold ">{product.productName}</h3>
            <p>{product.details}</p>
            <p>ราคา: {product.price} บาท</p>
            <p>จำนวน: {product.amountProduct} ต้น</p>
            {/* Add more details as needed */}
            <button className="btn btn-active btn-primary mr-2 mt-2">Update</button>
            <button className="btn btn-active btn-secondary" onClick={() => handleDelete(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductAll;
