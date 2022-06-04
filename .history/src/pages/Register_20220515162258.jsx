import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("https://cdn.pixabay.com/photo/2020/02/24/18/05/background-4876988_960_720.jpg");
  background-size: 10px;
`;
const Wrapper = styled.div`
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px;
`;
const Form = styled.form`
  margin: 5px;
  align-content: center;
  justify-content: center;
  padding: 25px;
`;

const Input = styled.input`
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Agreement = styled.span``;
const Button = styled.button``;

const Register = () => {
  return (
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
    </Container>
  );
};

export default Register;
