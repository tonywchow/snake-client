const {connect} = require('./client')

////structure as event handler:
// conn.on('connect', () => {
//   //doe that does something when the connection is first established
// })

console.log('Connecting ...');
connect();

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}
const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
}
setupInput();
