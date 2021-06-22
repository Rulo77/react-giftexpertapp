import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifts';
import GidGridItem from './GifGridItem';

export const GidGrid = ({category}) => {



    const {data:images, loading}= useFetchGifs(category);

    //console.log(data,loading);


    return (
       <>
       <h3 className= "animate__animated animate__flipInX"> { category} </h3>
        
        {loading && <p>Loading..</p> }
      
        <div className= 'card-grid'>
            {
              images.map( imagen => (<GidGridItem 
                key={imagen.id}
                {...imagen}
                /> 
               ) )
            }
           
        </div>
        </>
    )
}