import axios from '../config/axiosConfig';

const authService = {
    async register  (userData){
        const response = await axios.post( '/auth/register', userData);
        return response.data;
    },
    async login(userData) {
        const response = await axios.post( '/auth/login', userData);
        return response.data;
    }
};
export default authService;