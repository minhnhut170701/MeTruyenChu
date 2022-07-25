import React from 'react'
import {Flex, Box, Text, Spacer, Button, List, ListItem} from "@chakra-ui/react"
import { AiOutlineMenu, AiOutlineTablet} from "react-icons/ai"
const Menu = () => {
  return (
    <Box w={{md: '100%', base: '1200px'}} mx='auto' mt='2' backgroundColor="#2798A1">
        <Box w={{md: '80%', base:"100%"}} mx='auto' textColor='white'  >
            <Flex  alignItems='center'>
                <Box bg="#077c86" pr='180px'>
                    <Button bg='transparent' leftIcon={<AiOutlineMenu />} fontWeight='normal'>Thể Loại</Button>
                </Box>
                <Spacer />
                <Box ml='-28'>
                    <List>
                        <Flex alignItems='center' justifyContent='center'>
                            <ListItem >
                                <Button pl='6' pr='6'
                                _hover={{bg: '#077c86'}} bg="transparent" rounded='none' fontWeight='normal'>Diễn đàn</Button>
                            </ListItem>
                            
                            <ListItem >
                                <Button pl='6' pr='6'
                                 _hover={{bg: '#077c86'}} bg="transparent" rounded='none' fontWeight='normal'>Bảng xếp hạng</Button>
                            </ListItem>
                           
                            <ListItem >
                                <Button pl='6' pr='6'
                                _hover={{bg: '#077c86'}} bg="transparent" rounded='none' fontWeight='normal'>Bộ lọc</Button>
                            </ListItem>
                           
                            <ListItem >
                                <Button pl='6' pr='6'
                                _hover={{bg: '#077c86'}} bg="transparent" rounded='none' fontWeight='normal'>Review</Button>
                            </ListItem>
                        
                            <ListItem >
                                <Button pl='6' pr='6'
                                _hover={{bg: '#077c86'}} bg="transparent" rounded='none' fontWeight='normal'>Cửa hàng</Button>
                            </ListItem>

                        </Flex>
                    </List>
                </Box>
                <Spacer />
                <Box mr='10'>
                    <Button bg='transparent' fontWeight='normal' rounded='none' _hover={{bg: '#077c86'}} 
                    leftIcon={<AiOutlineTablet />}>Tải App</Button>
                </Box>
            </Flex>
        </Box>
        

    </Box>
  )
}

export default Menu