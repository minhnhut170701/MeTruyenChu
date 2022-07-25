import React from 'react'

import {Box, Flex, Text} from "@chakra-ui/react"
import Category from './Category'
import TopBook from './TopBook/TopBook'
import News from './News'
const Banner = () => {
  
  return (
    <Box w='1218px' mx='auto' display='block'>
        <Flex w="100%" minHeight='0'>
            <Category />
            <TopBook />
            <News />

        </Flex>    
       
    </Box>
  )
}

export default Banner