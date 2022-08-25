import axios from "axios";
import moment from "moment";
import React from "react";
import styled from "styled-components";

const OrderDetail = () => {
  const [getOrder, setGetOrder] = React.useState([]);

  const fecthOrder = async () => {
    const mainURL = "http://localhost:2221";
    const liveURL = "https://sktriumph-app.vercel.app";
    const URL = `${liveURL}/api/order/`;

    await axios.get(URL).then((res) => {
      console.log(res.data.data);
      setGetOrder(res.data.data);
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
                  {props.orderDetail.map((props) =>
                    props.username.charAt()
                  )}{" "}
                </DetailImageContainer>
                <DetailTextContainer>
                  <UserName>
                    {" "}
                    {props.orderDetail.map((props) => props.username)}{" "}
                  </UserName>

                  <TeacherCredentialsHold>
                    <TitleContent>
                      <Title>Name:</Title>
                      <Content>
                        {props.orderDetail.map((props) => props.username)}
                      </Content>
                    </TitleContent>
                    <TitleContent>
                      <Title>Email:</Title>
                      <Content> {props.email} </Content>
                    </TitleContent>
                    <TitleContent>
                      <Title>Age:</Title>
                      <Content>
                        {" "}
                        {props.orderDetail.map((props) => props.age)}{" "}
                      </Content>
                    </TitleContent>
                    <TitleContent>
                      <Title>State:</Title>
                      <Content>
                        {" "}
                        {props.orderDetail.map((props) => props.state)}{" "}
                      </Content>
                    </TitleContent>
                    <TitleContent>
                      <Title>L.G.A:</Title>
                      <Content>
                        {" "}
                        {props.orderDetail.map((props) => props.LGA)}
                      </Content>
                    </TitleContent>
                    <TitleContent>
                      <Title>Street Address:</Title>
                      <Content>
                        {" "}
                        {props.orderDetail.map((props) => props.address)}{" "}
                      </Content>
                    </TitleContent>
                    <TitleContent>
                      <Title>Phone No:</Title>
                      <b> {props.orderDetail.map((props) => props.phone)}</b>
                    </TitleContent>
                    <TitleContent>
                      <Title>Date Of Order:</Title>
                      <Content>
                        {" "}
                        <b>{moment(props.createdAt).format("LLLL")}</b>{" "}
                      </Content>
                    </TitleContent>
                    <TitleContent>
                      <Title>OrderOTP:</Title>
                      <Content> {props.orderOTP}</Content>
                    </TitleContent>
                    <TitleContent>
                      <Title>Item Ordered:</Title>
                      <Content>
                        {props.orderDetail.map((props) =>
                          props.orders.map((orderprops) => orderprops.price)
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
