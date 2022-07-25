import React from 'react'
import Book from './Book'
import User from './User'
import {Box} from "@chakra-ui/react"
const TopBook = () => {
  return (
    <Box style={{padding: '10px'}} w="55%" >
      <Book  />
      <User />
    </Box>
  )
}

export default TopBook