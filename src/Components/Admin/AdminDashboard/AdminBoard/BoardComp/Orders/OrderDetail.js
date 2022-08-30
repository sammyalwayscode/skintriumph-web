import axios from "axios";
import moment from "moment";
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import formatter from "number-to-currency";
import Swal from "sweetalert2";

const OrderDetail = () => {
  const [getOrder, setGetOrder] = React.useState();
  const [productOrdered, setProductOrdered] = React.useState();
  const [orderEmail, setOrderEmail] = React.useState("");
  const [orderOTP, setOrderOTP] = React.useState(String);
  const [orderDate, setOrderDate] = React.useState(Date);
  const [orderStatus, setOrderStatus] = React.useState(Boolean);
  const { id } = useParams();

  const updateDelivery = async () => {
    const mainURL = "http://localhost:2221";
    const liveURL = "https://skintriumph-server.herokuapp.com";
    const URL = `${liveURL}/api/order/delivered/${id}`;
    axios.patch(URL);
  };

  const fecthOrder = async () => {
    const mainURL = "http://localhost:2221";
    const liveURL = "https://skintriumph-server.herokuapp.com";
    const URL = `${liveURL}/api/order/${id}`;

    await axios.get(URL).then((res) => {
      console.log(res.data.data.orderDetail[0].orders);
      setProductOrdered(res.data.data.orderDetail[0].orders);
      setGetOrder(res.data.data.orderDetail);
      console.log(res.data.data.orderDetail);
      console.log(res.data.data.email);
      setOrderEmail(res.data.data.email);
      setOrderOTP(res.data.data.orderOTP);
      setOrderDate(res.data.data.createdAt);
      setOrderStatus(res.data.data.delivered);
    });
  };

  React.useEffect(() => {
    fecthOrder();
  }, []);
  return (
    <Container>
      <Wrapper>
        <h4>Order Detail</h4>
        <DetailContainer>
          <DetailContainerWrapper>
            {getOrder?.map((props) => (
              <DetailContainerHold key={props._id}>
                <DetailImageContainer>
                  {" "}
                  {props.username.charAt()}
                </DetailImageContainer>
                <DetailTextContainer>
                  <UserName> {props.username}</UserName>

                  <TeacherCredentialsHold>
                    <TitleContent>
                      <Title>Name:</Title>
                      <Content>{props.username}</Content>
                    </TitleContent>
                    <TitleContent>
                      <Title>Email:</Title>
                      <Content>{orderEmail}</Content>
                    </TitleContent>
                    <TitleContent>
                      <Title>Age:</Title>
                      <Content>{props.age}</Content>
                    </TitleContent>
                    <TitleContent>
                      <Title>State:</Title>
                      <Content>{props.state}</Content>
                    </TitleContent>
                    <TitleContent>
                      <Title>L.G.A:</Title>
                      <Content>{props.LGA}</Content>
                    </TitleContent>
                    <TitleContent>
                      <Title>Street Address:</Title>
                      <Content>{props.address}</Content>
                    </TitleContent>
                    <TitleContent>
                      <Title>Phone No:</Title>
                      {props.phone}
                    </TitleContent>
                    <TitleContent>
                      <Title>Date Of Order:</Title>
                      <Content>
                        {" "}
                        <b>{moment(orderDate).format("LLLL")}</b>{" "}
                      </Content>
                    </TitleContent>
                    <TitleContent>
                      <Title>OrderOTP:</Title>
                      <Content> {orderOTP}</Content>
                    </TitleContent>
                    <TitleContent>
                      <Title>Item Ordered:</Title>
                      <Content>
                        {productOrdered?.map((props) => (
                          <ItemHold>
                            <OrderImg>
                              {" "}
                              <img
                                src={props.avatar}
                                alt={props.productName}
                              />{" "}
                            </OrderImg>
                            <OrderMain>
                              {" "}
                              <OrderTitle>Product Name:</OrderTitle>{" "}
                              {props.productName}
                            </OrderMain>
                            <OrderMain>
                              <OrderTitle>Price Per Product:</OrderTitle>
                              <span>&#8358;</span>
                              {formatter(props.price)}
                            </OrderMain>
                            <OrderMain>
                              <OrderTitle>Amount Bought:</OrderTitle>
                              {props.qty}
                            </OrderMain>
                            <OrderMain>
                              <OrderTitle>Category:</OrderTitle>
                              {props.category}
                            </OrderMain>
                            <OrderMain>
                              <OrderTitle>Product Total:</OrderTitle>
                              <span>&#8358;</span>
                              {formatter(props.price * props.qty)}
                            </OrderMain>
                            <hr />
                          </ItemHold>
                        ))}
                        {/* {getOrder.orderDetail.map((props) =>
                       props.orders.map((orderprops) => orderprops.price)
                     )} */}
                      </Content>
                    </TitleContent>
                    <TitleContent>
                      <Title>Total Item Ordered:</Title>
                      <Content>{props.username}</Content>
                    </TitleContent>
                    <TitleContent>
                      <Title>Total Prices:</Title>
                      <Content>{props.username}</Content>
                    </TitleContent>
                    <TitleContent>
                      <Title>Delivery Status:</Title>
                      <Content>
                        {orderStatus ? (
                          <Button1>Delivered</Button1>
                        ) : (
                          <Button2
                            onClick={() => {
                              Swal.fire({
                                title: "Are you sure?",
                                text: "You won't be able to revert this!",
                                icon: "info",
                                showCancelButton: true,
                                confirmButtonColor: "#3085d6",
                                cancelButtonColor: "#d33",
                                confirmButtonText: "Yes, Update Status!",
                              }).then((result) => {
                                if (result.isConfirmed) {
                                  updateDelivery();
                                  Swal.fire(
                                    "Delivered!",
                                    "Your order has been Updated.",
                                    "success"
                                  );
                                  window.location.reload();
                                }
                              });
                            }}
                          >
                            Not Delivered
                          </Button2>
                        )}
                      </Content>
                    </TitleContent>
                  </TeacherCredentialsHold>
                </DetailTextContainer>
              </DetailContainerHold>
            ))}
          </DetailContainerWrapper>
        </DetailContainer>
      </Wrapper>
    </Container>
  );
};

