import React, {Fragment} from 'react';

// this creates a component
// in React, a component is a piece of code that represents 
// a resuable part of a user interface
// `export` makes this function available outside of this file
// The `default` keyword tells other files using your code that it’s the main function in your file.
export default function Square() {
  // <button> is a JSX element
  return (
    // https://stackoverflow.com/questions/48316365/react-fragment-shorthand-failing-to-compile
    // <></> the shorthand won't work
    <Fragment>
      <div className="board-row">
        <button className="square">1</button>
        <button className="square">2</button>
        <button className="square">3</button>
      </div>
      <div className="board-row">
        <button className="square">4</button>
        <button className="square">5</button>
        <button className="square">6</button>
      </div>
      <div className="board-row">
        <button className="square">7</button>
        <button className="square">8</button>
        <button className="square">9</button>
      </div>
    </Fragment>
  );
}
