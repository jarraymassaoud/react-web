import styled from "styled-components";
import { products } from "../data";
import Product from "./Product";

const Container = styled.div`
  flex: 1;
  display: flex;
  padding: 20px;
`;
const Products = () => {
  return (
    <Container>
      {products.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