export default OrderDetail;

const ItemHold = styled.div``;
const OrderImg = styled.div`
  height: 60px;
  width: 60px;
  background-color: lightgray;
  border-radius: 6px;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;
const OrderTitle = styled.div`
  margin-right: 10px;
  font-weight: bold;
`;
const OrderMain = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

const Container = styled.div`
  min-height: calc(100vh - 50px);
  margin-top: 50px;
  background-color: #f0f1f3;
  width: calc(100vw - 180px);
  margin-left: 180px;
  background-color: #f0f1f3;
  display: flex;
  justify-content: center;
  font-family: poppins;

  @media (max-width: 770px) {
    margin-left: 50px;
    width: calc(100vw - 50px);
  }
  @media (max-width: 500px) {
    margin-left: 0;
    width: 100vw;
  }
`;

const Wrapper = styled.div`
  width: 1150px;
  h4 {
    font-size: 20px;
    font-weight: bold;
    margin: 10px 0;
  }
  @media (max-width: 1150px) {
    width: 95%;
  }

  button {
    height: 30px;
    width: 150px;
    border: 0;
    outline: none;
    /* background-color: #ffa301; */
    background-color: #031e3e;
    color: #fff;
    font-family: poppins;
    font-weight: 700;
    margin: 0 8px;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const DetailContainer = styled.div`
  background-color: #fff;
`;
const DetailContainerWrapper = styled.div`
  margin: 25px;
  h5 {
    padding-top: 20px;
  }
`;
const DetailContainerHold = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 0;
`;
const DetailImageContainer = styled.div`
  height: 170px;
  width: 170px;
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  font-weight: 700;
  border-radius: 5px;
  margin-right: 60px;
  border-radius: 50%;
  margin-bottom: 10px;
  text-transform: uppercase;
`;
const DetailTextContainer = styled.div`
  width: 600px;
  /* background-color: red; */
`;
const UserName = styled.div`
  font-weight: 700;
  margin-bottom: 15px;
`;
const TeacherCredentialsHold = styled.div``;

const TitleContent = styled.div`
  display: flex;
  /* background-color: aqua; */
  font-size: 12px;
  margin: 20px 0;
`;
const Title = styled.div`
  margin-right: 3px;
  font-weight: 500;
  color: gray;
  width: 130px;
`;
const Content = styled.div``;

const Button1 = styled.div`
  padding: 5px 70px;
  background-color: green;
  color: #fff;
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  border-radius: 3px;
  outline: none;
  border: none;
  transition: all 350ms;
  font-family: poppins;
  cursor: not-allowed;
`;

const Button2 = styled.div`
  padding: 5px 70px;
  background-color: red;
  cursor: pointer;
  color: #fff;
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  border-radius: 3px;
  outline: none;
  border: none;
  transition: all 350ms;
  font-family: poppins;
`;
