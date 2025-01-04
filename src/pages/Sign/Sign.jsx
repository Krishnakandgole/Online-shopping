import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../../FirebaseAuth/FirebaseAuth';

function Sign() {
    const [Usersignup, setUsersignup] = useState({ username: "", password: "", email: "", });
    const navigate = useNavigate()

    const handlecahange = (e) => {
        setUsersignup({ ...Usersignup, [e.target.name]: e.target.value });
        // console.log(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!Usersignup.username && !Usersignup.password && !Usersignup.email) {
            alert("All fields are required");
            // return;
        } else {
            createUserWithEmailAndPassword(auth, Usersignup.email, Usersignup.password)
                .then(async (res) => {
                    // console.log(res)
                    const userdta = res.user;
                    await updateProfile(userdta, {
                        displayName: Usersignup.name
                    })
                    navigate('/')
                })
                .catch((err) => console.error(err));
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
            <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Sign Up</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            User Name
                        </label>
                        <input
                            autoComplete='off'
                            type="text"
                            name="username"
                            value={Usersignup.username}
                            placeholder="Enter your username"
                            onChange={handlecahange}
                            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            autoComplete='off'
                            type="email"
                            name="email"
                            value={Usersignup.email}
                            placeholder="Enter your email"
                            onChange={handlecahange}
                            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            autoComplete='off'
                            type="password"
                            name="password"
                            value={Usersignup.password}
                            placeholder="Enter your password"
                            onChange={handlecahange}
                            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
                    >
                        Login
                    </button>
                </form>
                <p className="text-sm text-center text-gray-600 mt-4">
                    Already have an account?{' '}
                    <NavLink to='/login' className='hover:text-blue-800'>
                        Login
                    </NavLink>
                </p>
            </div>
        </div>
    )
}

export default Sign;