import React, {useContext} from 'react'
import { ProductContext } from '../GlobalContext'

function Mens() {
  const products = useContext(ProductContext);

  console.log(products);

  return (
    <div>

    </div>
  )
}

export default Mens