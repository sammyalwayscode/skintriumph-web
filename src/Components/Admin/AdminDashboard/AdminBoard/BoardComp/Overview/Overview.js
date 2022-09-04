import React from "react";
import styled from "styled-components";
import { BsFillDisplayFill } from "react-icons/bs";
import { FaChalkboardTeacher } from "react-icons/fa";
import { VscSymbolClass } from "react-icons/vsc";
import { IoIosPeople } from "react-icons/io";
import DoughnutChart from "./DoughnutChart";
import PieChart from "./PieChart";
import RecentCostomers from "./RecentCostomers";
import axios from "axios";

const Overview = () => {
  const [getOrder, setGetOrder] = React.useState([]);

  const fecthOrder = async () => {
    const mainURL = "http://localhost:2221";
    const liveURL = "https://skintriumph-server.herokuapp.com";
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
        <h5>Overview</h5>
        <TopContainer>
          <RowTwo>
            <FirstBox>
              <InnerBox>
                <IconHold bgi="#F3E5F5">
                  <FaChalkboardTeacher color="#8E24AA" />
                </IconHold>
                <span> 2040 </span>
                <small>Total Sales</small>
              </InnerBox>
              <InnerBox>
                <IconHold bgi="#E1F1FF">
                  <BsFillDisplayFill color="#3F7AFC" />
                </IconHold>
                <span> Kunle </span>
                <small>Incomplect Orders</small>
              </InnerBox>
              <InnerBox>
                <IconHold bgi="#FFF2D8">
                  <VscSymbolClass color="#FFA070" />
                </IconHold>
                <span> 500</span>
                <small>Totla Income</small>
              </InnerBox>
              <InnerBox>
                <IconHold bgi="#FFEAEA">
                  <IoIosPeople color="#FF0000" />
                </IconHold>
                <span> {getOrder.length} </span>
                <small>Total Orders</small>
              </InnerBox>
            </FirstBox>
            <SecondBox>
              <DoughnutChart />
            </SecondBox>
            <ThirdBox>
              <PieChart />
            </ThirdBox>
          </RowTwo>
        </TopContainer>
        <ButtomContainer>
          <h5>Recent Orders</h5>
          <RecentCostomers />
        </ButtomContainer>
      </Wrapper>
    </Container>
  );
};

export default Overview;

const Container = styled.div`
  min-height: calc(100vh - 50px);
  height: 100%;
  margin-top: 50px;
  background-color: #f0f1f3;
  width: calc(100vw - 180px);
  margin-left: 180px;
  background-color: #f8f8f9;
  font-family: poppins;
  display: flex;
  justify-content: center;

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
  @media (max-width: 1150px) {
    width: 95%;
  }
  h5 {
    font-size: 16px;
    font-weight: bold;
    font-family: poppins;
    margin-top: 10px;
  }
`;

const TopContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ButtomContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;

  h5 {
    font-size: 16px;
    font-weight: bold;
    font-family: poppins;
  }
`;

const RowTwo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const FirstBox = styled.div`
  /* height: 350px; */
  width: 360px;
  /* background-color: #fff; */
  margin: 10px 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* border-radius: 6px; */

  @media (max-width: 700px) {
    width: 90%;
    justify-content: center;
  }
`;
const SecondBox = styled.div`
  width: 350px;
  height: 350px;
  background-color: #fff;
  margin: 10px 10px;

  @media (max-width: 500px) {
    width: 90%;
  }
`;
const ThirdBox = styled.div`
  width: 350px;
  height: 350px;
  background-color: #fff;
  margin: 10px 10px;
  @media (max-width: 500px) {
    width: 90%;
  }
`;

const InnerBox = styled.div`
  height: 160px;
  width: 173px;
  background-color: #fff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    font-weight: 700;
  }
  small {
    font-size: 11px;
  }

  @media (max-width: 500px) {
    width: 90%;
    margin: 10px;
  }
`;

const IconHold = styled.div`
  margin: 0 10px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: ${({ bgi }) => bgi};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin-bottom: 10px;
`;
