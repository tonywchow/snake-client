//establishes a connection with the game server
const net = require('net');
const {IP, PORT} = require('./constants')
const connect = () => {
  const conn = net.createConnection({
    host: IP,//IP address here,
    port: PORT, //PORT number here,
  });

  //interpret incoming data as text
  conn.setEncoding('utf8');
  
  conn.on('connect', () => {
      console.log('Successfully connected to game server!')
      conn.write('Name: TWC');

      // setInterval(() => {
      //   conn.write('Move: up');
      // }, 100)
      // setTimeout(() =>{
      //   conn.write('Move: up');
      // }, 100)

    }
  )

  conn.on('data', (data) => {
    //code that does something
    console.log('Server says: ', data)
  });

  return conn;
};



module.exports = {connect};