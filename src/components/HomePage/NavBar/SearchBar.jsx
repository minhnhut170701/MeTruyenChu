import React from 'react'
import { Box, Flex, Spacer, Image, FormControl, Input, Button, Text} from '@chakra-ui/react'
import {AiOutlineSearch, AiFillBook, AiOutlineDownload,AiOutlineUser} from "react-icons/ai"
const SearchBar = () => {
  return (
    <Box>
        {/* desktop */}
        <Box w={{md: '80%', base: '100%'}} display={{md:'block', base:'none'}} mx="auto" p="6">
        <Flex alignItems='center' justifyContent={{md: 'space-between'}}>
            {/* logo */}
            <Box>
                <Image src='https://truyen.tangthuvien.vn/images/logo-web.png' alt='logo'
                w={{md: '240px', base: '180px'}} h={{md: '52px', base: '25px'}} objectFit='contain' />
            </Box>
            {/* form search */}
            <FormControl isRequired  w={{md: '30%', base: '50%'}}  >
                <Flex alignItems='center'>
                    <Input w="300px" h="40px" pr="10" rounded='none'
                    placeholder='Nhập tên truyện hoặc tác giả..' />
                    <Button type='submit' 
                    color="white" fontSize="15px" rounded='none' bg="#2798A1" _hover={{bg: '#077c86'}} >
                        <AiOutlineSearch size="24" />
                        
                    </Button>
                </Flex> 
            </FormControl>
            <Button fontSize={{md: '16px', base: '14px'}} leftIcon={<AiFillBook />} variant="outline" p='4' ml='5px'>
               <Text display={{md: 'block', base: 'none'}}>Tài Khoản</Text>
            </Button>
        </Flex>
        </Box>
        {/* mobile */}
        <Box display={{md: 'none', base:'block'}} p='4'>
            <Flex alignItems='center' justifyContent='space-between' >
                <Flex alignItems='center'>   
                    <Text mr='10px' fontSize='17px' fontWeight='500'>Tàng Thư Viện</Text>
                    <Button sx={{color: 'var(--color-button-mobile)',
                    borderColor: 'var(--color-button-mobile)'}} border='1px' bg='white' fontSize='10px' pl='4' pr='4' >Diễn Dàn</Button>
                </Flex>
                <Flex alignItems='center'>
                    <Button leftIcon={<AiOutlineDownload size='20px'/>} bg="#2798A1" color="white" 
                    fontSize='12px' mr='10px' pr='4' pl='4'>
                        App
                    </Button>
                    <Text><AiOutlineUser size='20px' color='#ed424b'/></Text>
                </Flex>
            </Flex>
        
        </Box>
       
    </Box>
    
  )
}

export default SearchBar