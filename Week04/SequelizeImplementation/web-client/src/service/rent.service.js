export const getRentList = async () => {
  try {
    const response = await fetch("http://localhost:5000/rents");
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
