import React, {useContext} from 'react'
import { ProductContext } from '../GlobalContext'
import "../styles/Womens.css";

function Womens() {
  const { products } = useContext(ProductContext);
  const {loading} = useContext(ProductContext);
  const womensProducts = []
  
  products.map(prods => {
    if(prods.category === `women's clothing`){
      womensProducts.push(prods);
    }
  })

  console.log(loading);
  console.log(products);
  console.log(womensProducts);
  

  if(loading){
    return(
      <h1>Loading....</h1>
    )
  } else {
    return (
      <div className='Womens-portion'>
        <div className='products'>
          {womensProducts.map(womenProduct => (
            <div className='product-card'>
              <img className='product-image' src={womenProduct.image} alt={womenProduct.title}/>
              <div className='product-detail'>
                <p className='product-name'>{womenProduct.title}</p>
                <p className='product-price'>${womenProduct.price}</p>
              </div>
          </div>
          ))}
  
        </div>
      </div>
    )
  }
}

export default Womens;