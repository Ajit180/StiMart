import axios from "axios";

const axiosIntance= axios.create({
   baseURL:process.env.NEXT_PUBLIC_BACKEND_API_URL
})

export default axiosIntance;