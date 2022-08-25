import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styledComponents from "styled-components";
import axios from "axios";
import { NavLink } from "react-router-dom";
import moment from "moment";
import Swal from "sweetalert2";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const Orders = () => {
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
        <h5>Orders</h5>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>...</StyledTableCell>
                <StyledTableCell>Costomer's Name</StyledTableCell>
                <StyledTableCell align="right">Email</StyledTableCell>
                <StyledTableCell align="right">State</StyledTableCell>
                <StyledTableCell align="right">Phone No</StyledTableCell>
                <StyledTableCell align="right">ProductID</StyledTableCell>
                <StyledTableCell align="right">Date Ordered</StyledTableCell>
                <StyledTableCell align="right">Status</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {getOrder.map((row) => (
                <StyledTableRow key={row._id}>
                  <StyledTableCell component="th" scope="row">
                    <AvatarName to={`/orders/orderdetail/${row._id}`}>
                      <strong>
                        {" "}
                        {row.orderDetail.map((props) =>
                          props.username.charAt()
                        )}{" "}
                      </strong>
                    </AvatarName>
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {row.orderDetail.map((props) => props.username)}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.orderDetail.map((props) => props.email)}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.orderDetail.map((props) => props.state)}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.orderDetail.map((props) => props.phone)}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.orderOTP}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <b>{moment(row.createdAt).fromNow()}</b>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.delivered ? (
                      <Button1>Delivered</Button1>
                    ) : (
                      <Button2
                        onClick={() => {
                          const updateDelivery = async () => {
                            const mainURL = "http://localhost:2221";
                            const liveURL = "https://sktriumph-app.vercel.app";
                            const URL = `${liveURL}/api/order/delivered/${row._id}`;
                            axios.patch(URL);
                          };

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
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Wrapper>
    </Container>
  );
};

export default Orders;

const Container = styledComponents.div`
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
const Wrapper = styledComponents.div`
  width: 1150px;
  @media (max-width: 1150px) {
    width: 95%;
  }
`;
const AvatarName = styledComponents(NavLink)`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: #031e3e;
  display: flex;
  justify-content: center;
  align-items:center;
  font-family: poppins;
  cursor: pointer;
  text-decoration: none;

  strong{
    color: #fff;
    font-weight: bold;
  }
`;

const Button1 = styledComponents.div`
padding: 5px 20px;
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

const Button2 = styledComponents.div`
padding: 5px 20px;
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
