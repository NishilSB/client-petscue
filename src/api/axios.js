
import axios from  'axios'


// Create an Axios instance
const axiosInstance = axios.create({
    baseURL: 'http://localhost:7000'
});

export default axiosInstance