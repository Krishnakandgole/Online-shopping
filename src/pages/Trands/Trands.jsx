import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Trands({AddToCart}) {
  const [trands, settrand] = useState([]);


  useEffect(() => {
    fetch('https://dummyjson.com/products/category/mens-watches')
    .then((res) => res.json())
    .then((data) => settrand(data.products))
      
  }, [])
  return (
    <div className='container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10'>
      {trands.map((product) => (
        <div
          key={product.id}
          className="bg-white shadow-md rounded-lg hover:shadow-gray-400 overflow-hidden transition-transform transform hover:scale-105"
        >
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-4/5 object-cover h-60"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{product.brand}</h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {product.title}
            </p>
            <div className="flex justify-between items-center">
              <span className="text-green-600 font-bold">${product.price}</span>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={() => AddToCart(product)}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Trands;