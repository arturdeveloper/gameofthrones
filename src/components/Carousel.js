import React from 'react';
import styled from 'styled-components';

const ScrollItem=styled.img`
width: height;
height: 10%;
border: 2px solid black;
border-radius: 10px;
align-self: across-start;
margin: 5px;
transform: ${props=>props.reverse ? 'rotate(180deg)' : 'rotate(0deg)'}`;

const Image=styled.img`
width: 90%;
height: 30%;
border: 2px solid black;
border-top-left-radius: 2em;
border-top-right-radius: 2em;
justify-content: center;
`;

const Summary=styled.div`
display: flex;
justify-content: center;
width: 90%;
height: 60%;
border: 2px solid black;
overflow: hidden;
border-bottom-left-radius: 2em;
border-bottom-right-radius: 2em;
color: yellow;
background-color: black;
`;


const someTxt = 'It appears you have lost internet connection and we couldn\'t retrieve data. This is the placeholder where goes the description of the episode';
const defaultImg = 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png';
const arrowImg = "https://marketplace.canva.com/MAB5nRqcwA4/1/thumbnail/canva-arrow-pointing-right-inside-circle-icon-MAB5nRqcwA4.png"

const CarouselItem = (data)=> {

    if (data.f){
        let summary = data.f.summary.replace(/<p>/g, '').replace('</p>', '');
      return(
        <div className="CarouselItem">

            <Image src={data.f.image.medium} />
            <Summary>{summary}</Summary>
        </div>
        )
    }
    return(
        <div className="CarouselItem">
            <Image src={defaultImg} />
            <Summary>{someTxt}</Summary>
        </div>
    )
};

export default ({nextClickHandler:nxt, backClickHandler:bck , data:data})=> {
  console.log(data);
    return(
        <div className="Carousel">
            <ScrollItem onClick={bck} reverse={true} degree={180} src={arrowImg}/>
            <CarouselItem f={(data[0])} />
            <CarouselItem f={(data[1])}/>
            <CarouselItem f={(data[2])}/>
            <ScrollItem onClick={nxt} reverse={false} degree={180} src={arrowImg}/>
        </div>
    )
}
