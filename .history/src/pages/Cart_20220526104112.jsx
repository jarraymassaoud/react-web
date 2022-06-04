import { Remove, Add } from "@material-ui/icons";
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
  margin: 5px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
  font-size: 25px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const ProductAmount = styled.div`
  font-size: 20px;
  margin: 5px;
`;
const ProductPrice = styled.div`
  font-size: 25px;
  font-weight: 300;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 40vh;
`;
const SummaryTitle = styled.h1`
  font-weight: 300;
  font-size: 25px;
`;
const SummaryItem = styled.div`
  margin: 20px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "25px"};
`;

const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  background-color: #baf;
  color: #eee;
  cursor: pointer;
  border: 50%;
  font-weight: 300;
  font-size: 20px;
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
                    <b>Product:</b> Flowres married
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 45781
                  </ProductId>
                  <ProductColor color="red" />

                  <ProductSize>
                    <b>Size:</b> 7
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                Price
                <ProductAmountContainer>
                  <Remove />

                  <ProductAmount>1</ProductAmount>
                  <Add />
                </ProductAmountContainer>
                <ProductPrice>20 $</ProductPrice>
              </PriceDetail>
            </Product>

            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://www.pngkey.com/png/full/682-6829444_wedding-flowers-png-clipart-flower-bouquet-wedding.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b> Flowres married
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 45747
                  </ProductId>
                  <ProductColor color="green" />

                  <ProductSize>
                    <b>Size:</b> 10
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                Price:
                <ProductAmountContainer>
                  <Remove />

                  <ProductAmount>1</ProductAmount>
                  <Add />
                </ProductAmountContainer>
                <ProductPrice>30 $</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>SubTotal= </SummaryItemText>
              <SummaryItemPrice>50$</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText>Estimated Shipping:</SummaryItemText>
              <SummaryItemPrice> 4$</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount:</SummaryItemText>
              <SummaryItemPrice> -4$</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total =</SummaryItemText>
              <SummaryItemPrice> 50$</SummaryItemPrice>
            </SummaryItem>
            <Button> Checkout Now</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
