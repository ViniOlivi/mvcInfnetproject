const data = [
  {
    id: "1",
    description: "Manchester-Uk - 24/06/2021",
  },
  {
    id: "2",
    description: "London-UK - 24/07/2021",
  },
  {
    id: "3",
    description: "Araraquara - 22/08/2021",
  },
  {
    id: "4",
    description: "Pescara - 21/09/2021",
  },
];

const getById = (id) => {
  const response = data.find((item) => {
    return item.id === id;
  });

  console.log("response getById method: ");
  console.log(response);

  return response;
};

const getAll = () => {
  return data;
};

module.exports = {
  getAllLocations: getAll,
  getLocationsById: getById,
};
