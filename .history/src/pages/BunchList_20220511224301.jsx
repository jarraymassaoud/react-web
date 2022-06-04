import styled from "styled-components";
import Annonce from "../components/Annonce";
import Navbar from "../components/Navbar";

const Container = styled.div``;

const BunchList = () => {
  return (
    <Container>
      <Navbar />
      <Annonce />
    </Container>
  );
};

export default BunchList;
