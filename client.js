//establishes a connecction with the game server
const net = require('net');
const connect = () => {
  const conn = net.createConnection({
    host: 'localhost',//IP address here,
    port: 50541, //PORT number here,
  });

  //interpret incoming data as text
  conn.setEncoding('utf8');
  
  conn.on('connect', () => {
      console.log('Successfully connected to game server!')
      conn.write('Name: TWC')
    }
  )
  
  conn.on('data', (data) => {
    //code that does something
    console.log('Server says: ', data)
  });

  return conn;
};



module.exports = {connect};