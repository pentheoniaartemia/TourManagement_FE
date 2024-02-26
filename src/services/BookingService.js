import axios from "axios";

export const createBooking = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_KEY}/booking/create`, data);
    return res.data;
}

export const updateBooking = async (id, data) => {
    const res = await axios.put(`${process.env.REACT_APP_API_KEY}/booking/update/${id}`, data);
    return res.data;
}