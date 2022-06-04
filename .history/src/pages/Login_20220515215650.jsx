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
  width: 25%;
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
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  padding: 10px;
  align-items: center;
  justify-content: center;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 50%;
  margin-left: 60px;
  cursor: pointer;
  padding: 15px;
  border: none;
  background-color: #7ff;
  &:hover {
    background-color: darkblue;
  }
`;
const Link = styled.a`
  width: 50%;
  border: none;
  padding: 5px;
  font-size: 14px;
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    background-color: darkblue;
  }
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title> SIGN IN</Title>
        <Form>
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Button> Login</Button>
          <Link> Create a new account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
