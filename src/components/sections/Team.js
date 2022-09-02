import React from 'react'
import styled from 'styled-components';

import img17 from '../../assets/Nfts/87.png';
import img15 from '../../assets/Nfts/73.png';
import img8 from '../../assets/Nfts/9.png';

const Section = styled.section`
min-height: 75vh;
width: 100vw;
background-color: ${props => props.theme.body};
position: relative;
`

const Title = styled.h1`
font-size: ${(props) => props.theme.fontxxl};
text-transform: capitalize;
color: ${(props) => props.theme.text};
display: flex;
justify-items: center;
margin: 1rem auto;
border-bottom: 2px solid ${(props) => props.theme.text};
width: fit-content;

@media (max-width: 40em) {
  font-size: ${(props) => props.theme.fontxl};
}

`;

const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;

@media (max-width: 64em) {
  width: 80%;
}
@media (max-width: 48em) {
  width: 90%;
  justify-content: center;
}

`

const Item = styled.div`
width: calc(20rem - 4vw);
padding: 1rem 0;
color: ${props => props.theme.body};
margin: 2rem 1rem;
position: relative;

border: 2px solid ${props => props.theme.text};
border-radius: 20px;

&:hover{
  img{
    transform: translateY(-0.2rem) scale(1.1);
  }
}

@media (max-width: 30em) {
  width: 70vw;
}

`

const ImageContainer = styled.div`
width: 80%;
margin: 0 auto;
background-color:${props => props.theme.body};



border-radius: 20px;
cursor: pointer;

img{
  width: 90%;
  height: auto;
  margin: 0 0.8rem;
  border-radius:  20px;
transition: all 0.3s ease;

}
`

const Name = styled.h2`
font-size: ${props => props.theme.fontmd};
display: flex;
align-items: center;
justify-content: center;
text-transform: uppercase;
color: ${props => props.theme.text};
margin-top: 1rem;
`

const Position = styled.h2`
font-size: ${props => props.theme.fontmd};
display: flex;
align-items: center;
justify-content: center;
text-transform: capitalize;
color: ${props => `rgba(${props.theme.textRgba},0.9)`};
font-weight:400;
`

const MemberComponent = ({img, name=" ", position=" "}) => {

return(
  <Item>
    <ImageContainer>
      <img src={img} alt={name} />
    </ImageContainer>
    <Name>{name}</Name>
    <Position>{position}</Position>
  </Item>
)
}

const Team = () => {
  return (
    <Section id="team">
      <Title>TEAM</Title>
      <Container>
        <MemberComponent img={img17} name="UnstableAnimals" position="Founder|Artist 2nd|CM" />
        <MemberComponent img={img15} name="TheSoulSlayer" position="Founder|Artist 1st|Dev" />
        <MemberComponent img={img8} name="JBlade" position="Founder|Artist 2nd|CM" />
      </Container>
    </Section>
  )
}

export default Team