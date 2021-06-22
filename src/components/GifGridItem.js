import React from 'react';

const GidGridItem= ({id, title, url}) => {
 
    //console.log(id,title,url)

    return (
        <div className= 'card animate__animated animate__flipInX'>
           <img src={ url } alt={title} />
           <p>{ title }</p>
        </div>
    )
}

export default GidGridItem;