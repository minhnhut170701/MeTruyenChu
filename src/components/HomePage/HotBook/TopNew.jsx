import React from 'react'
import {Box, Text, Image, Flex, Button} from "@chakra-ui/react"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
const TopNew = () => {
  return (
    <Box w={{md: '20%', base:'40%'}}>
        <Text borderBottom='1px' p='2' fontSize='18px'
        fontWeight='bold'>Truyện Hot</Text>
        <Box w='100%' bg='#f0f0f0' p='4'>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay]}
        className="mySwiper"
       
      >
        <SwiperSlide>
            <Flex textAlign='center' alignItems='center' justifyContent='center' flexDirection='column'>
                <Image src="https://bookcover.yuewen.com/qdbimg/349573/1034053590/90"
                alt="name-book" loading='lazy' w='93px' h='100%' mb='30px'/>
                <Text>Phi Bình Thường Tam</Text>
                <Text textColor='red.600'>Hội Thuyết Thoại Đích Hồ Tử</Text>
                <Text>602 Chương</Text>
                <Text noOfLines={3}>Đi tới thế giới này 3 tháng, Sở Nam chính là tại mưu cầu loại đan dược này, không...</Text>
                <Button textColor='white' bg='#ff751a' mt='40px'>Đọc Truyện</Button>
            </Flex>
            
        </SwiperSlide>
        <SwiperSlide>
            <Flex textAlign='center' alignItems='center' justifyContent='center' flexDirection='column' >
                <Image src="https://bookcover.yuewen.com/qdbimg/349573/1033893287/90"
                alt="name-book" loading='lazy' w='93px' h='100%'  mb='30px'/>
                <Text>Phi Bình Thường Tam</Text>
                <Text textColor='red.600'>Hội Thuyết Thoại Đích Hồ Tử</Text>
                <Text>602 Chương</Text>
                <Text noOfLines={3}>Đi tới thế giới này 3 tháng, Sở Nam chính là tại mưu cầu loại đan dược này, không...</Text>
                <Button textColor='white' bg='#ff751a' mt='40px'>Đọc Truyện</Button>
            </Flex>    
        </SwiperSlide>
        <SwiperSlide>
            <Flex textAlign='center' alignItems='center' justifyContent='center' flexDirection='column'>
                <Image src="https://bookcover.yuewen.com/qdbimg/349573/1031933380/90"
                alt="name-book" loading='lazy' w='93px' h='100%'  mb='30px'/>
                <Text>Phi Bình Thường Tam</Text>
                <Text textColor='red.600'>Hội Thuyết Thoại Đích Hồ Tử</Text>
                <Text>602 Chương</Text>
                <Text noOfLines={3}>Đi tới thế giới này 3 tháng, Sở Nam chính là tại mưu cầu loại đan dược này, không...</Text>
                <Button textColor='white' bg='#ff751a' mt='40px'>Đọc Truyện</Button>
            </Flex>
            
        </SwiperSlide>
      </Swiper>

    </Box>
    </Box>
    
  )
}

export default TopNew