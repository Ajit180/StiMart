import axiosconfig from "../../config/axiosconfig";


export const getallcategoryRequest =async()=>{

    try {

        const response = await axiosconfig.get('category/getall');
        
        console.log("All Value fetched in the category",response.data);
        return response?.data;
        
        
    } catch (error) {
           console.log("The Error is getting while fetching the getallcategoryRequest",error);
           throw error.response?.data || error;
    }
}