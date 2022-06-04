import {
  Facebook,
  GitHub,
  LinkedIn,
  MailOutline,
  Phone,
  Room,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  background-color: gainsboro;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  padding: 20px;
  flex-direction: column;
  margin-left: 100px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0px;
  padding: 0px;
  list-style: none;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  justify-content: center;
  align-items: center;
  margin-left: 100px;
`;
const ContactItem = styled.div``;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo> MS</Logo>
        <Desc>my shop MS</Desc>
        <SocialContainer>
          <SocialIcon color="0080ff">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="0059b3">
            <LinkedIn />
          </SocialIcon>
          <SocialIcon color="000000">
            <GitHub />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title> Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Accesoires</ListItem>
          <ListItem>MyAccount</ListItem>
        </List>
      </Center>
      <Right>
        <Title> Contact</Title>
        <ContactItem>
          <Room />
          Tunisia
        </ContactItem>
        <ContactItem>
          <Phone />
          xxxxxxxx
        </ContactItem>
        <ContactItem>
          <MailOutline /> jarraymassoud@gmail.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
