import axios from '../config/axiosConfig';

const API_RL = process.env.REACT_APP_API_BASE_URL;
const authService = {
    async register  (userData){
        const response = await axios.post(API_RL + '/auth/register', userData);
        return response.data;
    },
    async login(userData) {
        const response = await axios.post(API_RL + '/auth/login', userData);
        return response.data;
    }
};
export default authService;