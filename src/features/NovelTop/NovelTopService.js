import axios from "axios";

const API_URL_DC = 'https://rest-api-tangthuvien.onrender.com/cover/list/dc'
const API_URL_XN = 'https://rest-api-tangthuvien.onrender.com/cover/list/xn'
const API_URL_YT = 'https://rest-api-tangthuvien.onrender.com/cover/list/yt'
const API_URL_TD = 'https://rest-api-tangthuvien.onrender.com/cover/list/td'

//get top đề cử
const getDataDC = async () =>{
    const response = await axios.get(API_URL_DC)
    return Array.from(new Set(response.data))
}
//get top xem nhiều
const getDataXN = async () =>{
    const response = await axios.get(API_URL_XN)
    return Array.from(new Set(response.data))
}
//get top yêu thích
const getDataYT = async () =>{
    const response = await axios.get(API_URL_YT)
    return Array.from(new Set(response.data))
}
//get top theo dõi
const getDataTD = async () =>{
    const response = await axios.get(API_URL_TD)
    return Array.from(new Set(response.data))
}

const NovelTopService = {
    getDataDC,
    getDataXN,
    getDataYT,
    getDataTD
}

export default NovelTopService