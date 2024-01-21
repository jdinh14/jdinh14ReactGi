import React, { useReducer } from "react";

/*  Create a simple counter app using React hooks. Implement the buttons to Increment and 
Decrement ton the counter value  */


const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
      case "DECREMENT":
      return { count: state.count - 1, showText: state.showText };
    default:
      return state;
  }
};

const ReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <div>
      <h1>{state.count}</h1>

      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        Increase  
      </button>

      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        Decrease
      </button>

      
    </div>
  );
};

export default ReducerExample;