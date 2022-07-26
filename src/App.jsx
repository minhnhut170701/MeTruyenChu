import { useState } from 'react'
import Home from './pages/Home'
import './index.css'
import {Box, Text} from '@chakra-ui/react'
function App() {

  return (
    <Box style={{backgroundColor: '#f6f7f9'}} position='relative' w={{md: '100%', base: 'auto'}}>
        <Home />
        <Box position='fixed' w='90%' h='48px' p='2' display={{md: 'none', base: 'block'}} 
        bg="#339a99" bottom='0' left='30px' mb='20px' rounded='20px'>
          <Text textAlign='center' color='white'>Tải App TTV để sử dụng đầy đủ chức năng</Text>
        </Box>
    </Box>
  )
}

export default App
