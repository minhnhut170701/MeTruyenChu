import React from 'react'
import {Box, Text, Image, Flex, Button} from "@chakra-ui/react"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay} from "swiper";
const TopListNewNoVel = ({hot}) => {
  return (
    <Box p='6'>
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
        {hot.slice(0,3).map((item) =>(
          <SwiperSlide key={item.id}>
            <Flex textAlign='center' alignItems='center' justifyContent='center' flexDirection='column'>
                <Image src={item.image}
                alt={item.name} title={item.name} loading='lazy' w='93px' h='100%' mb='30px'/>
                <Text>{item.name}</Text>
                <Text textColor='red.600'>Hội Thuyết Thoại Đích Hồ Tử</Text>
                <Text>602 Chương</Text>
                <Text noOfLines={3}>Đi tới thế giới này 3 tháng, Sở Nam chính là tại mưu cầu loại đan dược này, không...</Text>
                <Button textColor='white' bg='#ff751a' mt='40px'>Đọc Truyện</Button>
            </Flex>  
        </SwiperSlide>

        ))}

      </Swiper>
    </Box>
  )
}

export default TopListNewNoVel