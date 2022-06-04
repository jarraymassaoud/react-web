import styled from "styled-components";
import Annonce from "../components/Annonce";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

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
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
`;
const BunchList = () => {
  return (
    <Container>
      <Navbar />
      <Annonce />
      <Title>Flowers</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Bunch:</FilterText>
        </Filter>
        <Filter>
          <FilterText> Sort Bunch</FilterText>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default BunchList;
