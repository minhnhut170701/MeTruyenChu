import React from 'react'
import {Flex, Box, Text, Spacer} from "@chakra-ui/react"
const List = ({data}) => {
  return (
    <Box w='30%' p='2'>
        <Text fontWeight='bold' fontSize='18px' borderBottom='1px'>Truyện mới xem</Text>
            {data.map((item) =>(
            <Flex alignItems='center' mt='10px' borderBottom='1px'
             borderBottomColor='#b3b3b3' p='1'>
                <Text noOfLines={1} mr='20px' w='60%'>{item.name}</Text>
                <Text w='30%' noOfLines={1} textColor='#b3b3b3'
                fontSize='14px'>
                   {item.chap}
                  </Text>
            </Flex>
            ))}
          
        
        
        
    </Box>
  )
}

export default List