import { Send } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  height: 60vh;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 20px;
`;
const Desc = styled.div``;
const InputContainer = styled.div``;
const Input = styled.div``;
const Button = styled.button``;

const Newsletter = () => {
  return (
    <Container>
      <Title> Newsletter</Title>
      <Desc> your web site</Desc>
      <InputContainer>
        <Input placeholder="your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
