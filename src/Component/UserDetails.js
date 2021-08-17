import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BASE_URL } from "../Constant";
import { AppContainer, FlexContainerRow } from "../Styles/globalStyles";

function UserDetails(props) {
  const Heading = styled.h2`
    color: black;
  `;
  const [userDetails, setUserDetails] = useState([]);
  const userId = props.location ? props.location.state.userId : "";
  useEffect(() => {
    fetch(BASE_URL + `users/${userId}`)
      .then((response) => response.json())
      .then((response) => {
        setUserDetails(response);
      });
  }, []);
  return (
    <AppContainer>
      <Heading>User Details:</Heading>
      <FlexContainerRow>
        <div>
          <h3>
            Username:<span className="details">{userDetails.username}</span>
          </h3>
        </div>
        <div>
          <h3>
            Full Name:
            <span className="details">{userDetails.name}</span>
          </h3>
        </div>
        <div>
          <h3>
            Email:
            <span className="details">{userDetails.email}</span>
          </h3>
        </div>
        <div>
          <h3>
            Website:
            <span className="details">{userDetails.website}</span>
          </h3>
        </div>
        <div>
          <h3>
            Company Details:
            <span className="details">
              {userDetails.company ? userDetails.company.name : ""}
            </span>
          </h3>
        </div>
      </FlexContainerRow>
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
    </AppContainer>
  );
}

export default UserDetails;
