import styled from "styled-components";
import Navbar from "../components/Navbar";
import Annonce from "../components/Annonce";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div``;
const Wrapper = styled.div``;
const ImgContainer = styled.div``;
const Image = styled.img``;
const InfoContainer = styled.div``;
const Desc = styled.p``;
const Title = styled.h1``;
const Price = styled.span``;

const Bunch = () => {
  return (
    <Container>
      <Navbar />
      <Annonce />
      <Wrapper>
        <ImgContainer>
          <Image src="https://thumbs.dreamstime.com/z/bouquet-frais-et-luxuriant-des-fleurs-color%C3%A9es-sur-le-fond-blanc-joyeux-anniversaire-jour-de-valentines-ou-femmes-co-concept-du-141614167.jpg"></Image>
        </ImgContainer>
        <InfoContainer>
          <Title> happy birthday flower</Title>
          <Desc></Desc>
          <Price> 5$</Price>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Bunch;
