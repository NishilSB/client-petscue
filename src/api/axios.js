
import axios from  'axios'


// Create an Axios instance
const axiosInstance = axios.create({
    baseURL: 'http://localhost:7000'
});
export const api = axios.create({
    baseURL : 'http://localhost:7000'
})

axiosInstance.interceptors.request.use((config)=>{
    const User=JSON.parse(localStorage.getItem('user') )
    console.log(User.token,"mytoken..................");
    const token = User.token
    if(token){
        console.log(config.headers,"tutrdt8tgy");
        config.headers["userauthorization"] =token
    }

    return config
})
export default axiosInstance
