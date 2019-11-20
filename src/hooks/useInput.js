import { useState } from "react";

export const useInput = initialValue => {
  // passing the values from each input directly to LS
  const [value, setValue] = useState(initialValue);

  // moves the handleChange into a custom hook
  const handleChanges = updatedValue => {
    setValue(updatedValue);
  };

  // Returning destructured array
  return [value, handleChanges];
};
