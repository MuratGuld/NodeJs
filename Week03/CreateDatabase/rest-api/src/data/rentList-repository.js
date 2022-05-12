import db from "../commons/database.js";

// get
export const getRents = async () => {
  return await db.query(`SELECT * FROM rents`);
};

// post
export const createRent = async (pRent) => {
  return await db.query(`INSERT 
  INTO rents 
  VALUES(${pRent.movieId}, ${pRent.duration}, '${pRent.person}')`);
};
