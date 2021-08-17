import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function TableWidget(props) {
  const classes = useStyles();

  const renderTableHead = () => {
    return (
      <TableHead>
        <TableRow>
          {props.tableHeaders.map((headerName, i) => (
            <TableCell key={i}>{headerName}</TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };

  const renderTableBody = () => {
    return (
      <TableBody>
        {props.tableData &&
          props.tableData.map((row, i) => (
            <TableRow key={i}>
              {props.tableDataKeys.map((keyName) => (
                <TableCell component="th" scope="row">
                  {row[keyName]}
                </TableCell>
              ))}
            </TableRow>
          ))}
      </TableBody>
    );
  };
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        {renderTableHead()}
        {renderTableBody()}
      </Table>
    </TableContainer>
  );
}
