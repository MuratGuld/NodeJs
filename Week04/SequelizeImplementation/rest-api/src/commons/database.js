import { Sequelize } from "sequelize";
import Movie from "../models/MovieModel.js";
import Rent from "../models/RentModel.js";

const sequelize = new Sequelize("moviesdb", "root", "db1234", {
  host: "localhost",
  dialect: "mysql",
  dialectOptions: {},
  define: {
    freezeTableName: true,
  },
});

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    await Movie.sync();
    await Rent.sync();
    console.log("Connected to the Database!");
  } catch (error) {
    console.log("Error");
  }
};

connectToDatabase();