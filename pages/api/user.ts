import axios, { AxiosResponse } from 'axios';
import { API_BASE_PATH } from '../../utils/constants';

export async function registerApi(formData: object) {
  try {
    const url = `${API_BASE_PATH}/auth/signup`;
    const {data: response} : AxiosResponse = await axios.post(url,
      formData,
      {
      headers: {
        contentType: 'application/json' ,
      }
    });
    return response.data;
  } catch(err){
    console.log('Error: ', err);
    return null;
  }
}

export async function loginApi(formData: object) {
  try {
    const url = `${API_BASE_PATH}/auth/signin`;
    const {data: response} : AxiosResponse = await axios.post(url,
      formData,
      {
      headers: {
        contentType: 'application/json' ,
      }
    });
    return response.data;
  } catch(err){
    console.log('Error: ', err);
    return null;
  }
}