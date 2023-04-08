import React from 'react'
import { useState } from 'react';
import { IMG_CDN_URL } from './constant';
import data from "./constant"
import CardList from './CardList';
import "../Style/body.css"
import '../App.css';

const Body=()=>{

    const[SearchText,SetSearchText]=useState("Search for food");
    //console.log("sagar");
  return (
    <div>
        <input 
        type='text'
        className='search'
        placeholder='Search for food'
        value={SearchText}
        onChange={
            (e)=>{
                SetSearchText(e.target.value);
            }
        }
        />
        <button> 
        Search
        </button>

        <div className="card-list">
      {data.map((restaurant) => {
          return (
            <>
            {/* {console.log(restaurants)} */}
            <CardList key={restaurant.data.id} {...restaurant.data.data}/>
            </>
            
          );
        })}
      </div>

    </div>
  )
}

export default Body;
