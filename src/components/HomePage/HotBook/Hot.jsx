import React from 'react'
import {Box, Flex } from "@chakra-ui/react"
import TopNew from './TopNew'
import ListNew from './ListNew'
const Hot = () => {
  return (
    <Box w='80%' overflow='hidden' mx='auto' mt='100px'>
        <Flex>
            <TopNew />
            <ListNew />
        </Flex>
    </Box>
  )
}

export default Hot