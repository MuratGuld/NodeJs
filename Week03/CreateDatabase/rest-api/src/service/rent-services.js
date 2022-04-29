import * as rentRepository from "../data/rentList-repository.js";

// get
export const getRents = async () => {
  return await rentRepository.getRents();
};

// post
export const addRent = async (pRent) => {
  return await rentRepository.createRent(pRent);
};
