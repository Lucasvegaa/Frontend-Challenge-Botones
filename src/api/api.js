import axios from "axios";

const baseURL = `${process.env.REACT_APP_APIURL}/api/`;

const getAllButton = async (state) => {
  try {
    const response = await axios.get(`${baseURL}Botones/GetAllButton`);
    state(response.data);
  } catch (error) {
    console.log(error);
  }
};

const addButton = async (state) => {
  try {
    const response = await axios.post(`${baseURL}Botones/AddButton`);
    state((prevState) => !prevState);
  } catch (error) {
    console.log(error);
  }
};

const AddClickButton = async (id) => {
  try {
    const response = await axios.patch(`${baseURL}Botones/AddClickButton`, null, {
      params: { id: id },
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteButton = async (id) => {
  try {
    const response = await axios.delete(`${baseURL}Botones/DeleteButton`, {
      params: { id: id },
    });
  } catch (error) {
    console.log(error);
  }
};
export { getAllButton, addButton, deleteButton, AddClickButton };
