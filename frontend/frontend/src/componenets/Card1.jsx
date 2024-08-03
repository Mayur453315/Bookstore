import React from 'react'

function Card1({ item }) {
    
  return (
    <>
    <div>
    <div className="card bg-cyan-900   shadow-xl text-white mt-10 hover:scale-105 duration-200">
  <figure>
    <img 
      src={item.image } c
      alt="books" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{item.category}</div>
      <div className="badge badge-outline">{item.price}</div>
      <button>Buy Now</button>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Card1


