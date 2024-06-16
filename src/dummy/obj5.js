import React from 'react'

const App = () => {
  const products = [
    {
      "id": 59,
      "title": "Spring and summershoes",
      "price": 20,
      "quantity": 3,
      "total": 60,
      "discountPercentage": 8.71,
      "discountedPrice": 55,
      "thumbnail": "https://cdn.dummyjson.com/product-images/59/thumbnail.jpg"
    },
    {
      "id": 88,
      "title": "TC Reusable Silicone Magic Washing Gloves",
      "price": 29,
      "quantity": 2,
      "total": 58,
      "discountPercentage": 3.19,
      "discountedPrice": 56,
      "thumbnail": "https://cdn.dummyjson.com/product-images/88/thumbnail.jpg"
    }
  ];
  return (
    <div className="p-8 flex gap-2">
      {products.map((p, i) => {
        return <div key={i} className="shadow-lg p-3 bg-orange-200 mb-3 hover:scale-105">
          <h1>{p.id}</h1>
          <h2>{p.discountedPrice}</h2>
          <img src={p.thumbnail} alt="" />

        </div>
      })}
    </div>
  )
}

export default App
