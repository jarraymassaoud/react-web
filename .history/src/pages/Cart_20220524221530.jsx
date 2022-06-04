import styled from "styled-components";
import Annonce from "../components/Annonce";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const Container = styled.div``;
const Wrapper = styled.div;

const Title = styled.h1;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Annonce />
      <Wrapper>
        <Title>YOUR BAG</Title>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
