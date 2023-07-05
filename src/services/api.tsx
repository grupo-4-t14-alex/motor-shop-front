import axios from "axios";

const api = axios.create({
    baseURL: "https://motors-shop-5z9q.onrender.com",
    timeout: 5000
})


export default api