import styled from "styled-components";
import { products } from "../data";
import Product from "./Product";

const Container = styled.div`
  display: flex;
  padding: 20px;
`;
const Products = () => {
  return (
    <Container>
      {products.map((item) => (
        <Product item={item} />
      ))}
    </Container>
  );
};

export default Products;
