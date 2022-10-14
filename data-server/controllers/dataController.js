const connection = require("../dbConnect");

const db = {
  getCounts: (cb) => {
    connection.query("SELECT counts FROM mydb.visitor", (err, data) => {
      if (err) throw err;
      cb(data);
    });
  },
  // data 반환 필요없으니까 걍 arrowfunction
  incCounts: (cb) => {
    connection.query(
      "UPDATE mydb.visitor SET counts = counts+1 WHERE id=1;",
      (err) => {
        if (err) throw err;
        cb(JSON.stringify("업데이트 성공"));
      }
    );
  },
};

module.exports = db;
