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

