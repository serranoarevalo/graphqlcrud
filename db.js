import mongoose from "mongoose";

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/graphqlcrud");

const db = mongoose.connection;

db.on("error", () => console.log("Connection error to DB"));
db.once("open", () => console.log("Connection established with DB"));

export default db;
