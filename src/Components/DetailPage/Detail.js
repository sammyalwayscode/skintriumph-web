import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";
import Footer from "../Footer/Footer";
import { addToCart } from "../Global/GlobalState";
import Header from "../Header/Header";

const Detail = () => {
  const { id } = useParams();
  const [getProductDetails, setGetProductDetails] = useState({});
  const dispatch = useDispatch();

  const getProducts = async () => {
    const mainURL = "http://localhost:2221";
    const liveURL = "https://skintriumph-server.herokuapp.com";
    const URL = `${liveURL}/api/product/${id}`;

    await axios
      .get(URL)
      .then((res) => {
        setGetProductDetails(res.data.data);
        console.log(res.data.data);
      })
      .catch((error) => {
        new Swal({
          title: error.response.data.message,
          text: `Please Check and Fix this ERROR`,
          icon: "error",
          showConfirmButton: false,
          timer: 3500,
        });
      });
  };

  useEffect(() => {
    getProducts();
    console.log(getProductDetails);
  }, []);
  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <ImageDiv>
            <img src={getProductDetails.avatar} alt="" />
          </ImageDiv>
          <TextDetail>
            <Title>{getProductDetails.productName}</Title>
            <Price>
              {" "}
              Price:{" "}
              <strong>
                <span>&#8358;</span> {getProductDetails.price}
              </strong>{" "}
            </Price>
            <Content>
              <p>{getProductDetails.productDescription}</p>
              <p>{getProductDetails.productDescription2}</p>
              <p>{getProductDetails.productDescription3}</p>
            </Content>
            <MoreBtn>
              {/* <QuantityDiv>
                <CaclQuanty>+</CaclQuanty>
                <MainQuantity>2</MainQuantity>
                <CaclQuanty bg>-</CaclQuanty>
              </QuantityDiv> */}
              <CartAddBtn
                onClick={() => {
                  dispatch(addToCart(getProductDetails));
                }}
              >
                Add To Cart
              </CartAddBtn>
            </MoreBtn>
          </TextDetail>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Detail;

const Container = styled.div`
  width: 100%;
  display: flex;
  min-height: 100vh;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-family: poppins;
  margin-bottom: 20px;
  padding-top: 70px;
`;

const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  flex-wrap: wrap;
  @media (max-width: 500px) {
    width: 90%;
  }

  @media (max-width: 800px) {
    justify-content: center;
  }
  @media (max-width: 1200px) {
    width: 85%;
  }
`;
const ImageDiv = styled.div`
  height: 500px;
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
  @media (max-width: 600px) {
    height: 300px;
    width: 100%;
    object-fit: contain;
  }
`;
const TextDetail = styled.div`
  width: 600px;
  @media (max-width: 600px) {
    width: 100%;
  }
`;
const Title = styled.div`
  font-size: 25px;
  font-weight: 800;
  margin: 10px 0;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;
const Price = styled.div`
  font-weight: 600;
  margin-bottom: 20px;
  strong {
    color: #5bd395;
  }
`;
const Content = styled.div`
  color: gray;
`;

const QuantityDiv = styled.div`
  display: flex;
  width: 120px;
  /* background-color: aliceblue; */
  justify-content: space-around;
  margin-right: 20px;
`;
const CaclQuanty = styled.button`
  padding: 2px 13px;
  background-color: ${({ bg }) => (bg ? "red" : "green")};
  border: 0;
  outline: none;
  border-radius: 3px;
  color: #fff;
  font-weight: 700;
`;
const MainQuantity = styled.div`
  height: 28px;
  width: 28px;
  background-color: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 14px;
  font-weight: bold;
`;

const MoreBtn = styled.div`
  width: 100%;
  display: flex;
`;

const CartAddBtn = styled.button`
  outline: none;
  border: 0;
  flex: 1;
  background-color: #000;
  color: #fff;
  padding: 6px 0;
`;
