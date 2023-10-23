import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, hours, slots, slots2) {
    return { name, hours, slots, slots2 };
}

const rows = [
    createData('Mon', "10 am - 6 pm", 6.0, 24),
    createData('Tue', "10 am - 6 pm", 9.0, 37),
    createData('Wed', "10 am - 6 pm", 16.0, 24),
    createData('Thu', "10 am - 6 pm", 3.7, 67),
    createData('Fri', "10 am - 6 pm", 16.0, 49),
    createData('Sat', "10 am - 6 pm", 16.0, 49),
];

export default function ScheduleTable() {
    return (
        <TableContainer component={Paper}>
            <Table responsive aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Days</StyledTableCell>
                        <StyledTableCell align="center">Office Hours</StyledTableCell>
                        <StyledTableCell align="center">Class Slots&nbsp;(Morning)</StyledTableCell>
                        <StyledTableCell align="center">Class Slots&nbsp;(Afternoon)</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="center">{row.hours}</StyledTableCell>
                            <StyledTableCell align="center">{row.slots}</StyledTableCell>
                            <StyledTableCell align="center">{row.slots2}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}