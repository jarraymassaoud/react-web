import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: 60vh;
  background-color: #f5f;

  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 85%;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Title = styled.h1`
  margin-bottom: 20px;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  cursor: pointer;
  align-items: center;
  font-weight: 600%;
`;
const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button> shop now</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
