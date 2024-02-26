import axios from "axios"

export const getAllProduct = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_KEY}/tour/list-tour`);
    return res.data;
}

export const createTour = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_KEY}/tour/create-tour`, data);
    return res.data;
}

export const updateTour = async(id, data) => {
    const res = await axios.put(`${process.env.REACT_APP_API_KEY}/tour/update-tour/${id}`, data);
    return res.data;
}