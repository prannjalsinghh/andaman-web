import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Container } from '@mui/material';
import {cyan} from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: cyan[600],
    },
    secondary: {
      main: '#f44336',
    },
  },
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    textAlign:'center'

  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    textAlign:'center'
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function CustomizedTables(props) {
  return (
    <TableContainer component={Container} style={{marginTop:"30px"}}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {props.head?.map((cell) => <StyledTableCell>{cell}</StyledTableCell> )}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows?.map((row) => (
            <StyledTableRow key={row.day}>
                 {Object.keys(row)?.map((rowKey) => <StyledTableCell>{row[rowKey]}</StyledTableCell> )}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}