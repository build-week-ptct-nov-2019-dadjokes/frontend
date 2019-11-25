import React from "react";
import { useDispatch } from "react-redux";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { deleteJokes } from "../actions/deleteAction";

function JokeCard(props) {
  const dispatch = useDispatch();

  const loggedIn = localStorage.getItem("token");

  return (
    <div>
      <Card key={props.joke.id}>
        <CardBody>
          <CardTitle>{props.joke.joke}</CardTitle>
          <CardText>{props.joke.punchline}</CardText>
        </CardBody>
        {loggedIn && (
          <>
            <Button color="primary" style={{ marginBottom: "5px" }}>
              Update
            </Button>
            <Button
              color="danger"
              onClick={() => dispatch(deleteJokes(props.joke.id))}
            >
              Delete
            </Button>
          </>
        )}
      </Card>
    </div>
  );
}

export default JokeCard;
