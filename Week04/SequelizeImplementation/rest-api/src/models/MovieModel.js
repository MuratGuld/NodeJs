import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("moviesdb", "root", "db1234", {
  host: "localhost",
  dialect: "mysql",
  dialectOptions: {},
  define: {
    freezeTableName: true,
  },
});

const Movie = sequelize.define("Movie", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  income: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Movie;
