import { useEffect, useState } from "react";
import RestaurantDetailCard from "./RestaurantDetailCard";
import { useParams } from "react-router-dom"; // import useParams for read id
import {
  swiggy_menu_api_URL,
  IMG_CDN_URL,
  ITEM_IMG_CDN_URL,
} from "./constant";
import Shimmer from "./Shimmer";
import '../Style/restaurantmenu.css';


const RestaurantDetail = () => {

  const[restaurant,SetRestaurant]=useState(null);
  const[mainRestaurant,SetmainRestaurant]=useState(null);
  const param = useParams(); 
  const {id}=param;

  useEffect(()=>{
    getrestaurantInfo();
  },[])

  //console.log(id);
  async function getrestaurantInfo(){

    const data= await fetch("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.9002695&lng=75.8581159&restaurantId="+id+"&submitAction=ENTER");
    const json=await data.json();
    SetmainRestaurant(json?.data?.cards[0]);
    SetRestaurant(json.data.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card.itemCards);
    console.log(json.data.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card.itemCards);
  }
   return(!restaurant)?<Shimmer/>:(
  
      <div className="menu-card">
        <div className="menu">
          <div className="details">
          <h1 className="heading">{mainRestaurant.card.card.info.name}</h1>
          <h1>{mainRestaurant.card.card.info.area}</h1>
          <h1>{mainRestaurant.card.card.info.city}</h1>
          </div>
          <div className="rating">
          <h1>{mainRestaurant.card.card.info.avgRating} stars</h1>
          <h1>{mainRestaurant.card.card.info.costForTwo}</h1>
          </div>
      </div> 
        {restaurant.map((datamenu) => {
            return (
              <RestaurantDetailCard  {...datamenu.card.info} key={datamenu.card.info.id}/> 
            );
          })}
       </div>
        
     
   )
};

export default RestaurantDetail;