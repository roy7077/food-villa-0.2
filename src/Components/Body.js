import React from 'react'
import { useState ,useEffect} from 'react';
import { IMG_CDN_URL } from './constant';
import data from "./constant"
import CardList from './CardList';
import {API} from './constant';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import "../Style/body.css"
import '../App.css';

function filterData(searchText, restaurants) {
  //console.log(restaurants)
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.data?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}



const Body=()=>{

    const[SearchText,SetSearchText]=useState("Search for food");
    const[FoodData,SetFoodData]=useState([]);
    const[AllRestaurant,SetAllRestaurant]=useState([])
    //console.log("sagar");

    useEffect(()=>{
      getRestaurant();
    },[])

    async function getRestaurant(){
      const datas=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.9002695&lng=75.8581159&offset=31&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING");
      const json=await datas.json();

      //console.log(json?.data?.cards);
      SetFoodData(json?.data?.cards)
      SetAllRestaurant(json?.data?.cards)
    }

    if(!AllRestaurant)
    return null;

    if(filterData.length===0)
    return (<h1>Not found</h1>);

  return AllRestaurant.length===0?(<Shimmer/>):(
    <div>
        <input 
        type='text'
        className='search'
        placeholder='Search for food'
        value={SearchText}
        //to make the change in the value
        onChange={
            (e)=>{
                SetSearchText(e.target.value);
            }
        }

        //to make Searchtext so that user can type his own rest. insivible
        onClick={()=>{
          SetSearchText("");
        }}
        />
        <button
        onClick={()=>{
          const filter=filterData(SearchText,AllRestaurant);
          //console.log(filter);
          SetFoodData(filter);
        }}
        > 
        Search
        </button>

      <div className="card-list">
        
        {FoodData.map((restaurant) => {
            return (
              
              <Link to={"/resturant/"+restaurant.data.data.id} key={restaurant.data.data.id} className='link'>
              <CardList  {...restaurant.data.data}/>
              </Link>
            
              
            );
          })}
      </div>

    </div>
  )
}

export default Body;
