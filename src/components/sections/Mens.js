import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { ProductContext } from '../GlobalContext'
import "../styles/Mens.css";

function Mens() {
  const { products } = useContext(ProductContext);
  const {loading} = useContext(ProductContext);
  const mensProducts = []
  
  products.map(prods => {
    if(prods.category === `men's clothing`){
      mensProducts.push(prods);
    }
  })

  console.log(loading);
  console.log(products);
  console.log(mensProducts);
  

  if(loading){
    return(
      <h1>Loading....</h1>
    )
  } else {
    return (
      <div className='Men-portion'>
        <div className='products'>
          {mensProducts.map(menProduct => (
            <Link to={`/mens/${menProduct.id}`}>
            <div className='product-card'>
              <img className='product-image' src={menProduct.image} alt={menProduct.title}/>
              <div className='product-detail'>
                <p className='product-name'>{menProduct.title}</p>
                <p className='product-price'>${menProduct.price}</p>
              </div>
            </div>
            </Link>
          ))}
  
        </div>
      </div>
    )
  }
}

export default Mens