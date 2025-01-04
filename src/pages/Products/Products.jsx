import React, { useState, useEffect } from "react";
import axios from "axios";
import { CiSearch } from "react-icons/ci";

const Products = ({ AddToCart }) => {
  const [product, setProduct] = useState([]);
  const [laptops, setlaptop] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [mensProducts, setMensProducts] = useState([]);

  const mobiledata = async () => {
    const res = await fetch("https://fakestoreapi.in/api/products/category?type=mobile&sort=desc")
    const data = await res.json();
    setProduct(data.products);
    // console.table(data.products);

  }

  const laptopdata = async () => {
    const res = await fetch("https://fakestoreapi.in/api/products/category?type=laptop&sort=desc")
    const data = await res.json();
    setlaptop(data.products);
    // console.table(data.products);
  }
  const allproducts = async () => {
    const res = await fetch("https://dummyjson.com/products")
    const data = await res.json();
    setAllProducts(data.products);
    // console.table(data.products);
  }
  const mens = async () => {
    const res = await fetch("https://dummyjson.com/products/category/mens-shirts")
    const data = await res.json();
    setMensProducts(data.products);
    // console.table(data.products);
  }

  // filtering the products and categories

  const [categories, setCategories] = useState([]);
  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products/categories")
      console.table(res);
    } catch (error) {
      console.error(error);
    }
  };



  useEffect(() => {
    // Replace with your API endpoint
    mobiledata();
    laptopdata();
    allproducts();
    mens();
    fetchProducts();
  }, []);

  // search container or sections


  const [searchproduct, setSearchproduct] = useState("");

  const handleSearchProduct = (e) => {
    setSearchproduct(e.target.value);
    console.log(e.target.value);
  };

  const searchitem = () => {
    const filteredProducts = allProducts.filter((product) =>
      product.title.toLowerCase().includes(searchproduct.toLowerCase())
    );
    setProduct(filteredProducts);
  }

  return (
    <>
      <div className="w-full mt-20 flex justify-center items-center flex-wrap mb-10 h-96 " style={{backgroundImage: `url(https://img.freepik.com/premium-photo/shopping-online-by-smartphone-application_220701-22.jpg?w=996)`, backgroundPosition: 'top 15% right 0', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
        <input type="text"
          placeholder="search product"
          className="border-2 border-white outline-none rounded  px-3 py-3 w-2/3 bg-transparent text-white text-2xl"
          value={searchproduct}
          onChange={handleSearchProduct} />
        <button className="border-2 border-white outline-none rounded text-white text-5xl px-3 py-3.5 " onClick={searchitem}><CiSearch size={25} /></button>
      </div>

      <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">


        {product.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg hover:shadow-gray-400 overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={product.image}
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
        {laptops.map((laptop) => (
          <div
            key={laptop.id}
            className="bg-white shadow-md rounded-lg hover:shadow-gray-400 overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={laptop.image}
              alt={laptop.title}
              className="w-4/5 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{laptop.brand}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {laptop.title}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-green-600 font-bold">${laptop.price}</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={() => AddToCart(laptop)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
        {allProducts.map((laptop) => (
          <div
            key={laptop.id}
            className="bg-white shadow-md rounded-lg hover:shadow-gray-400 overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={laptop.thumbnail}
              alt={laptop.title}
              className="w-4/5 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{laptop.brand}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {laptop.title}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-green-600 font-bold">${laptop.price}</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={() => AddToCart(laptop)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
        {mensProducts.map((laptop) => (
          <div
            key={laptop.id}
            className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={laptop.thumbnail}
              alt={laptop.title}
              className="w-4/5 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{laptop.brand}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {laptop.title}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-green-600 font-bold">${laptop.price}</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </>
  );
};

export default Products;
