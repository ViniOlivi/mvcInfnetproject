const data = [
  {
    id: "1",
    description: "Beatles - V.I.P",
  },
  {
    id: "2",
    description: "Oasis - Open Bar",
  },
  {
    id: "3",
    description: "Queen - Premium",
  },
  {
    id: "4",
    description: "Pink Floyd - Standard",
  },
  {
    id: "5",
    description: "The Smiths - Table",
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
  getAllSections: getAll,
  getSectionsById: getById,
};
