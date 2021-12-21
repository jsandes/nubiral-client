import axios, { AxiosResponse } from 'axios';

export async function getHostApi() {
  const BASE_PATH = 'http://localhost:4000/api/products/host';
  const borrarToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWJmZTk4NTk0NmUyZDEzZTMxZThiYmMiLCJpYXQiOjE2Mzk5NjcxMDl9.3xTj_2XRIW6xhyTqxP6ib8PvPrfZ6fQibO6LeTfLFkU';
  console.log('BASE_PATH',BASE_PATH);
  try {
    const url = BASE_PATH;
    const { data }: AxiosResponse = await axios.get(url,{
      headers: {
        contentType: 'application/json-rpc' ,
        authorization: borrarToken 
      }
    });
    console.log('resp data', data.result);
    return data.result;
  } catch(err){
    console.log(err);
    return null;
  }
}