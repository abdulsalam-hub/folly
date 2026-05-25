
//import { useParams } from "react-router-dom";
import axios from "axios";
import {useEffect} from "react";
const UserLink=axios.create({
  baseURL:'https://productapi.com'
})

export const Fet=() =>
{
  useEffect(() =>
  {
    const data=UserLink.get("/src/components/Items.jsx")
    console.log(data)
  });
  return (
    <>
    </>
)};