import React from "react";
import styled from "styled-components";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <FootOne>
          <FootLogo>Skin Triumph</FootLogo>
          <FootMotto>
            Bringing elegance to your skin through our carefully made skin care
            products
          </FootMotto>
          <FootSocial>
            <a href="https://www.facebook.com/skintriumphs.skintriumphs">
              <div>
                {" "}
                <BsFacebook />
              </div>
            </a>
            <div>
              {" "}
              <BsInstagram />
            </div>
            <a href="https://twitter.com/skintriumph?s=20&t=EpTVYK28pTBDeBRUHmJNvA">
              <div>
                <BsTwitter />
              </div>
            </a>
            <div>
              <SiGmail />
            </div>
          </FootSocial>
        </FootOne>
        <FootTwo>
          <FootTwoHold>
            <FootTitle>Home</FootTitle>
            <NavLink
              style={{
                textDecoration: "none",
              }}
              to="/products"
            >
              <FootNav>Product</FootNav>
            </NavLink>
            <NavLink
              style={{
                textDecoration: "none",
              }}
              to="/cart"
            >
              <FootNav>Cart</FootNav>
            </NavLink>
            {/* <FootNav>Mobile App</FootNav> */}
            {/* <FootNav>Desktop App</FootNav> */}
            {/* <FootNav>Startup</FootNav> */}
          </FootTwoHold>
          <FootTwoHold>
            <FootTitle>About Us</FootTitle>
            <NavLink
              style={{
                textDecoration: "none",
              }}
              to="/products"
            >
              <FootNav>Pricing</FootNav>
            </NavLink>
            {/* <FootNav>Career</FootNav> */}
            <NavLink
              style={{
                textDecoration: "none",
              }}
              to="/contact"
            >
              <FootNav>Contact</FootNav>
            </NavLink>
            <NavLink
              style={{
                textDecoration: "none",
              }}
              to="/blog"
            >
              <FootNav>Blog</FootNav>
            </NavLink>
          </FootTwoHold>
          <FootTwoHold>
            <FootTitle>Account</FootTitle>
            <FootNav>Sign Up</FootNav>
            <NavLink
              style={{
                textDecoration: "none",
              }}
              to="/admin/signin"
            >
              <FootNav>Sign In</FootNav>
            </NavLink>
            {/* <FootNav>Forgot Password</FootNav> */}
          </FootTwoHold>
          <FootTwoHold>
            <FootTitle>Get Help</FootTitle>
            <NavLink
              style={{
                textDecoration: "none",
              }}
              to="/contact"
            >
              <FootNav>Contact</FootNav>
            </NavLink>
            {/* <FootNav>Docs</FootNav> */}
            <FootNav>Skill Aquisation</FootNav>
            <NavLink
              style={{
                textDecoration: "none",
              }}
              to="/contact"
            >
              <FootNav>Contact Sales</FootNav>
            </NavLink>
          </FootTwoHold>
        </FootTwo>
      </Wrapper>
      {/* <Developer>
        @skintriumph 2021 - concept created by Olorunda Samuel
      </Developer> */}
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  background-color: #000;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-family: poppins;
`;
const Wrapper = styled.div`
  width: 1100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin: 100px 0;
`;
const FootOne = styled.div`
  width: 250px;
  @media screen and (max-width: 800px) {
    margin-bottom: 30px;
  }
  @media screen and (max-width: 500px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 30px;
  }
`;
const FootLogo = styled.div`
  font-weight: 800;
  margin-bottom: 20px;
  color: #e8bf0a;
`;
const FootMotto = styled.div`
  font-size: 13px;
  margin-bottom: 25px;
  color: #fff;
  @media screen and (max-width: 500px) {
    text-align: center;
  }
`;
const FootSocial = styled.div`
  display: flex;
  color: #707070;
  font-size: 17px;
  div {
    margin: 0 15px 0 0;
  }
`;
const FootTwo = styled.div`
  width: 600px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  @media screen and (max-width: 610px) {
    width: 310px;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
  }
`;
const FootTwoHold = styled.div`
  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: brown; */
    margin-bottom: 9px;
  }
`;
const FootTitle = styled.div`
  font-size: 14px;
  font-weight: 700;
  padding-bottom: 8px;
  color: #fff;
`;
const FootNav = styled.div`
  font-size: 12px;
  margin: 10px 0;
  color: #fff;
  cursor: pointer;
  transition: all 350ms;

  :hover {
    color: #e8bf0a;
    font-weight: 600;
  }

  @media screen and (max-width: 500px) {
    margin: 5px 0;
  }
`;

const Developer = styled.div`
  font-weight: 500;
  font-size: 10px;
  margin-bottom: 10px;
  color: #77838f;
`;
