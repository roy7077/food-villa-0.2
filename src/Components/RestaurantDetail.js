import { useEffect, useState } from "react";
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
  const param = useParams(); 
  const {id}=param;

  useEffect(()=>{
    getrestaurantInfo();
  },[])

  //console.log(id);
  async function getrestaurantInfo(){

    const data= await fetch("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.9002695&lng=75.8581159&restaurantId="+id+"&submitAction=ENTER");
    const json=await data.json();
    SetRestaurant(json.data);
    console.log(json.data);
  }
   return(!restaurant)?<Shimmer/>:(
    // <div>
    //   <h1>restaurant id: {id}</h1>
    //   <h1>{restaurant.name}</h1>
    //   <img src={IMG_CDN_URL+restaurant.cloudinaryImageId}/>
    //   <h1>{restaurant.area}</h1>
    //   <h1>{restaurant.city}</h1>
    //   <h1>{restaurant.avgRating} stars</h1>
    //   <h1>{restaurant.costForTwoMsg}</h1>
    // </div>
   
      
       
       
        <div className="menu" key={restaurant.cards[0].card.card.info.id}>
          <div className="image">
          <img src={IMG_CDN_URL+restaurant.cards[0].card.card.info.cloudinaryImageId}/>
          </div>
          <div className="details">
          <h1>{restaurant.cards[0].card.card.info.name}</h1>
         <h1>{restaurant.cards[0].card.card.info.area}</h1>
         <h1>{restaurant.cards[0].card.card.info.city}</h1>
         <h1>{restaurant.cards[0].card.card.info.avgRating} stars</h1>
         <h1>{restaurant.cards[0].card.card.info.costForTwo}</h1>
          </div>
          
        </div> 
     
   )
};

export default RestaurantDetail;