const {connect} = require('./client')

////structure as event handler:
// conn.on('connect', () => {
//   //doe that does something when the connection is first established
// })

console.log('Connecting ...');
connect();

