import axios from "axios";

const url = 'https://rest-api-tangthuvien.onrender.com/cover/list'

const getData = async () =>{
    const res = await axios.get(url)
    return Array.from(new Set(res.data))
}

const NovelNewUpdateService = {
    getData,
}

export default NovelNewUpdateService