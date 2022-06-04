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
  padding: 20px;
`;
const TopButton = styled.button`
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 250px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div``;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
  flex: 1;
`;

const Summary = styled.div`
  flex: 1;
`;

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
            <TopText>Shopping Bag(2)</TopText>
            <TopText> Your WishList(0)</TopText>
          </TopTexts>
          <TopButton type="filled"> Checkout Now</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://mpng.subpng.com/20180226/gte/kisspng-garden-roses-flower-bouquet-marriage-nosegay-married-bouquet-5a94be6f0e8a49.6222805515196975190596.jpg" />
                <Details>
                  <ProductName>
                    <p>Product:</p>Flowres married
                  </ProductName>
                  <ProductId>
                    <p>ID:</p>45781
                  </ProductId>
                  <ProductColor />

                  <ProductSize>
                    {" "}
                    <p>Size:</p>7
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>Price:20$</PriceDetail>
            </Product>
          </Info>
          <Summary>Summary</Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
