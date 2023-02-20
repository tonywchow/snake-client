/*setupInput function places a reference to that object in another variable connection which is in a global scope of that module
*/
let connection;
const setupInput = (conn) => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  connection = conn;
  return stdin;
};
/*
when data comes in from the keyboard, the stdin even handler can now interact with the server because the scope in the handler now includes both data from the keyboard and the connection object
*/
const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    connection.write('Move: up');
  }
  if (key === 'a') {
    connection.write('Move: left');
  }
  if (key === 's') {
    connection.write('Move: down');
  }
  if (key === 'd') {
    connection.write('Move: right');
  }
  if (key === 'f') {
    connection.write('Say: Got em\'');
  }
};

module.exports = {
  setupInput,
};