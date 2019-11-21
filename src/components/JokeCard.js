import React from "react";
import { useDispatch } from "react-redux";
import { deleteJokes } from "../actions/deleteAction";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function JokeCard(props) {
  const dispatch = useDispatch();

  return (
    <div>
      <Card key={props.joke.id}>
        <CardBody>
          <CardTitle>{props.joke.joke}</CardTitle>
          <CardText>{props.joke.punchline}</CardText>
          <button onClick={dispatch(deleteJokes(props.joke.id))}>Delete</button>
        </CardBody>
      </Card>
    </div>
  );
}

export default JokeCard;
