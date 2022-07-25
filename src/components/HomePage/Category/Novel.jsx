import React from 'react'
import {Box, Flex, Text, Link} from "@chakra-ui/react"
import {list} from "../../../data/ListBook"
const Novel = ({name,chap, index, link}) => {
  return (
    <Box  p="2" >
            <Flex alignItems='center' justifyContent='space-between' 
              borderTop='1px solid #e6e6e6' >
                <Text mr="20px" mt='10px'  fontSize='14px' p='2'
                style={{background: index+2 == 2 ? '#fc7403': '' || index+2 == 3 ? '#f8cc1c' : ''}}>{index+2}</Text>
                <Link href={link} w="70%" noOfLines={1} textAlign='left'>{name}</Link>   
                <Text w="10%" noOfLines={1}>{chap}</Text>
            </Flex>    
    </Box>
  )
}

export default Novel