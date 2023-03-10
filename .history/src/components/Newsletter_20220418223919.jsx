import { Send } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div``;
const Title = styled.h1``;
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
