import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SingleProduct from './SingleProduct';

function App() {

  // After calling the Api We have to store the Data = It is useSate that stor the data 

  const[product, setProduct]=useState([]);

  // call the Api using the useEffect
  useEffect(()=>{
    fetch("./fakeData.json")
    .then((res)=> res.json())
    .then((data)=>{
      setProduct(data);
    })
  },[])
  // console.log(product);

  
  return (
    <>
        <div className='main-container'>
         <div className="cards-container">
          {
            product.map(item =><SingleProduct product={item}></SingleProduct>)
          }
         </div>
         <div className="cards-container">
            <h1>This is cart</h1>
         </div>
        </div>
    </>
  )
}

export default App
