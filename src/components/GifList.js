import React from 'react';
import Gif from "./Gif";
import NoGifs from './NoGifs';
import "./GifList.css"

const GifList = props => {

    const results = props.data;
    let gifs;
    if(results.length > 0){
        gifs = results.map( gif => <Gif url={ gif.images.fixed_height.url} key={gif.id} />
        );
    }else{
      gifs = <NoGifs />;
    }


    return (
        <div className="gif-container">
            <ul className="gif-list">
               {gifs}
            </ul>
        </div>
    );
}

export default GifList; 