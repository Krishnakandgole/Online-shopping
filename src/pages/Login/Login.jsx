import React, {useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../FirebaseAuth/FirebaseAuth';

function Login() {
    const [Usersignup, setUsersignup] = useState({ password: "", email: "",});
    const navigate = useNavigate()

    const handlecahange = (e) => {
        setUsersignup({...Usersignup, [e.target.id]: e.target.value });
        console.log(e.target.value);
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!Usersignup.password && !Usersignup.email){
            alert("All fields are required");
            return;
        }else{
            signInWithEmailAndPassword(auth, Usersignup.email, Usersignup.password)
            .then( (res) => {        
                navigate('/')
            })
            .catch((err) => console.error(err));
        }
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
            <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Login</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
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
                            type="password"
                            id="password"
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
                    <NavLink to='/signup'  className='hover:text-blue-800'>
                    SignUp
                    </NavLink>
                </p>
            </div>
        </div>
  )
}

export default Login