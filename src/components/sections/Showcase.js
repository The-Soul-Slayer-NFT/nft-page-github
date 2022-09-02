import React, { useRef } from 'react'
import styled, { keyframes } from 'styled-components'

import img0 from '../../assets/Nfts/1.png';
import img1 from '../../assets/Nfts/2.png';
import img2 from '../../assets/Nfts/3.png';
import img3 from '../../assets/Nfts/4.png';
import img4 from '../../assets/Nfts/5.png';
import img5 from '../../assets/Nfts/6.png';
import img6 from '../../assets/Nfts/7.png';
import img7 from '../../assets/Nfts/8.png';
import img8 from '../../assets/Nfts/9.png';
import img9 from '../../assets/Nfts/10.png';
import img10 from '../../assets/Nfts/11.png';
import img11 from '../../assets/Nfts/20.png';
import img12 from '../../assets/Nfts/24.png';
import img13 from '../../assets/Nfts/69.png';
import img14 from '../../assets/Nfts/70.png';
import img15 from '../../assets/Nfts/73.png';
import img16 from '../../assets/Nfts/78.png';
import img17 from '../../assets/Nfts/87.png';

import ETH from '../../assets/icons8-ethereum-48.png';

const Section = styled.section`
min-height: 50vh;
width: 100vw;
background-color: ${props => props.theme.text};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
overflow: hidden;

@media (max-width: 30em) {
  animation-duration: 60s;
}

`

const move = keyframes`
0%{ transform: translateX(100%) };
100%{ transform: translateX(-100%) }

`

const Row = styled.div`
white-space: nowrap;
box-sizing:content-box;
margin: 2rem 0;
display: flex;

animation: ${move} 80s linear infinite ${props => props.direction}   ;


`
const ImgContainer = styled.div`
width: 15rem;
margin: 0 1rem;
padding: 0.2rem;
background-color:${props => props.theme.body};

border-radius: 20px;
cursor: pointer;

@media (max-width: 48em) {
  width: 12rem;
}
@media (max-width: 30em) {
  width: 10rem;
}

img{
  width: 100%;
  height: auto;
  border-radius:  20px 20px 0 0;
}
`

const Details = styled.div`
display: flex;
justify-content: space-between;
padding: 0.8rem 1.5rem;
background-color: ${props => props.theme.text};
border: 2px solid ${props => `rgba(${props.theme.bodyRgba}),0.5`};

border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;

span{
  font-size: ${props => props.theme.fontsm};
  color:${props => `rgba(${props.theme.bodyRgba},0.5)`};
  font-weight:500;
  line-height: 1.5rem;
}

h1{
  font-size: ${props => props.theme.fontmd};
  color: ${props => props.theme.body};
  font-weight:500;

  @media (max-width: 30em) {
    font-size: ${props => props.theme.fontsm};
  }

}

`

const Price = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;

img{
  width: 1rem;
  height: auto;
}
`

const NftItem = ({img, number=0, price=0, passRef}) => {

let play = (e) => {
  passRef.current.style.animationPlayStore = 'running';
}
let pause = (e) => {
  passRef.current.style.animationPlayStore = 'paused';
}

  return(
    <ImgContainer onMouseOver={e => pause(e) } onMouseOut={e => play(e) } >
      <img src={img} alt="Duduze" />
      <Details>
        <div>
          <span>Duduze</span> <br />
          <h1>#{number}</h1>
        </div>
        <div>
          <span>Price</span>
          <Price>
          <img src={ETH} alt="ETH" />
          <h1>{Number(price).toFixed(1)}</h1>
          </Price>
        </div>
      </Details>
    </ImgContainer>
  )
}

const Showcase = () => {

  const RowRef = useRef(null);

  return (
    <Section id="showcase">
    <Row direction="none" ref={RowRef}>
      <NftItem img={img0} number={0} price={0.1} passRef = {RowRef} />
      <NftItem img={img1} number={1} price={0.1} passRef = {RowRef} />
      <NftItem img={img17} number={10} price={0.1} passRef = {RowRef} />
      <NftItem img={img2} number={2} price={0.1} passRef = {RowRef} />
      <NftItem img={img3} number={3} price={0.1} passRef = {RowRef} />
      <NftItem img={img11} number={10} price={0.1} passRef = {RowRef} />
      <NftItem img={img4} number={4} price={0.1} passRef = {RowRef} />
      <NftItem img={img5} number={5} price={0.1} passRef = {RowRef} />
      <NftItem img={img13} number={10} price={0.1} passRef = {RowRef} />
      <NftItem img={img6} number={6} price={0.1} passRef = {RowRef} />
      <NftItem img={img7} number={7} price={0.2} passRef = {RowRef} />
      <NftItem img={img8} number={8} price={0.1} passRef = {RowRef} />
      <NftItem img={img14} number={10} price={0.1} passRef = {RowRef} />
      <NftItem img={img9} number={9} price={0.1} passRef = {RowRef} />
      <NftItem img={img15} number={10} price={0.1} passRef = {RowRef} />
      <NftItem img={img10} number={10} price={0.1} passRef = {RowRef} />
      <NftItem img={img12} number={10} price={0.1} passRef = {RowRef} />
      <NftItem img={img16} number={10} price={0.1} passRef = {RowRef} />

    </Row>
    </Section>
  )
}

export default Showcase