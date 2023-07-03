import React from 'react'
import { IMG_CDN_URL } from './constant';
import "../Style/restaurantdetailcard.css";

const RestaurantDetailCard=({
    imageId,
    name,
    description,
    category,
    inStock,
    price,
    avgRating,
  })=>{
    console.log()
  return (
    <div className='card-menu-detail'>
    
    <div className='card-menu-detail-info'>
       <h2>{name}</h2>
       {/* <h4>{category}</h4> */}
       <h4>{description}</h4>
       {/* <h4>stock - {inStock}</h4> */}
       {/* <h4>{avgRating}</h4> */}
       <h4>{price}</h4>
      </div>

      <img 
      src={IMG_CDN_URL+imageId}
      alt="food-img"
      />
    </div>
  )
}

export default RestaurantDetailCard;