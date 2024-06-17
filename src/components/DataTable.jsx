import * as React from 'react';
import { useState } from 'react';
import GridTable from '../common/GridTable';
import Button from '@mui/material/Button';

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

const DataTable = () => {
  const [ selectedId, setSelectedId ] = useState(null);

  const handleSelected = (id) => {
    console.log('id in parent: ', id);
    setSelectedId(id);
  };

  const handleDelete = () => {
    console.log('delete record ', selectedId)
  }

  const handleEdit = () => {
    console.log('edit record ', selectedId)
  }

  return (
    <>
      { selectedId && (
        <>
          <Button variant="contained" onClick={handleDelete} className="!mb-5 !mr-2.5">Delete</Button>
          <Button variant="contained" onClick={handleEdit} className="!mb-5">Edit</Button>
        </>
      )}
      <GridTable headers={headers} rows={rows} onSelected={handleSelected} />
    </>
  );
}

export default DataTable;
