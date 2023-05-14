import React from 'react'
import "../Style/shimmer.css"

const Shimmer=()=>{
  return (
    <div className='shimmer'>
      {Array(20).fill("").map((e,index)=>(
        <div className='shimmer-card' key={index}> </div>
      ))}
    </div>
  )
}

export default Shimmer;