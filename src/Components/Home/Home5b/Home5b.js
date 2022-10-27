import React from "react";
import styled from "styled-components";

const Home5b = () => {
  return (
    <PreContain>
      <Container>
        <Wrapper>
          <Title>Training! Training!! Training!!!</Title>
          <Content>
            Want to learn how to make your own organic and natural skincare
            products??? Skintriumph also provides training for those who wants
            to prepare and formulate their own skincare products, Drive the
            sales of their skincare products Online and offline, Packageing and
            branding of their own products, all is Privided at Afforadble Prices
          </Content>
          <a href="https://surveyheart.com/form/6352774062f2cc5e6f68c9dd">
            <Button>Register Now!!!</Button>
          </a>
        </Wrapper>
      </Container>
    </PreContain>
  );
};

export default Home5b;

const PreContain = styled.div`
  height: 70vh;
  width: 100%;
  font-family: poppins;
  background-image: url("/Images/train.jpg");
  background-position: center;
  background-size: cover;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;
const Wrapper = styled.div`
  width: 85%;
  text-align: center;
`;
const Title = styled.div`
  font-size: 25px;
  /* color: #e8bf0a; */
  color: #ffb400;
  font-weight: 800;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 22px;
  }
`;
const Content = styled.div`
  /* color: #949494; */
  color: #fff;
  margin-bottom: 20px;
`;
const Button = styled.button`
  height: 45px;
  width: 160px;
  background-color: #fff;
  color: #000;
  outline: none;
  border: none;
  font-weight: 600;
  border-radius: 3px;
  transition: all 350ms;

  :hover {
    transform: scale(0.94);
    color: #e8bf0a;
  }
`;
