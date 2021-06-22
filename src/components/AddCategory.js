import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory= ({setCategories}) =>{

    const [inputValue, setImputValue]= useState('');

   const handleInputChange= (e)=>{
       //console.log(e.target.value);
       setImputValue(e.target.value)
   }

   
   const handleSubmit= (e) =>{
        e.preventDefault();
       
        if( inputValue.trim().length > 0){
            setCategories(cats =>[inputValue,...cats]);
            setImputValue('');

        }
        
   }
    return(
        <form onSubmit={ handleSubmit }>
    
      <input 
      type="text"
      value={ inputValue }
      onChange= { handleInputChange }
      />
        </ form>
    );
}


AddCategory.propTypes= {
    setCategories: PropTypes.func.isRequired
}