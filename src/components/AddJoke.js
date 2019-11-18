import React from "react";
import { useInput } from "../hooks/useInput";

export const AddJoke = () => {
  const [joke, handleJokeChange] = useInput("");
  const [punchline, handlePunchlineChange] = useInput("");
  const [privateJoke, handlePrivateJokeChange] = useInput(false);

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Add a new Joke</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleJokeChange}
          name="joke"
          value={joke}
          type="text"
        />
        <input
          onChange={handlePunchlineChange}
          name="punchline"
          value={punchline}
          type="text"
        />
        <input
          onChange={handlePrivateJokeChange}
          type="checkbox"
          name="privateJoke"
        />
        <button type="submit">Add Joke</button>
      </form>
    </div>
  );
};
