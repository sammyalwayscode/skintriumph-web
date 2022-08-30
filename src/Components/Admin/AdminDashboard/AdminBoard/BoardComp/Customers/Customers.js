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

const Customers = () => {
  const [allCoustomers, setAllCoustomers] = React.useState([]);

  const getCoustomers = async () => {
    const mainURL = "http://localhost:2221";
    const liveURL = "https://skintriumph-server.herokuapp.com";
    const URL = `${liveURL}/api/order/`;

    await axios.get(URL).then((res) => {
      console.log(res.data.data);
      setAllCoustomers(res.data.data);
    });
  };

  React.useEffect(() => {
    getCoustomers();
  }, []);

  return (
    <Container>
      <Wrapper>
        <h5>Customers</h5>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>...</StyledTableCell>
                <StyledTableCell>Customer Name</StyledTableCell>
                <StyledTableCell align="right">Email</StyledTableCell>
                <StyledTableCell align="right">State</StyledTableCell>
                <StyledTableCell align="right">Phone No</StyledTableCell>
                <StyledTableCell align="right">L.G.A</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allCoustomers?.map((row) => (
                <StyledTableRow key={row._id}>
                  <StyledTableCell component="th" scope="row">
                    <AvatarName>
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
                    {" "}
                    {row.orderDetail.map((props) => props.email)}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.orderDetail.map((props) => props.state)}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.orderDetail.map((props) => props.phone)}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.orderDetail.map((props) => props.LGA)}
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

export default Customers;

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

const AvatarName = styledComponents.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: darkorange;
  display: flex;
  justify-content: center;
  align-items:center;
  font-family: poppins;
  cursor: not-allowed;
  text-decoration: none; 

  strong{
    color: #fff;
    font-weight: bold;
  }
`;
