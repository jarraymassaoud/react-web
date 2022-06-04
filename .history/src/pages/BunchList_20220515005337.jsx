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
  margin-right: 10px;
`;

const Select = styled.select`
  padding: 20px;
`;
const Option = styled.option``;
const BunchList = () => {
  return (
    <Container>
      <Navbar />
      <Annonce />
      <Title>Flowers</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Bunch:</FilterText>
          <Select>
            <Option disabled Select>
              Color
            </Option>
            <Option>White</Option>
            <Option>Red</Option>
            <Option>Yellow</Option>
            <Option>Blue</Option>
            <Option>Green</Option>
            <Option>Pink</Option>
          </Select>
          <Select>
            <Option disabled Select>
              {" "}
              Size
            </Option>
            <Option>1</Option>
            <Option>2</Option>
            <Option>3</Option>
            <Option>4</Option>
            <Option>5</Option>
            <Option>6</Option>
            <Option>7</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText> Sort Bunch:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price(Asc)</Option>
            <Option> Price(Desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default BunchList;
