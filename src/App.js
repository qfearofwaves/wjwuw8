import React, {Fragment} from 'react';

function Square({ value }) {
  function handleClick() {
    console.log('clicked!');
  }
  return (
    <button className="square"  onClick={handleClick}>
      {value}
    </button>
  );

}
// this creates a component
// in React, a component is a piece of code that represents 
// a resuable part of a user interface
// `export` makes this function available outside of this file
// The `default` keyword tells other files using your code that it’s the main function in your file.
export default function Board() {
  // <button> is a JSX element
  return (
    // https://stackoverflow.com/questions/48316365/react-fragment-shorthand-failing-to-compile
    // <></> the shorthand won't work
    <Fragment>
      <div className="board-row">
        <Square value=" "/>
        <Square value="2"/>
        <Square value="3"/>
      </div>
      <div className="board-row">
        <Square value="4"/>
        <Square value="5"/>
        <Square value="6"/>
      </div>
      <div className="board-row">
        <Square value="7"/>
        <Square value="8"/>
        <Square value="9"/>
      </div>
    </Fragment>
  );
}
