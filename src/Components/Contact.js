import { useState } from "react";
import "../Style/contact.css";

const Contact = () => {


    const[search1,setSearch1]=useState("");
    const[search2,setSearch2]=useState("");
    const[search3,setSearch3]=useState("");

  return (
    <div className="contact">
      <h1 className="heading"> Fill the form </h1>
      <div className="form">
        <div className="first">
          <h3>First name</h3>
          <input type="text" 
          className="input" 
          placeholder="Name..." 
          value={search1}
          
          onChange={(e)=>{
            setSearch1(e.target.value);
          }}

          >

          </input>
        </div>
        <div className="second">
          <h3>last name</h3>
          <input type="text" 
          className="input" 
          placeholder="last name.." 
          value={search2}
          
          onChange={(e)=>{
            setSearch2(e.target.value);
          }}
          >

          </input>
        </div>
        <div className="third">
          <h3>email*</h3>
          <input type="email" 
          className="input" 
          placeholder="xyz@gmail.com" 
          value={search3}
          
          onChange={(e)=>{
            setSearch3(e.target.value);
          }}
          >

          </input>
        </div>
      </div>
      <div className="text">
        <label for="story">Comment :</label>

        <textarea id="story" name="story" rows="5" cols="33">
          Amazing website . it helped me a lot......!!
        </textarea>
      </div>
      <button className="button-55" >Submit</button>
    </div>
  );
};

export default Contact;
