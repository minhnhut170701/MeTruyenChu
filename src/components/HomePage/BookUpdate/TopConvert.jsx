import React ,{useState, useEffect}from 'react'
import {Box, Flex, Image, Text, Link} from "@chakra-ui/react"
import axios from 'axios'
const TopConvert = () => {
    const [data, setData] = useState([])
    const fetchData =  async () =>{
        const res = await axios.get('https://rest-api-tangthuvien.onrender.com/top/coventer')
        return setData(res.data)
    }
    useEffect(() =>{
        fetchData()
    }, [data])
  return (
    <Box>
        <Text>Top Converter</Text>
        {/* Line top 1 */}
        <Flex alignItems='center' justifyContent='space-between'>
            <Box>
                <Text>NO.1</Text>
                <Text>Lãnh Phong</Text>
                <Text>5161 Chương</Text>
            </Box>
            <Image src="https://www.nae.vn/ttv/ttv/public/images_user/31811.png"
            alt='name convert' title='name convert' w='80px' h='80px' />
        </Flex>
        {/* line 2 */}
        {data.slice(1,9).map((item) =>(
            <Link href={item.link}>
                <Flex alignItems='center' justifyContent='space-between' mt='10px'
                borderTop='1px' sx={{borderTopColor: 'var(--border-color)'}} >
                    <Flex alignItems='center'>
                        <Text mr='5px' fontWeight='bold'>{item.top}</Text>
                        <Text>{item.name}</Text>
                    </Flex>
                    <Text textColor='gray.400'>{item.number}</Text>
                </Flex>
            </Link>
        ))}
        
         
    </Box>
  )
}

export default TopConvert