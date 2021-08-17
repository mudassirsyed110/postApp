import React, { useEffect, useState } from "react";
import { POST_DETAILS_KEYS, POST_DETAILS_HEADERS, BASE_URL } from "../Constant";
import TableWidget from "../CustomWidgets/TableWidget";
import styled from "styled-components";
import { Button } from "@material-ui/core";

function PostDetails(props) {
  const Container = styled.div`
    margin: 50px;
  `;
  const Heading = styled.h2`
    color: black;
  `;

  const [postDetails, setPostDetails] = useState([]);
  const postTitle = props.location ? props.location.state.title : "";
  const postId = props.location ? props.location.state.id : "";
  useEffect(() => {
    fetch(BASE_URL + `comments?postId=${postId}`)
      .then((response) => response.json())
      .then((response) => {
        setPostDetails(response);
      });
  }, []);

  return (
    <Container>
      <h1>{postTitle}</h1>
      <Heading>Post Details:</Heading>
      <TableWidget
        tableHeaders={POST_DETAILS_HEADERS}
        tableData={postDetails}
        tableDataKeys={POST_DETAILS_KEYS}
      />
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "10px", marginLeft: "30px" }}
        onClick={() => {
         props.history.goBack();
        }}
      >
        Go Back To Post List
      </Button>
    </Container>
  );
}

export default PostDetails;
