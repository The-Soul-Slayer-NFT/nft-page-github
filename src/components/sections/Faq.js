import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components';
import Accordion from '../Accordion';

const Section = styled.section`
min-height: 100vh;
height: auto;
width: 100vw;
background-color: ${props => props.theme.text};
position: relative;
color: ${(props) => props.theme.body};

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const Title = styled.h1`
font-size: ${(props) => props.theme.fontxxl};
text-transform: uppercase;
color: ${(props) => props.theme.body};

margin: 1rem auto;
border-bottom: 2px solid ${(props) => props.theme.body};
width: fit-content;

@media (max-width: 48em) {
  font-size: ${(props) => props.theme.fontxxl};
}

`;

const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: space-between;
align-content: center;

@media (max-width: 64em) {
  width: 80%;
}
@media (max-width: 48em) {
  width: 90%;
  flex-direction: column;

  &>*:last-child{
    &>*:last-child{

      margin-top: 0;

    }
  }
}

`

const Box = styled.div`
width: 45%;

@media (max-width: 64em) {
  width: 90%;
  align-self: center;
}

`

const Faq = () => {

const ref = useRef(null);
gsap.registerPlugin(ScrollTrigger);
useLayoutEffect(() => {
  
  let element = ref.current;

  ScrollTrigger.create({
    trigger: element,
    start: 'top top',
    end: 'bottom top',
    pin:true,
    pinSpacing:false,
    scrub:true,
    // markers:true,
  })

  return () => {
    ScrollTrigger.kill();
  };
}, [])

  return (
    <Section ref={ref} id="faq">
      <Title>FAQ</Title>
      <Container>
<Box>
  <Accordion title="What are Duduze Collection?" >
  Duduzes are small animals ready to defend your kingdoms, your lands and you against your enemies
  </Accordion>
  <Accordion title="Is there utility? A token? Metaverse? A Game?" >
  No. The Duduze Collection are NFT art and collectible, inspired by cryptopunks
  </Accordion>
  <Accordion title="What is the Metaverse?" >
  A metaverse is a network of 3D virtual worlds focused on social connection. In futurism and science fiction, it is often described as a hypothetical iteration of the Internet as a single, universal virtual world that is facilitated by the use of virtual and augmented reality headsets
  </Accordion>
</Box>
<Box>
<Accordion title="What chain is Duduze Collection on?" >
  Polygon Mainnet
  </Accordion>
  <Accordion title="What can I do with my Duduze?" >
  All Duduzes will be CC0, excluding the 1/1 pieces which will be determined individually by each artist
  </Accordion>
  <Accordion title="Where can i view my NFTs?" >
  Once minted or bought simply connect to your OpenSea account to view your NFTs
  </Accordion>
</Box>

      </Container>
    </Section>
  )
}

export default Faq