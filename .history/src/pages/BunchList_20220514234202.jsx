import styled from "styled-components";
import Annonce from "../components/Annonce";
import Navbar from "../components/Navbar";

const Container = styled.div``;
const Title = styled.h1``;
const FilterContainer = styled.div`
  display: flex;
`;
const Filter = styled.div``;

const BunchList = () => {
  return (
    <Container>
      <Navbar />
      <Annonce />
      <Title>Flowers</Title>
      <FilterContainer>
        <Filter>filter</Filter>
        <Filter>filter2</Filter>
      </FilterContainer>
    </Container>
  );
};

export default BunchList;
