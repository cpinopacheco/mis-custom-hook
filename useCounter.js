import { useState } from "react";

//Un custom hook no es mas que una simple función
//si el useState no se le pasa el valor toma el del initialSate
export const useCounter = (initialState = 10) => {
  const [counter, setCounter] = useState(initialState); //10

  const increment = () => {
    setCounter(counter + 1);
  };

  const reset = () => {
    setCounter(initialState);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return {
    counter,
    reset,
    increment,
    decrement,
  };
};
