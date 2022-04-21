const rentList = [
  {
    movieId: 10002,
    duration: 10,
    person: "Kemal",
  },
  {
    movieId: 10003,
    duration: 20,
    person: "Ali",
  },
];

// get
export const getRentList = async () => {
  return await rentList;
};

// post
export const createRent = async (pRent) => {
  rentList.push(pRent);
  return await rentList;
};