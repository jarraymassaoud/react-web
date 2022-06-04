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
  font-size: 70px;
`;
const Desc = styled.div`
  font-size: 30px;
  font-weight: 300;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border: 1px solid lavender;
`;
const Input = styled.input`
  border: none;
  flex: 8;
`;
const Button = styled.button`
  flex: 1;
  pointer: cursor;
`;

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
