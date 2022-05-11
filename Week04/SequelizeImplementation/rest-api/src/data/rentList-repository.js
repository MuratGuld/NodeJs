import Rent from "../models/RentModel.js";

// get
export const getRents = async () => {
  return await Rent.findAll();
};

// post
export const createRent = async (pRent) => {
  return await Rent.create(pRent);
};
