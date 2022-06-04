import styled from "styled-components";
import Annonce from "../components/Annonce";
import Navbar from "../components/Navbar";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;

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
