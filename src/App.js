import React, {Fragment, useState} from 'react';

function Square() {
  // value stores the value and setValue is a function that can be used to change the value. 
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue('X');
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
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </Fragment>
  );
}
