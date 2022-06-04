import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("https://unsplash.com/photos/6QnEf_b47eA");
`;
const Wrapper = styled.div``;
const Title = styled.h1``;
const Form = styled.form``;

const Input = styled.input``;
const Agreement = styled.span``;
const Button = styled.button``;

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
