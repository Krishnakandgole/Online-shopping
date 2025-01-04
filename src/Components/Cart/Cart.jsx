import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

function Cart({ carts, handleInc, handleDec, handleremove, tatolCost }) {
    const [showMessage, setShowMessage] = useState(false);

    const handleClick = () => {
        if (tatolCost === "") {
            alert('Please add your items')
        } else {
            setShowMessage(true);
            setTimeout(() => setShowMessage(false), 3000);
        }
        // Hide the message after 3 seconds
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row shadow-md my-10">
                <div className="w-full lg:w-3/4 bg-white px-6 sm:px-8 py-8">
                    <div className="flex justify-between border-b pb-4">
                        <h1 className="font-semibold text-xl sm:text-2xl">Shopping Cart</h1>
                        <h2 className="font-semibold text-xl sm:text-2xl">{carts.length} Items</h2>
                    </div>
                    <div className="hidden sm:flex mt-8 mb-5">
                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Quantity</h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Price</h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Total</h3>
                    </div>

                    {carts.map((cartItem, index) => (
                        <div className="flex flex-col sm:flex-row items-center hover:bg-gray-100 -mx-4 px-4 py-4" key={cartItem.id}>
                            <div className="flex w-full sm:w-2/5">
                                <div className="w-20">
                                    <img className="h-20 sm:h-24" src={cartItem.image} alt="" />
                                </div>
                                <div className="flex flex-col justify-between ml-4 flex-grow">
                                    <span className="font-bold text-sm">{cartItem.title}</span>
                                    <span className="text-red-500 text-xs">{cartItem.brand}</span>
                                    <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs" onClick={() => handleremove(cartItem.id)}>Remove</a>
                                </div>
                            </div>
                            <div className="flex justify-center w-full sm:w-1/5 mt-2 sm:mt-0">
                                <button className='p-2' onClick={() => handleDec(cartItem.id)}>-</button>
                                <button className='px-3 py-2'>{cartItem.quentity}</button>
                                <button onClick={() => handleInc(cartItem.id)} className='p-2'>+</button>
                            </div>
                            <span className="text-center w-full sm:w-1/5 font-semibold text-sm mt-2 sm:mt-0">${cartItem.price}</span>
                            <span className="text-center w-full sm:w-1/5 font-semibold text-sm mt-2 sm:mt-0">${cartItem.price * cartItem.quentity}</span>
                        </div>
                    ))}

                    <NavLink to='/product'className=' p-2  text-black' >
                    <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                        Continue Shopping
                    </NavLink>
                </div>

                <div id="summary" className="w-full lg:w-1/4 px-6 sm:px-8 py-8">
                    <h1 className="font-semibold text-xl sm:text-2xl border-b pb-4">Order Summary</h1>
                    <div className="flex justify-between mt-8 mb-5">
                        <span className="font-semibold text-sm uppercase">Items {carts.length}</span>
                        <span className="font-semibold text-sm">{tatolCost()}$</span>
                    </div>
                    <div>
                        <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                        <select className="block p-2 text-gray-600 w-full text-sm">
                            <option>Standard shipping - $10.00</option>
                        </select>
                    </div>
                    <div className="py-8">
                        <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                        <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" />
                    </div>
                    <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
                    <div className="border-t mt-8">
                        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                            <span>Total cost</span>
                            <span>${tatolCost()}</span>
                        </div>
                        <div className="flex flex-col items-center justify-center bg-gray-100">
                            <button
                                onClick={handleClick}
                                className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition"
                            >
                                Payment
                            </button>
                            {showMessage && (
                                <div
                                    className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg shadow-md transition duration-300 ease-in-out"
                                >
                                    <p>🎉 Success! Your action was completed successfully.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart