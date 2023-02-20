const {connect} = require('./client');
const {setupInput} = require('./input');
console.log('Connecting ...');
setupInput(connect());//the object returned by connect() is passed to setupInput function