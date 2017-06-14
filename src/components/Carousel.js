import React from 'react';
import styled from 'styled-components';

const ScrollItem=styled.div`
width: 5%;
height: 10%;
border: 2px solid black;
border-radius: 10px;
align-self: across-start;
margin: 5px;
`;

const CarouselItem = ()=> (
    <div className="CarouselItem"></div>
);

export default ({nextClickHandler:nxt, backClickHandler:bck})=> {
    return(
        <div className="Carousel">
            <ScrollItem onClick={bck} />
            <CarouselItem/>
            <CarouselItem/>
            <CarouselItem/>
            <ScrollItem onClick={nxt} />
        </div>
    )
}
