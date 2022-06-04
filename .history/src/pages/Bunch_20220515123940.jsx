import styled from "styled-components";
import Navbar from "../components/Navbar";
import Annonce from "../components/Annonce";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Remove, Add } from "@material-ui/icons";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 70vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 30px 50px;
`;

const Title = styled.h1`
  margin: 30px 0px;
`;

const Desc = styled.p`
  font-weight: 400;
`;
const Price = styled.span`
  font-weight: 300;
  font-size: 20px;
`;

const FilterContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin: 18px;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 300;
  margin-right: 7px 3px;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 3px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 25px;
  height: 25px;
  border-radius: 10px;
  border: 1px solid teal;
  margin: 0px 5 px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  padding: 5px;
  border-radius: 1px solid teal;
`;

const Bunch = () => {
  return (
    <Container>
      <Navbar />
      <Annonce />
      <Wrapper>
        <ImgContainer>
          <Image src="https://thumbs.dreamstime.com/z/bouquet-frais-et-luxuriant-des-fleurs-color%C3%A9es-sur-le-fond-blanc-joyeux-anniversaire-jour-de-valentines-ou-femmes-co-concept-du-141614167.jpg"></Image>
        </ImgContainer>
        <InfoContainer>
          <Title> happy birthday flower</Title>
          <Desc></Desc>
          <Price> 5$</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="green" />
              <FilterColor color="pink" />
              <FilterColor color="red" />
              <FilterColor color="yellow" />
              <FilterColor color="blue" />
            </Filter>
            <Filter>
              <FilterTitle> Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>1</FilterSizeOption>
                <FilterSizeOption>2</FilterSizeOption>
                <FilterSizeOption>3</FilterSizeOption>
                <FilterSizeOption>4</FilterSizeOption>
                <FilterSizeOption>5</FilterSizeOption>
                <FilterSizeOption>6</FilterSizeOption>
                <FilterSizeOption>7</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Bunch;
