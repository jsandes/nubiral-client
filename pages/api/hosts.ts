import axios, { AxiosResponse } from 'axios';

export async function getHostApi() {
  const BASE_PATH = 'http://localhost:4000/api/products/host';
  const borrarToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWJmZTk4NTk0NmUyZDEzZTMxZThiYmMiLCJpYXQiOjE2NDAwODg0MjksImV4cCI6MTY0MDE3NDgyOX0.F5e2VRBGb06zigvbP5gOafTtW79JdYxawl3qcS0rZOQ';
  console.log('borrarToken',BASE_PATH);
  try {
    const url = BASE_PATH;
    const { data }: AxiosResponse = await axios.get(url,{
      headers: {
        contentType: 'application/json-rpc' ,
        authorization: borrarToken 
      }
    });
    return data.result;
  } catch(err){
    console.log(err);
    return null;
  }
}