import React, { useState } from "react";

export const AddJoke = () => {
  const [joke, setJoke] = useState("");
  const [punchline, setPunchline] = useState("");
  const [privateJoke, setPrivateJoke] = useState(false);

  const handleChange = e => {};

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Add a new Joke</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={e => handleChange(e)}
          name="joke"
          value={joke}
          type="text"
        />
        <input
          onChange={e => handleChange(e)}
          name="punchline"
          value={punchline}
          type="text"
        />
        <input
          onChange={e => handleChange(e)}
          type="checkbox"
          name="privateJoke"
        />
        <button type="submit">Add Joke</button>
      </form>
    </div>
  );
};
