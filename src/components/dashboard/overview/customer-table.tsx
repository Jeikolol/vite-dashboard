'use client';

import * as React from 'react';
import { IconButton, TableFooter, TablePagination } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import type { SxProps } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { ArrowLeft, ArrowLineLeft, ArrowLineRight, ArrowRight } from '@phosphor-icons/react';
import dayjs from 'dayjs';

import { Order } from '@/contexts/widget-data';

export interface CustomerTableProps {
  orders?: Order[];
  sx?: SxProps;
}

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton onClick={handleFirstPageButtonClick} disabled={page === 0} aria-label="first page">
        <ArrowLineLeft />
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        <ArrowLeft />
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        <ArrowRight />
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        <ArrowLineRight />
      </IconButton>
    </Box>
  );
}

export function CustomerTable({ orders = [], sx }: Readonly<CustomerTableProps>): React.JSX.Element {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - orders.length) : 0;

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRowsPerPage(parseInt(event.target.value, 5));
    setPage(0);
  };
  return (
    <Card sx={sx}>
      <CardHeader title="Listado de consultas por Usuario" />
      <Divider />
      <Box sx={{ overflowX: 'auto' }}>
        <Table sx={{ minWidth: 800 }}>
          <TableHead>
            <TableRow>
              <TableCell>Usuario</TableCell>
              <TableCell>Cant. Máxima de Consultas</TableCell>
              <TableCell>Consultas DB Local</TableCell>
              <TableCell>Consultas JCE</TableCell>
              <TableCell>Total de Consultas</TableCell>
              <TableCell>Disponibles</TableCell>
              <TableCell>Fecha última consulta</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0 ? orders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : orders).map(
              (order) => (
                <TableRow hover key={order.user}>
                  <TableCell>{order.user}</TableCell>
                  <TableCell>
                    <Chip color="success" label={order.maxRequests} size="medium" />
                  </TableCell>
                  <TableCell>
                    <Chip color="secondary" label={order.localRequests} size="medium" />
                  </TableCell>
                  <TableCell>
                    <Chip color="warning" label={order.jceRequests} size="medium" />
                  </TableCell>
                  <TableCell>
                    <Chip color="error" label={order.totalRequests} size="medium" />
                  </TableCell>
                  <TableCell>
                    <Chip color="success" label={order.availables} size="medium" />
                  </TableCell>
                  <TableCell>{dayjs(order.lastDateRequest).format('MMM D, YYYY')}</TableCell>
                </TableRow>
              )
            )}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                sx={{ justifyContent: 'space-between' }}
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={3}
                count={orders.length}
                rowsPerPage={rowsPerPage}
                page={page}
                labelRowsPerPage={<div>Registros por página</div>}
                // labelDisplayedRows={({ from, to, count }) => `Displaying pages ${from}-${to} of total ${count} pages`}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </Box>
    </Card>
  );
}
