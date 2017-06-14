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

const CarouselItem = (data)=> {

    if (data.f){
      return(<div className="CarouselItem">
        <p>{data.f.name}</p>
        <p>{data.f.summary}</p>
        <p>{data.f.image.medium}</p>
      </div>)
    }
    return(<div className="CarouselItem">
      <p></p>
    </div>)
};

export default ({nextClickHandler:nxt, backClickHandler:bck , data:data})=> {
  console.log(data);
    return(
        <div className="Carousel">
            <ScrollItem onClick={bck} />
            <CarouselItem f={(data[0])} />
            <CarouselItem f={(data[1])}/>
            <CarouselItem f={(data[2])}/>
            <ScrollItem onClick={nxt} />
        </div>
    )
}
