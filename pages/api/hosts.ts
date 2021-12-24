import axios, { AxiosResponse } from 'axios';
import { API_BASE_PATH } from '../../utils/constants';

export async function getHostApi(token: string) {
  try {
    const url = `${API_BASE_PATH}/products/host`;
    const { data }: AxiosResponse = await axios.get(url,{
      headers: {
        contentType: 'application/json-rpc' ,
        authorization: token 
      }
    });
    return data.result;
  } catch(err){
    console.log(err);
    return null;
  }
}