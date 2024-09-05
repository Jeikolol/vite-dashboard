'use client';

import * as React from 'react';
import {
  Button,
  ButtonGroup,
  ClickAwayListener,
  Fade,
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  styled,
  TableFooter,
  TablePagination,
} from '@mui/material';
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
import { ArrowLeft, ArrowLineLeft, ArrowLineRight, ArrowRight, DotsThreeOutline, Eye } from '@phosphor-icons/react';
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

function TablePaginationActions(props: Readonly<TablePaginationActionsProps>): React.JSX.Element {
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
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

const CustomTablePagination = styled(TablePagination)`
  & .MuiTablePagination-toolbar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  }

  & .MuiTablePagination-selectLabel {
    margin: 0;
  }

  & .MuiTablePagination-displayedRows {
    margin: 0;

    @media (min-width: 768px) {
      margin-left: auto;
    }
  }

  & .MuiTablePagination-spacer {
    display: none;
  }

  & .MuiTablePagination-actions {
    display: flex;
    gap: 0.25rem;
  }
`;

export function CustomerTable({ orders = [], sx }: Readonly<CustomerTableProps>): React.JSX.Element {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [openPopperId, setOpenPopperId] = React.useState<number | null>(null);

  const handleToggle = (event: React.MouseEvent<HTMLElement>, id: number): void => {
    if (openPopperId === id) {
      setOpenPopperId(null); // Close if the same popper is clicked again
    } else {
      setAnchorEl(event.currentTarget);
      setOpenPopperId(id); // Open the clicked popper
    }
  };

  const handleClose = (event: Event): void => {
    if (anchorEl?.contains(event.target as HTMLElement)) return;
    setOpenPopperId(null); // Close the currently open popper
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - orders.length) : 0;

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number): void => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setRowsPerPage(parseInt(event.target.value, 10));
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
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0 ? orders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : orders).map(
              (order) => (
                <TableRow hover key={order.id}>
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
                  <TableCell>
                    <ButtonGroup variant="contained" aria-label="Button group with a nested menu">
                      <Button
                        size="small"
                        aria-controls={openPopperId === order.id ? 'split-button-menu' : undefined}
                        aria-expanded={openPopperId === order.id ? 'true' : undefined}
                        aria-label="select merge strategy"
                        aria-haspopup="menu"
                        onClick={(event) => {
                          handleToggle(event, order.id);
                        }}
                      >
                        <DotsThreeOutline />
                      </Button>
                    </ButtonGroup>

                    <Popper
                      id={openPopperId === order.id ? 'transition-popper' : undefined}
                      open={openPopperId === order.id}
                      anchorEl={anchorEl}
                      transition
                    >
                      {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                          <Paper key={order.id}>
                            <ClickAwayListener onClickAway={handleClose} key={order.id}>
                              <MenuList id="split-button-menu" autoFocusItem color="primary">
                                <MenuItem>
                                  <ListItemIcon>
                                    <Eye />
                                  </ListItemIcon>
                                  <ListItemText>Detalle</ListItemText>
                                </MenuItem>
                              </MenuList>
                            </ClickAwayListener>
                          </Paper>
                        </Fade>
                      )}
                    </Popper>
                  </TableCell>
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
              <CustomTablePagination
                sx={{
                  '& .MuiTablePagination-toolbar': {
                    gap: '10%', // Add space between the elements
                  },
                }}
                rowsPerPageOptions={[5, 10, 25]}
                colSpan={8}
                count={orders.length}
                rowsPerPage={rowsPerPage}
                page={page}
                labelRowsPerPage="Registros por página"
                labelDisplayedRows={({ from, to, count }) => `${from}-${to} de ${count}`}
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
