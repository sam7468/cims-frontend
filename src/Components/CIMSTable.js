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
import Icon from "@material-ui/core/Icon";
import EditIcon from "@mui/icons-material/Edit";

function EditButton() {
  return (
    <div>
      
      <Button variant="fab" color="purple" startIcon={<EditIcon />}>
        Edit
      </Button>
    </div>
  );
}

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

function createData(id, company_uid, company_name, primary_contact, action ) {
  return { id, company_uid, company_name, primary_contact, action };
}

const rows = [
  createData(1, "PQ127z", "Raymond Tech. Pvt. Ltd.", "Jhon Dave", EditButton()),
  createData(2, "YTr780", "Vimsl & Co.", "Vimal K", EditButton()),
  createData(3, "WY584p", "Bend Solution", "Harsha Bendi", EditButton()),
  createData(4, "CB456u", "Alpha Inc", "Naman K", EditButton()),
  createData(5, "Eh23yu", "Meta Inc", "Sunny B", EditButton()),
];

function CIMSTable() {
  return (
    <TableContainer component={Paper} align="right" >
      <Table sx={{ maxWidth: 1152 }} aria-label="customized table">
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
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="left">{row.company_uid}</StyledTableCell>
              <StyledTableCell align="left">{row.company_name}</StyledTableCell>
              <StyledTableCell align="left">{row.primary_contact}</StyledTableCell>
              <StyledTableCell align="left">{row.action}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CIMSTable;