// src/components/TableComponent.js
import React from 'react';
import { useTable, useSortBy, useFilters } from 'react-table';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField } from '@mui/material';

const DefaultColumnFilter = ({ column: { filterValue, setFilter } }) => (
  <TextField
    value={filterValue || ''}
    onChange={e => setFilter(e.target.value || undefined)}
    placeholder={`Search...`}
    size="small"
  />
);

const TableComponent = ({ columns, data }) => {
  const defaultColumn = {
    Filter: DefaultColumnFilter,
  };

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    { columns, data, defaultColumn },
    useFilters,
    useSortBy
  );

  return (
    <TableContainer component={Paper}>
      <Table {...getTableProps()}>
        <TableHead>
          {headerGroups.map(headerGroup => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <TableCell {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <div>{column.canFilter ? column.render('Filter') : null}</div>
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <TableCell {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
