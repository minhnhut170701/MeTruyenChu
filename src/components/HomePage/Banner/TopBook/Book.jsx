import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import {Image, Box, Flex, Text} from "@chakra-ui/react"
const Book = () => {
  return (
    <Box w='auto' position='relative'>
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
                <Image w="700px" h='300px'
                src='https://truyen.tangthuvien.vn/images/intro/ttv-translate-1.jpg' alt="banner" />
         </SwiperSlide>
         <SwiperSlide>
                <Image w="700px" h='300px'
                src='https://truyen.tangthuvien.vn/images/slide7.jpg' alt="banner" />
         </SwiperSlide>
         <SwiperSlide>
                <Image w="700px" h='300px'
                src='https://truyen.tangthuvien.vn/images/slide9.jpg' alt="banner" />
         </SwiperSlide>
         <SwiperSlide>
                <Image w="700px" h='300px'
                src='https://truyen.tangthuvien.vn/images/slide8.jpg' alt="banner" />
         </SwiperSlide>
         <SwiperSlide>
                <Image w="700px" h='300px'
                src='https://truyen.tangthuvien.vn/images/slide3.jpg' alt="banner" />
         </SwiperSlide>
      </Swiper>
      <Flex alignItems='center' justifyContent='space-around'
       bgColor='#333' backdropBlur='2px' opacity=".8" 
      position='absolute' zIndex={2} 
      bottom={0} left={0} w="100%">
        <Box color='white' border='2px' borderColor='transparent' 
        borderRightColor='white' p={2}>
            <Text>TTV Translate</Text>
        </Box>
        <Box color='white' border='2px' borderColor='transparent' 
        borderRightColor='white' p={2}>
            <Text>Lâm Uyên Hành</Text>
        </Box>
        <Box color='white' border='2px' borderColor='transparent' 
        borderRightColor='white' p={2}>
            <Text>Vạn cổ Tối Cường</Text>
        </Box>
        <Box color='white' border='2px' borderColor='transparent' 
        borderRightColor='white' p={2}>
            <Text>Quỷ Bí Chi Chủ</Text>
        </Box>
        <Box color='white'>
            <Text>Phàm Nhân Tu Tiên</Text>
        </Box>

      </Flex>

    </Box>
    
  )
}

export default Book