//establishes a connection with the game server
//Connect functiuon returns an object that can be used to interact with the server
const net = require('net');
const {IP, PORT} = require('./constants');
const connect = () => {
  const conn = net.createConnection({
    host: IP,//IP address here,
    port: PORT, //PORT number here,
  });

  //interpret incoming data as text
  conn.setEncoding('utf8');
  
  conn.on('connect', () => {
    console.log('Successfully connected to game server!');
    conn.write('Name: TWC');
    setTimeout(() =>{
      conn.write('Say: Let\'s GO!');
    }, 1000);
    conn.on('data', (data) =>  {
      console.log('Server: ', data);
      });
  });
  return conn;
};
module.exports = {connect};