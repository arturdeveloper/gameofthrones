import React from 'react';

const ScrollItem = ()=> (
        <div className="ScrollItem"></div>
    );

const CarouselItem = ()=> (
    <div className="CarouselItem"></div>
);

export default ()=> {
    return(
        <div className="Carousel">
            <ScrollItem />
            <CarouselItem/>
            <CarouselItem/>
            <CarouselItem/>
            <ScrollItem />
        </div>
    )
}