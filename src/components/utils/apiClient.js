import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://appy.trycatchtech.com/v3/puneri_paltan'

})

export default apiClient;
