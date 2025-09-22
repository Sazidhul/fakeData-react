import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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
  console.log(product);

  
  return (
    <>
        <div className='main-container'>
         <div className="cards-container">
           <div className='card'>
            <img className='card-img' src="https://zpacks.com/cdn/shop/files/Zpacks-TrailCoolMerinoWoolT-Shirt-01_2048x.jpg?v=1686743695" alt="" />
            <h1>Tesr test</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, dolorum modi. Pariatur quas nemo provident odio, facere harum molestiae? Voluptatibus at obcaecati voluptate blanditiis quibusdam quam nemo repudiandae molestias perspiciatis!</p>
            <div className='card-footer'>
              <h1>520 $</h1>
              <button className='add-btn'>Add To Cart</button>
            </div>
           </div>

           <div className="card">
            <img src="" alt="" />
           </div>
         </div>
         <div className="cards-container">
            <h1>This is cart</h1>
         </div>
        </div>
    </>
  )
}

export default App
