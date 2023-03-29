import React from 'react';

// this creates a component
// in React, a component is a piece of code that represents 
// a resuable part of a user interface
// `export` makes this function available outside of this file
// The `default` keyword tells other files using your code that it’s the main function in your file.
export default function Square() {
  // <button> is a JSX element
  return <button className="square">X</button>;
}
