var React = require('react');
var ReactDOM = require('react-dom');

var message = "this message is from kai";

var objOne = {
    name: 'Kai',
    location: 'Taiwan'
};

var objTwo = {
    age: 25,
    ...objOne
};

console.log(objTwo);

ReactDOM.render(
    <h1>Boilerplate app!</h1>,
    document.getElementById('app')
);
