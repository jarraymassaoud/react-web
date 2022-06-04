import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  margin: 10px;
`;

const Annonce = () => {
  return (
    <div>
      <Container>new promotion</Container>
    </div>
  );
};

export default Annonce;
