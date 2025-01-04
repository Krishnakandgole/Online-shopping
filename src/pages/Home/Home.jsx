import React, { useEffect, useState } from 'react'
import bg1 from '../../assets/b3.png'
import bg2 from '../../assets/b9.png'
import bg3 from '../../assets/b8.png'

function Home({ AddToCart }) {

  //slider animation sections
  const images = [
    "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/c4a4c37d9fa12546.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/be168a4f35799055.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/b1c0f73e61ccfaf5.jpg?q=20",
  ];
  const banners = [
    {
      bgImage: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/c3503833dc709c97.jpg?q=20", // Replace with your image URL
    },
    {
      bgImage: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/b4da7c47d23d62d4.png?q=20", // Replace with your image URL
    },
    {
      bgImage: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/b6ff817ce4adbd5e.jpg?q=20" // Replace with your image URL
    },
    {
      bgImage: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/300ea699a8cff81d.jpg?q=20" // Replace with your image URL
    },
    {
      bgImage: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/9bbc51796eccf281.jpg?q=20" // Replace with your image URL
    },
    {
      bgImage: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/c582d65a788925a9.jpg?q=20" // Replace with your image URL
    }
  ];

const center = [
  {
    bgImage: "https://rukminim1.flixcart.com/fk-p-flap/520/280/image/0f864abf6acb4597.jpg?q=20"
  },
  {
    bgImage: "https://rukminim1.flixcart.com/fk-p-flap/520/280/image/a334194e72302e23.jpg?q=20"
  },
  {
    bgImage: "https://rukminim1.flixcart.com/fk-p-flap/520/280/image/d372e92b4700088a.png?q=20"
  },
  {
    bgImage: "https://rukminim1.flixcart.com/fk-p-flap/520/280/image/744fd904aaf0e3b0.jpg?q=20"
  },
  {
    bgImage: "https://rukminim1.flixcart.com/fk-p-flap/520/280/image/2b1dd09e5e7b7623.jpg?q=20"
  },
  {
    bgImage: "https://rukminim1.flixcart.com/fk-p-flap/520/280/image/dd63063fdd6fb9d8.jpg?q=20"
  },
  {
    bgImage: "https://rukminim1.flixcart.com/fk-p-flap/520/280/image/717bfe945d58da1d.jpg?q=20"
  },
  {
    bgImage: "https://rukminim1.flixcart.com/fk-p-flap/520/280/image/b43feaece8d80297.jpg?q=20"
  },
  {
    bgImage: "https://rukminim1.flixcart.com/fk-p-flap/520/280/image/7033c54e4ab2f6b6.jpg?q=20"
  }
]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const [currentIndex, setCurrentIndex] = useState(0);


  // products section

  const [products, setProducts] = useState([]);
  // const [allproduct, setallproduct] = useState([]);

  const mobiledata = async () => {
    const res = await fetch("https://fakestoreapi.in/api/products")
    const data = await res.json();
    setProducts(data.products);
    // console.table(data.products);

  }

  useEffect(() => {
    // Replace with your API endpoint
    mobiledata();

  }, []);

  return (
    <div className='w-full mt-20'>
      <section className='w-full'>
        <div className="relative w-full max-w-7xl mx-auto overflow-hidden  shadow-lg">
          <div
            className="flex transition-transform duration-700"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full flex-shrink-0"
              />
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${currentIndex === index ? "bg-white" : "bg-gray-500"
                  }`}
              />
            ))}
          </div>


        </div>
      </section>



      <section>
        <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md hover:shadow-gray-400 rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full object-cover" style={{height: "50vh"}}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.brand}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
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
      </section>


      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          {banners.map((banner, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden h-60 md:h-80"
              style={{ backgroundImage: `url(${banner.bgImage})`, backgroundSize: 'cover', backgroundPosition: 'top 0% left 15%', backgroundRepeat: "no-repeat" }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white p-4">
                <h2 className="text-xl md:text-2xl font-bold mb-2">{banner.title}</h2>
                <p className="text-sm md:text-base text-center">{banner.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/350/image/8f0bb7dd1533286d.jpg?q=20" alt="" />
      </section>

      <section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          {center.map((banner, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden h-60 md:h-80"
              style={{ backgroundImage: `url(${banner.bgImage})`, backgroundSize: 'cover', backgroundPosition: 'top 0% left 15%', backgroundRepeat: "no-repeat" }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white p-4">
                <h2 className="text-xl md:text-2xl font-bold mb-2">{banner.title}</h2>
                <p className="text-sm md:text-base text-center">{banner.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section>
        <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md hover:shadow-gray-400 rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full object-cover" style={{height: "50vh"}}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.brand}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
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
      </section>

    </div >
  )
}

export default Home