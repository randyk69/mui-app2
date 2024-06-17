import * as React from 'react';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';

const GridTable = ({ headers, rows, onSelected }) => {
  const [ checkedRow, setCheckedRow ] = useState(null);

  const handleChange = (event) => {
    const { id } = event.target;
    if(id) {
      setCheckedRow(id);
      onSelected(id);
    }else{
      setCheckedRow(null);
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Action</TableCell>
            { headers.map((header, index) => (
                <TableCell key={index}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell>
                <Checkbox id={row.id} onChange={handleChange} checked={row.id === checkedRow} />
              </TableCell>
              <TableCell align="left">
                {row.id}
              </TableCell>
              <TableCell align="left">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default GridTable;
