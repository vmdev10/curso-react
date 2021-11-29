import './ProductsList.css'
import productsList from '../../data/Products'

import React from "react";

export default () => {
  const products = productsList.map((product, index) => {
    return (
      <tr key={product.id} className={index % 2 === 0 ? 'Par' : ''}>
        <td>{ product.id }</td>
        <td>{ product.name }</td>
        <td>{ product.price }</td>
      </tr>
    )
  })

  return (
    <div className="Table">
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Produto</td>
            <td>Preço</td>
          </tr>
        </thead>

        <tbody>
         { products }
        </tbody>
      </table>
    </div>
  )
}