const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "TEjas@2599",
  database: "react",
};

async function adduser(user) {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  let addquery = `insert into massage (username, massage) values(?,?)`;
  connection.query(addquery, [
    user.username,
    user.massage
    
  ]);
  console.log("Done....");
  await connection.endAsync();
}

module.exports = { adduser };
let user = {
    username: "tejas",
    massage: "hii tejas!"
    
}
adduser(user);