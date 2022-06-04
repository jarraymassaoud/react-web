import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 20px;
`;
const Products = () => {
  return (
    <Container>
      {Products.map((item) => (
        <Product item={item} />
      ))}
    </Container>
  );
};

export default Products;
