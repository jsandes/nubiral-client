import axios, { AxiosResponse } from 'axios';
import { API_BASE_PATH } from '../../utils/constants';

export async function getHostApi() {
    // export async function getHostApi(accessToken) {
  
    // accessToken
  const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWJmZTk4NTk0NmUyZDEzZTMxZThiYmMiLCJpYXQiOjE2NDAwODg0MjksImV4cCI6MTY0MDE3NDgyOX0.F5e2VRBGb06zigvbP5gOafTtW79JdYxawl3qcS0rZOQ';
  console.log('borrarToken', accessToken);
  try {
    const url = `${API_BASE_PATH}/products/host`;
    const { data }: AxiosResponse = await axios.get(url,{
      headers: {
        contentType: 'application/json-rpc' ,
        authorization: accessToken 
      }
    });
    return data.result;
  } catch(err){
    console.log(err);
    return null;
  }
}