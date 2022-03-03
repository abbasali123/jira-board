const { connect } = require("mongoose");
const { config } = require("dotenv");

const db = () => {
  config(); //invoking the dotenv config here
  const uri = process.env.DB_URI;

  connect(uri, {
    dbName: process.env.DB_NAME,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log("Db Connected");
    })
    .catch((error: Error) => console.error(error.message));
};

export default db;
