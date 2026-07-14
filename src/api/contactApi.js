import axios from "axios";

const API = axios.create({
    baseURL: "https://contactmanagerf-csmb-mohana.onrender.com"
});

export default API;
