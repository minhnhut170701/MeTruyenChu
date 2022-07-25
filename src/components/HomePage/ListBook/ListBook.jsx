import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Flex, Box, Image, Text} from "@chakra-ui/react"
import List from './List'
import Recommend from './Recommend'
import Follow from './Follow'
const ListBook = () => {
  const [data, setData] = useState([])

  const fetchData = () =>{
    axios.get("https://rest-api-tangthuvien.onrender.com/cover/list").then((res) =>{
      setData(res.data)
    })
  }
  useEffect(() => {
    
    fetchData()
    
  }, [data])

  return (
    <Box w='80%' mx='auto' mt='70px'>
        <Flex>
            <List data={data} />
            <Recommend />
            <Follow data={data} />
        </Flex>
      <Image src="https://truyen.tangthuvien.vn/images/banner-app-ttv.jpg" alt="logo Your Novel"
      w='100%' h="100px" mt='60px' />
    </Box>
    
  )
}

export default ListBook