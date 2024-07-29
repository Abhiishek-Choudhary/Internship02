import axios from "axios";

const API_URL = "http://localhost:8000";

export const saveData = async(data) =>{
   try{
     const response = await axios.post(`${API_URL}/save`, data);
     return response;
   }
   catch(error){
    console.error("Error while calling save data api", error.message);
   }
}

export const loginUser = async (data) => {
    try {
      const response = await axios.post(`${API_URL}/login`, data);
      return response
    } catch (error) {
      console.error('Error while calling login API:', error.message);
    }
  }