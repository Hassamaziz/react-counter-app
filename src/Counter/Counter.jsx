import React, { useState } from "react";

const CounterApp = () => {
  const [counter, setCounter] = useState(0);
  const incrementHandler = () => {
    setCounter((prevCount) => prevCount + 1);
  };
  const decrementHandler = () => {
    setCounter(counter - 1);
  };
  const resetHandler = () => {
setCounter(0);
  };
    return (
    <>
      <div className="d-flex  align-items-center justify-content-center mt-5">
        <h1>Counter App</h1>
      </div>
      <div
        className="container d-flex  align-items-center justify-content-center mt-5"
        style={{ textAlign: "center", marginTop: "50px" }}
      >
      <div className="row d-flex   justify-content-center">
        <div className="col-8 col-lg-4 mb-5">
        
          <button
            className="btn btn-style btn-info btn-lg btn-outline-light  "
            style={{ display: "inline" }}
            onClick={incrementHandler}
          >
            Increment
          </button></div>
          <div className="col-8 col-lg-4 mt-3 mb-5">
          <h1
            style={{ display: "inline", padding: "5px 2rem", color: "white" }}
          >
            {counter}
          </h1></div>
          <div className="col-8 col-lg-4 mb-5">
          <button
            className="btn btn-style btn-danger btn-lg btn-outline-light  "
            style={{ display: "inline" }}
            onClick={decrementHandler}
          >
            Decrement
          </button></div>
        </div>
      </div>
      <div className="container d-flex justify-content-center align-items-center mt-5">
      <button className="btn btn-style btn-lg btn-success btn-outline-light" onClick={resetHandler}>Reset</button>
   </div> 
   </>
  );
};

export default CounterApp;
