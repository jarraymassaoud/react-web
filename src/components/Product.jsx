import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  top: 0%;
  left: 0%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.2);
  align-items: center;
  justify-content: center;
  display: flex;
  z-index: 3;
  transform: all 0.5s ease;
  cursor: pointer;
`;
const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #5ffa;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;
const Image = styled.img`
  height: 75%;
  z-index: 2;
  width: 70%;
`;
/*const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 70%;
  background-color: white;
  position: absolute;
`;*/
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.5);
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
