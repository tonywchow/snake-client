const net = require('net');

//establishes a connecction with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',//IP address here,
    port: 50541, //PORT number here,
  });

  //interpret incoming data as text
  conn.setEncoding('utf8');
  
  conn.on('data', (data) => {
    //code that does something
    console.log('Server says: ', data)
  });
  return conn;
};

////structure as event handler:
// conn.on('connect', () => {
//   //doe that does something when the connection is first established
// })

console.log('Connecting ...');
connect();

