import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("https://cdn.pixabay.com/photo/2020/02/24/18/05/background-4876988_960_720.jpg");
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;
const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  padding: 10px;
  align-items: center;
  justify-content: center;
  margin: 20px 10px 0px 0px;
`;
const Agreement = styled.span``;
const Button = styled.button`
  cursor: pointer;
  padding: 15px 20px;
  border: none;
  background-color: #7ff;
  margin: 20px 20px;
  &:hover {
    background-color: darkblue;
  }
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title> Create An Account</Title>
        <Form>
          <Input placeholder="Name" /> <Input placeholder="Last Name" />
          <Input placeholder="Mail" />
          <Input placeholder="Username" />
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
