let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/mydb";
mongodb+srv://fares:Fares2004@cluster0.upootro.mongodb.net/?retryWrites=true&w=majority


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
  