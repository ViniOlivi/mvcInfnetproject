const data = [
  {
    id: "UK",
    description: "Manchester - 24/06/21",
  },
  {
    id: "UK",
    description: "London-UK - 24/07/21",
  },
  {
    id: "BR",
    description: "Araraquara - 22/08/21",
  },
  {
    id: "IT",
    description: "Pescara - 21/09/21",
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
