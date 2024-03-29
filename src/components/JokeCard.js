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
          {/* Logic to only render the joke and punchline for public dashboard */}
          {!loggedIn && (
            <>
              <CardTitle>{props.joke.joke}</CardTitle>
              <CardText>{props.joke.punchline}</CardText>
            </>
          )}

          {/* Basic editing functionality since we didn't have a route to pull specific jokes from database */}
          {isEditing ? (
            <Input
              type="text"
              value={joke}
              name="joke"
              onChange={e => handleJokeChanges(e.target.value)}
            />
          ) : (
            <CardTitle>{joke}</CardTitle>
          )}
          {isEditing ? (
            <Input
              type="text"
              value={punchline}
              name="punchline"
              onChange={e => handlePunchlineChanges(e.target.value)}
            />
          ) : (
            <CardText>{punchline}</CardText>
          )}
          {isEditing && (
            <Button
              onClick={() => {
                dispatch(
                  putJokes(props.joke.id, {
                    ...props.joke,
                    joke: joke,
                    punchline: punchline
                  })
                );
                setIsEditing(false);
              }}
            >
              Save
            </Button>
          )}
        </CardBody>

        {/* If user is logged in it will display these buttons */}
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
