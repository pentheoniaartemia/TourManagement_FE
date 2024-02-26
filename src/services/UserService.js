import axios from "axios";

export const loginUser = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_KEY}/user/sign-in`, data);
    return res.data;
}

export const createUser = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_KEY}/user/sign-up`, data);
    return res.data;
}


export const updateUser = async (id, data) => {
    const res = await axios.put(`${process.env.REACT_APP_API_KEY}/user/update-user/?id=${id}`, data);
    return res.data;
}
