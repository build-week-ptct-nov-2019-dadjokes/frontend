import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Card, CardBody, CardTitle, CardText, Button, Input } from "reactstrap";
import { putJokes } from "../actions/putAction";
import { deleteJokes } from "../actions/deleteAction";
import { useInput } from "../hooks/useInput";

function JokeCard(props) {
  const dispatch = useDispatch();
  const [joke, handleJokeChanges] = useInput(props.joke.joke);
  const [punchline, handlePunchlineChanges] = useInput(props.joke.punchline);
  const [isEditing, setIsEditing] = useState(false);

  const loggedIn = localStorage.getItem("token");

  return (
    <div>
      <Card key={props.joke.id}>
        <CardBody>
          {isEditing ? (
            <Input
              type="text"
              value={joke}
              onChange={() => handleJokeChanges()}
            />
          ) : (
            <CardTitle>{joke}</CardTitle>
          )}
          {isEditing ? (
            <Input
              type="text"
              value={punchline}
              onChange={() => handlePunchlineChanges()}
            />
          ) : (
            <CardText>{punchline}</CardText>
          )}
          {isEditing && (
            <Button
              onClick={() => {
                dispatch(putJokes(props.joke.id));
                setIsEditing(false);
              }}
            >
              Save
            </Button>
          )}
        </CardBody>
        {loggedIn && (
          <>
            <Button
              color="primary"
              style={{ marginBottom: "5px" }}
              onClick={() => setIsEditing(true)}
            >
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
