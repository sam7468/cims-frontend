import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@material-ui/core/Button";
import EditIcon from "@mui/icons-material/Edit";
import '../styles/FormStyle.css'




//todo

{/*

    sprint 1 todo
    - remove preventdefault for form
    - read table - logics
    x - routing
    x - integrate with backend


    table overflow
    logic for => edit action, clicking on specific user
    axios get request fn
*/}

function EditButton() {
  return (
    <div>
      <Button variant="fab" color="purple" endIcon={<EditIcon />}>
        Edit
      </Button>
    </div>
  );
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.grey[300],
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
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

function createData(id, company_uid, company_name, primary_contact, action ) {
  return { id, company_uid, company_name, primary_contact, action };
}

const clientsList = [
  createData(1, "PQ127z", "Raymond Tech. Pvt. Ltd.", "Jhon Dave" ),
  createData(2, "YTr780", "Vimsl & Co.", "Vimal K"),
  createData(3, "WY584p", "Bend Solution", "Harsha Bendi"),
  createData(4, "CB456u", "Alpha Inc", "Naman K"),
  createData(5, "Eh23yu", "Meta Inc", "Sunny B"), 
];

function CIMSTable() {
  return (

    <div className="FormContainer"> {/*//using form container's alignment*/}
        <TableContainer component={Paper} align="right" >
        <Table sx={{ maxWidth: '100%' }} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell align="left">CompanyUID</StyledTableCell>
                <StyledTableCell align="left">Company Name</StyledTableCell>
                <StyledTableCell align="left">Primary Contact</StyledTableCell>
                <StyledTableCell align="left">Action</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {clientsList.map((client) => (
                <StyledTableRow key={client.id}>
                <StyledTableCell component="th" scope="client">
                    {client.id}
                </StyledTableCell>
                <StyledTableCell align="left">{client.company_uid}</StyledTableCell>
                <StyledTableCell align="left">{client.company_name}</StyledTableCell>
                <StyledTableCell align="left">{client.primary_contact}</StyledTableCell>
                <StyledTableCell align="left">{EditButton()}</StyledTableCell>
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </div>
  );
}

export default CIMSTable;