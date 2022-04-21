import * as rentRepository from "../data/rentList-repository.js";

// get
export const getRents = async () => {
  const rents = await rentRepository.getRentList();
  return await rents;
};

// post
export const addRent = async (pRent) => {
  const rents = await rentRepository.createRent(pRent);
  return await rents;
};
