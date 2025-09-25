import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SingleProduct from './SingleProduct';

function App() {

  // After calling the Api We have to store the Data = It is useSate that stor the data 

  const[product, setProduct]=useState([]);
  const[cart, setCart] = useState([]);
  // storing the new data of the handle cart 
  

  // call the Api using the useEffect
  useEffect(()=>{
    fetch("./fakeData.json")
    .then((res)=> res.json())
    .then((data)=>{
      setProduct(data);
    })
  },[])
  // console.log(product);
 

  // This handleCart is for adding the data 
  const handleCart = (p) => {
    const isExist = cart.find(item => item.id == p.id);
    if(!isExist){
      setCart([...cart,p])
    }
    else{
      alert("already exist")
    }
  }
  console.log(cart);

  // This function is for Delete the data or remove for the help of (find)
  
  
  return (
    <>
        <div className='main-container'>
         <div className="cards-container">
          {
            product.map(item =><SingleProduct product={item} handleCart={handleCart} ></SingleProduct>)
          }
         </div>
         {/*  */}
         <div className="cards-container">
            <h1>This is cart</h1>
            <div className="cart-title">
              <h5>name</h5>
              <h5>Price</h5>
            </div>

            {/*  */}
            <div>
                {cart.map((item)=>(
                  <div className='cart-info'>
                    <h5>{item.title.slice(0,10)}</h5>
                    <h5>{item.price} $</h5>
                    <button>Delete</button>
                  </div>
                ))}
            </div>

         </div>
        </div>
    </>
  )
}

export default App
