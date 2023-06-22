import React from 'react'
import { IMG_CDN_URL } from './constant';
import "../Style/cardlist.css"
import '../App.css';

const CardList = ({
    cloudinaryImageId,
    name,
    cuisines,
    area,
    lastMileTravelString,
    costForTwoString,
    avgRating,
  })=>{
  return (
    <div className='card'>
    
      <img 
      src={IMG_CDN_URL+cloudinaryImageId}
      alt="food-img"
      />
      <div className='details'>
       <h2>{name}</h2>
       <h4>{area}</h4>
       <h4>{cuisines}</h4>
       <h4>{lastMileTravelString}</h4>
       <h4>{avgRating}</h4>
       <h4>{costForTwoString}</h4>
      </div>
    </div>
  )
}

export default CardList;
