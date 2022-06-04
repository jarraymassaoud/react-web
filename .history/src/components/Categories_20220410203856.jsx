import styled from "styled-components";
import React from "react";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  flex: 1;
  display: flex;
  padding: 20px;
`;
const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} />
      ))}
    </Container>
  );
};

export default Categories;
