import React from 'react'
import {Flex, Box, Text, Spacer, Button, List, ListItem, Image} from "@chakra-ui/react"
import { AiOutlineMenu, AiOutlineTablet,AiOutlineSearch} from "react-icons/ai"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
const Menu = () => {
  return (
    <Box>
        {/* desktop */}
        <Box w={{md: '100%', base: '1200px'}} display={{md: 'block', base: "none"}} mx='auto' mt='2' backgroundColor="#2798A1">
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
        {/* Mobile */}
        <Box display={{md: 'none', base: 'block'}} w='100%'>
                <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                style={{width: '100%'}}
            >
                <SwiperSlide>
                        <Image w="100%"
                        src='https://truyen.tangthuvien.vn/images/intro/ttv-translate-1.jpg' alt="banner" />
                </SwiperSlide>
                <SwiperSlide>
                        <Image w="100%" 
                        src='https://truyen.tangthuvien.vn/images/slide7.jpg' alt="banner" />
                </SwiperSlide>
                <SwiperSlide>
                        <Image w="100%"
                        src='https://truyen.tangthuvien.vn/images/slide9.jpg' alt="banner" />
                </SwiperSlide>
                <SwiperSlide>
                        <Image w="100%"
                        src='https://truyen.tangthuvien.vn/images/slide8.jpg' alt="banner" />
                </SwiperSlide>
                <SwiperSlide>
                        <Image w="100%" 
                        src='https://truyen.tangthuvien.vn/images/slide3.jpg' alt="banner" />
                </SwiperSlide>
            </Swiper>
            <Button leftIcon={<AiOutlineSearch />} w='100%' mt='10px' rounded='15px'>
            Tìm Kiếm
            </Button>
        </Box>
    </Box>
    
  )
}

export default Menu