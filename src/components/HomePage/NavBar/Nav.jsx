
import React from 'react'
import Menu from './Menu'
import SearchBar from './SearchBar'
import {Box} from "@chakra-ui/react"

const Nav = () => {
  return (
    <Box p={{md:'0', base: '4'}}>
        <SearchBar />
        <Menu />
    </Box>
  )
}

export default Nav