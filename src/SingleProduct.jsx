import React from 'react';

const SingleProduct = ({product}) => {
   console.log(product)
   return (
      <div>
           <div className='card'>
            <img className='card-img' src={product.image} alt="" />
            <h1>{product.title.slice(0, 10)}</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, dolorum modi. Pariatur quas nemo provident odio, facere harum molestiae? Voluptatibus at obcaecati voluptate blanditiis quibusdam quam nemo repudiandae molestias perspiciatis!</p>
            <div className='card-footer'>
              <h1>520 $</h1>
              <button className='add-btn'>Add To Cart</button>
            </div>
           </div>
      </div>
   );
};

export default SingleProduct;