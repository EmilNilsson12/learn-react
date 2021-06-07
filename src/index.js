import React from 'react';
import ReactDOM from 'react-dom';

const element = <h1>Hello world!!!!!!</h1>;
// Babel compiles the code above INTO the code below:
// const element = React.createElement('h1', null, 'Helldow world!');

ReactDOM.render(element, document.getElementById('root'));
