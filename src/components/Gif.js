import React from 'react';

import './Gif.css';



const Gif = props =>  {

    return (

      <li>
      	<img className="img-style" src={props.url}  alt="" />
      </li>

    );
}

export default Gif;