import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function JokeCard(props) {
    
    return(
        <div>
            <Card key={props.id}>
                <CardBody>
                    <CardTitle>{props.joke}</CardTitle>
                    <CardText>{props.punchline}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default JokeCard;