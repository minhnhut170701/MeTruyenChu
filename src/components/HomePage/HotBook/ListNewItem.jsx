import React, {useEffect} from 'react'
import {Box, GridItem, Flex, Text, Image} from "@chakra-ui/react"
const ListNewItem = ({position, title}) => {
    
    
  return (
    <GridItem w={{base:'200px', md: "280px"}}>
        {/* title */}
        <Flex justifyContent='space-between' alignItems='center' borderBottom='1px'>
            <Text>{title}</Text>
            <Box 
            style={{backgroundImage: 'url("https://qidian.gtimg.com/qd/images/hot-classify-tag_1x.eec7b..png")'
            ,width:'52px', height: '40px'}} bgPosition={`0 ${position}`} ></Box>
        </Flex>
        {/* List novel */}
        <Text noOfLines={1} mb='10px'>[{title}] Dị thời không trò chơi</Text>
        <Text noOfLines={1} mb='10px'>[{title}] Dị thời không trò chơi</Text>
        <Text noOfLines={1} mb='10px'>[{title}] Dị thời không trò chơi</Text>
        <Text noOfLines={1} mb='10px'>[{title}] Dị thời không trò chơi</Text>
        <Text noOfLines={1} mb='10px'>[{title}] Dị thời không trò chơi</Text>

        
    </GridItem>
  )
}

export default ListNewItem