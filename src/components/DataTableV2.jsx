import * as React from 'react';
import { useState } from 'react';
import GridTableV2 from '../common/GridTableV2';
import Button from '@mui/material/Button';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Checkbox from '@mui/material/Checkbox';

function createData(id, name, calories, fat, carbs, protein) {
  return {id, name, calories, fat, carbs, protein };
}

const rows = [
  createData('1', 'Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('2', 'Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('3', 'Eclair', 262, 16.0, 24, 6.0),
  createData('4', 'Cupcake', 305, 3.7, 67, 4.3),
  createData('5', 'Gingerbread', 356, 16.0, 49, 3.9),
];

const headers = ['id', 'Dessert (100g serving)', 'Calories', 'Fat (g)', 'Carbs (g)', 'Protein (g)'];

const DataTableV2 = () => {
  const [ selectedId, setSelectedId ] = useState(null);

  const handleDelete = () => {
    console.log('delete record ', selectedId)
  }

  const handleEdit = () => {
    console.log('edit record ', selectedId)
  }

  const handleChange = (event) => {
    const { id } = event.target;
    if(id) {
      setSelectedId(id);
    }else{
      setSelectedId(null);
    }
  };


  return (
    <>
      { selectedId && (
        <>
          <Button variant="contained" onClick={handleDelete} className="!mb-5 !mr-2.5">Delete</Button>
          <Button variant="contained" onClick={handleEdit} className="!mb-5">Edit</Button>
        </>
      )}
      <GridTableV2 headers={headers}>
        {rows.map((row) => (
          <TableRow
            key={row.id}
          >
            <TableCell>
              <Checkbox id={row.id} onChange={handleChange} checked={row.id === selectedId} />
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
      </GridTableV2>
    </>
  );
}

export default DataTableV2;
