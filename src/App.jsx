import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Products, Trands, About, Contact, Login } from './pages/index'
import Cart from './Components/Cart/Cart'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Sign from './pages/Sign/Sign'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './FirebaseAuth/FirebaseAuth'


function App() {
  const [carts, setCart] = useState([])

  const AddToCart = (product) => {
  const fondcart =  carts.find((findItem) => findItem.id === product.id);

    if(fondcart){
      const updatecart = carts.map((item) =>(
        item.id === product.id? {...item, quentity: item.quentity + 1}: item
      ));

      setCart(updatecart);
    }else{

      setCart([...carts,{...product, quentity:1}]);
    }

  }

  const handleDec = (id) => {
    const remcart =  carts.map((item)=>(
     item.id === id? {...item, quentity: item.quentity - 1}: item
    ));
    setCart(remcart);
  }
  const handleInc = (id) => {
    const incart =  carts.map((item)=>(
     item.id === id? {...item, quentity: item.quentity + 1}: item
    ));
    setCart(incart);
  }

  const handleremove = (id) => {
    const remcart =  carts.filter((item)=>(
     item.id!== id
    ));
    setCart(remcart);
  }

const tatolCost = () => {
  const cost = carts.reduce((item, itemquentity) =>{
    return item + itemquentity.price * itemquentity.quentity
  }, 0)
  return cost;
}

// porfile login and information'
const [userName, setusername] = useState("");

useEffect(()=>{
  auth.onAuthStateChanged(( user)=>{
    if(user){
      setusername(user.displayName);
      console.log(user.displayName);
    }else{
      setusername('');
    }
})
}, [])

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home AddToCart={AddToCart} userName={userName} />} />
          <Route path='/cart' element={<Cart carts={carts} handleDec={handleDec} handleInc={handleInc}  handleremove={handleremove}  tatolCost={tatolCost}/> } />
          <Route path='/product' element={<Products AddToCart={AddToCart} />} />
          <Route path='/trands' element={<Trands AddToCart={AddToCart} />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/signup' element={<Sign />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  )
}

export default App
