import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  BASE_URL,
  POST_DATA_KEYS,
  POST_DETAILS_ROUTE,
  POST_HEADERS,
} from "../Constant";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export const PostsList = () => {
  const classes = useStyles();
  const [postDetails, setPostDetails] = useState([]);
  const [query, setQuery] = useState("");
  const postHeaders = POST_HEADERS;
  useEffect(() => {
    fetch(BASE_URL + "posts")
      .then((response) => response.json())
      .then((response) => {
        setPostDetails(response);
      });
  }, []);
  const search = (rows) => {
    const columns = ["title"];
    return rows?.filter((row) =>
      columns.some(
        (column) =>
          row[column]?.toString().toLowerCase().indexOf(query.toLowerCase()) >
          -1
      )
    );
  };
  const handleChange = (event) => {
    event.preventDefault();
    setQuery(event.target.value);
  };

  const Container = styled.div`
    margin: 50px;
  `;

  const Heading = styled.h2`
    color: black;
  `;
  return (
    <Container>
      <input
        className="formInput searchInput"
        placeholder="Enter text here..."
        onChange={handleChange}
        value={query}
        name="query"
      />
      <Heading>Post List</Heading>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              {postHeaders.map((headerName, i) => (
                <TableCell key={i}>{headerName}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {search(postDetails)?.length > 0 ? (
              search(postDetails).map((row, i) => (
                <TableRow key={i}>
                  <Link to={{ pathname: "postDetails", state: row }}>
                    <TableCell component="th" scope="row">
                      <Link to={{ pathname: "userDetails", state: row }}>
                        {row.id}
                      </Link>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.title}
                    </TableCell>
                  </Link>
                </TableRow>
              ))
            ) : (
              <p className="absCenter">No Data Found</p>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default PostsList;
