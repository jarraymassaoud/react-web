import styled from "styled-components";
import Navbar from "../components/Navbar";
import Annonce from "../components/Annonce";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div``;

const Bunch = () => {
  return (
    <Container>
      <Navbar />
      <Annonce />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Bunch;
