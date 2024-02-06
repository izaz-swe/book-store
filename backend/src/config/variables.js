const DB_URL = process.env.MONGODB_URL;
const NODE_ENV = process.env.NODE_ENV;
const PORT = process.env.PORT;
const jwtSecret = process.env.JWT_SECRET;
module.exports = {
  DB_URL,
  NODE_ENV,
  PORT,
  jwtSecret,
};