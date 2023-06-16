import axios from "axios";

const api = axios.create({
    //falta url
    baseURL:"http://localhost:3000",
    timeout:10000
})


export default api