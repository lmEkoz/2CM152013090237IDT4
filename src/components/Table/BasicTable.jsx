import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@material-ui/core';
import { TableDeleteButton, TableEditButton, TableVisibilityButton } from './table-actions';


const useStyles = makeStyles((theme) => ({
  table : {
    minWidth: 650,
  },
  tableContainer:{
    borderRadius: 15, 
    margin: '10px 10px', 
    maxWidth: 950,
  },
  tableHeaderCell: {
    fontWeight: 'bold',
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.getContrastText(theme.palette.primary.dark),
  }
}));
function createData(name, question) {
  return { name, question };
}
/*
let { options, records } = props;
let tableRows = records.map(record =>{
  return <TableRow key = {record.id}>
    {options.columns.map(column => {
      return <TableCell key = {column.heading}>
        {Obj.get(record, column.key)}
      </TableCell>
    })}
  </TableRow>
})
*/
const rows = [
  createData('Ejercicio 1', 'question 01'),
  createData('Ejercicio 2', 'question 02'),
 
];

export default function BasicTable() {
  const classes = useStyles();
  return (
    <div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" className= {classes.tableHeaderCell}>
              Ejercicio
              </TableCell>
            <TableCell align="center" className= {classes.tableHeaderCell}>Acciones</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align ="center" component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align= "center">
                {row.question}
                <TableVisibilityButton />
                <TableEditButton />
                <TableDeleteButton />
                <a href = "">Probar ejercicio</a>
          
              </TableCell>
              
                
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
