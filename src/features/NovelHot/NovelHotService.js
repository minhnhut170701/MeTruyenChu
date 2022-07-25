import axios from "axios";

const API_URL = 'https://rest-api-tangthuvien.onrender.com/cover/new'

//get book
const getData = async () =>{
    const response = await axios.get(API_URL)
    return Array.from(new Set(response.data))
}

const NovelHotService = {
    getData,
}

export default NovelHotService