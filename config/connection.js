const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'mysql://v9zt9nk3h5uenld8:c5f62ja5dfdkxovp@hwr4wkxs079mtb19.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/qdzcw8i0dw09h11q',
  port: 3306,
  user: 'v9zt9nk3h5uenld8',
  password: 'c5f62ja5dfdkxovp',
  database: 'qdzcw8i0dw09h11q',
});

connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;