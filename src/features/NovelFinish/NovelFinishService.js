import axios from "axios";
const url = 'https://rest-api-tangthuvien.onrender.com/cover/finish'

const getDataFinish = async () =>{
   const res =  await axios.get(url)
   return Array.from(new Set(res.data))
}

const NovelFinishService = {
    getDataFinish
}

export default NovelFinishService