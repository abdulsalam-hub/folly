import {useEffect} from "react";
import { productData} from './Items'
//import { useParams } from "react-router-dom";
import axios from "axios";


const UserLink = axios.create(
  {
    baseURL: "https://productapi.com",
    adapter: "http",
    data: productData,
    Headers: "application/json"
  }
);

export const Pro=() =>
{
  useEffect(() =>
  {
  (async () => {
  
    const response = await axios({
  
      method: 'get',
  
      url: 'https://productapi.com',
  
      data: {
  
        data:productData
  
      }
  
    });
  
    const data = await response.data;
  
    console.log(data);
  
  })();
},[])
  return (
    <>
    </>
  )
}
