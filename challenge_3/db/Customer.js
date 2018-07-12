const connection = require ('./app');

const getAll = function (cb ) {
  connection.query ('select * from CustomerInfo', (err, data) => {
  if (err) {
    cb(err);
    return;
  }
  cb(null, data); 
  });
};

//adds to list
const addInfo = function (name, emailid, cb) {
  const query = 'Insert into CustomerInfo (name, emailid) values (?,?)';
  connection.query(query, [name, emailid], cb);
};

const addAddr = function (id, line1, line2, city, state, zipcode, CustomerInfoid , cb) {
  const query = 'Insert into Address (line1, line2, city, state, zipcode, CustomerInfoid)' values (?,?,?,?,?,?);
  connection.query (query, [line1, line2, city, state, zipcode, CustomerInfoid], cb);
}; 


const addCredit = function (id, ccno, expiry, cvv, CustomerInfoid , cb) {
  const query = 'Insert into credit (id, ccno, expiry, cvv, CustomerInfoid)' values (?,?,?,?,?);
  connection.query (query, [id, ccno, expiry, cvv, CustomerInfoid], cb);
};


module.exports = {
  getAll,
  addInfo,
  addAddr,
  addCredit
}