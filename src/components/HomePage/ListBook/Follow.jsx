import React from 'react'
import {Flex, Box, Text, Spacer} from "@chakra-ui/react"
const Follow = ({data}) => {
  return (
    <Box w='30%' p='2'>
    <Text fontWeight='bold' fontSize='18px' borderBottom='1px'>Đang Theo Dõi</Text>
    {data.slice(0,9).map((item) =>(
            <Flex alignItems='center' mt='10px'>
                <Text noOfLines={1} mr='20px' w='60%'>{item.name}</Text>
                <Text w='40%' noOfLines={1}>{item.chap}</Text>
            </Flex>
    ))}
    
</Box>
  )
}

export default Follow