import { AppError } from './../utils/AppError';
import axios from "axios";


 const api = axios.create({
  baseURL:  'http://192.168.0.102:3333'
});

api.interceptors.request.use(response => response,error =>{
  if(error.response && error.response.data){
  return Promise.reject(new AppError(error.response.data.message));
  }
 else{
  return Promise.reject(new AppError(error));
}
});

export {api};