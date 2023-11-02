import axios from "axios";





const isLocalServer = process.env["LOCAL_SERVER"] === 'true';
const BASE_URL = isLocalServer ? "http://localhost:5000" : "https://goldup-backend.vercel.app";

console.log("process.env['LOCAL_SERVER']:", process.env['LOCAL_SERVER'] )
console.log(BASE_URL)
export default axios.create({
  baseURL: BASE_URL
});