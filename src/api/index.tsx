import axios from "axios";

export const backendAPI = axios.create({ 
  baseURL: "https://api.thecatapi.com/v1", 
  headers: {
    'x-api-key': 'live_daXgOZRFBSM4EQ604PaAu7w0kfX3OlttTIn7tjGs6Idx4p2BqJPHSA7vHG7NYapm'
  }
});
