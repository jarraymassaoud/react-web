import styled from "styled-components";

const Container = styled.div``;
const Wrapper = styled.div``;
const Title = styled.h1``;
const Input = styled.input``;
const Agreement = styled.span``;
const Button = styled.button``;
const Form =styled.div`;

const Register = () => {
  return;
  <Container>
    <Wrapper>
      <Title> Create on Account</Title>
      <Form>
        <Input placeholder="Name" /> <Input placeholder="Last Name" />
        <Input placeholder="Mail" />
        <Input placeholder="Login" />
        <Input placeholder="Password" />
        <Input placeholder="Confirm Password" />
        <Agreement></Agreement>
        <Button> Create</Button>
      </Form>
    </Wrapper>
  </Container>;
};

export default Register;
