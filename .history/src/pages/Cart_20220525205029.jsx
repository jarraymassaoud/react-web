import styled from "styled-components";
import Annonce from "../components/Annonce";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TopButton = styled.button`
  font-weight: 600;
  text-align: center;
  cursor: pointer;
`;
const TopTexts = styled.div``;
const TopText = styled.div``;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Annonce />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton> Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Bag 2</TopText>
            <TopText></TopText>
          </TopTexts>
        </Top>
        <Bottom></Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
