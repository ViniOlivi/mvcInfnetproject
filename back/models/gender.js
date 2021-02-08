const data = [
  {
    id: "1",
    description: "Male",
  },
  {
    id: "2",
    description: "Female",
  },
];

const getById = (id) => {
  console.log("Inicio getById: " + id);
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
  getAllGender: getAll,
  getGenderById: getById,
};
