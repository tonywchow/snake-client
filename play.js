const {connect} = require('./client')
const {setupInput} = require('./input')

////structure as event handler:
// conn.on('connect', () => {
//   //doe that does something when the connection is first established
// })

console.log('Connecting ...');
connect();
setupInput();
