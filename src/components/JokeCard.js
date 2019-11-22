import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function JokeCard(props) {
  return (
    <div>
      <Card key={props.joke.id}>
        <CardBody>
          <CardTitle>{props.joke.joke}</CardTitle>
          <CardText>{props.joke.punchline}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default JokeCard;
