import React from "react";
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GidGrid } from "./components/GifGrid";

const GifExpertApp= ()=>{
 
    
    const [categories, setCategories]= useState(['one-punch']);
    
    // const handleAdd=()=>{
    //    //setCategories([...categories, 'hunterXhunter']);
    //     setCategories(cats=>[...cats, 'HunterXHunter']);
    // }
  return (    
       <>
      <h1>GifExpertApp</h1>
      <AddCategory setCategories= { setCategories }  />
      <hr />

 
        <ol>
            { 
              categories.map( category=> <GidGrid category= {category} 
                key={category}
              />)
            }
        </ol>
      </>
  )
}

export default GifExpertApp;