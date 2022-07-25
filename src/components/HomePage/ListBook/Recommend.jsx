import React, {useEffect, useState} from 'react'
import {Box, Text, Flex, Grid, GridItem, Image, Button, Link} from "@chakra-ui/react"
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import axios from 'axios'
const Recommend = () => {
  const [data, setData] = useState([])

  const getDataRecommend = async () =>{
      await axios.get("https://rest-api-tangthuvien.onrender.com/cover/recommend").then((res) =>{
      setData(res.data)
    })
  }
  useEffect(() =>{
    getDataRecommend()
  }, [data])
  return (
    <Box w='55%' p='4'>
      <Text fontSize='20px' fontWeight='semibold'>Biên tập viên đề cử</Text>
      
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        style={{width: '100%', marginLeft: 0, padding: '10px', 
        marginTop: '20px'}}
      >
        <SwiperSlide>
          <Flex>
            <Image src="https://www.nae.vn/ttv/ttv/public/images/story/b43cccd662ad09fe742e1bf021cd42832b1b854840b9873296133bb39e274990.jpg" 
            alt="Thanh Liên Chi đỉnh" w='200px' h='200px' mr="50px" />
            <Box ml="10px" w='100%'>
              <Text>Thanh Liên chi đỉnh</Text>
                <Text mt='20px'>Tiên giới, Thanh Liên Tiên vực. Thanh Liên sơn mạch, nhất tọa rường cột...</Text>
              <Button mt='20px' textColor='white' bgColor='#ff751a' _hover={{bg: '#e65c00'}}>Đọc truyện</Button>
            </Box>
          </Flex>
          
        </SwiperSlide>
        <SwiperSlide>
          <Flex>
            <Image src="https://www.nae.vn/ttv/ttv/public/images/story/15f8138ece1a06e7d49f43782550794d3da625cd67a169c59428e4a3397458f4.jpg" 
              alt="Hàn Môn Tiểu Điềm Thê" w='200px' h='200px' mr="50px" />
            <Box ml="10px" w='100%'>
              <Text>Thanh Liên chi đỉnh</Text>
              <Text mt='20px'>Tiên giới, Thanh Liên Tiên vực. Thanh Liên sơn mạch, nhất tọa rường cột...</Text>
              <Button mt='20px' textColor='white' bgColor='#ff751a' _hover={{bg: '#e65c00'}}>Đọc truyện</Button>
            </Box>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex>
            <Image src="https://www.nae.vn/ttv/ttv/public/images/story/d8c3a5ca67c83c26aa09f548a08a6e8ebd7eb532992dfbaf8b4acd121e19f76d.jpg" 
              alt="Thiên Mệnh Xa Đao Nhân" w='200px' h='200px' mr="50px" />
            <Box ml="10px" w='100%'>
              <Text>Thiên Mệnh Xa Đao Nhân</Text>
              <Text mt='20px'>Bọn hắn là du lịch tứ phương Dự Ngôn giả, cũng thông phong thủy, đi âm...</Text>
              <Button mt='20px' textColor='white' bgColor='#ff751a' _hover={{bg: '#e65c00'}}>Đọc truyện</Button>
            </Box>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex>
          <Image src="https://www.nae.vn/ttv/ttv/public/images/story/d6c2af8d485b569ec1a99919f4c43df40eeb4ef022af6b1ad11b9236d380fa16.jpg" 
              alt="Ngã Hữu Nhất Khẩu Hoàng Kim Quan" w='200px' h='200px' mr="50px" />
           <Box ml="10px" w='100%'>
              <Text>Thanh Liên chi đỉnh</Text>
              <Text mt='20px'>Tiên giới, Thanh Liên Tiên vực. Thanh Liên sơn mạch, nhất tọa rường cột...</Text>
            <Button mt='20px' textColor='white' bgColor='#ff751a' _hover={{bg: '#e65c00'}}>Đọc truyện</Button>
          </Box>

          </Flex>
            
        </SwiperSlide>
        <SwiperSlide>
          <Flex>
            <Image src="https://www.nae.vn/ttv/ttv/public/images/story/0dcab3baf16606eb3950fe53268bf5314e0cc00a828dddae9bbd2b9bef4a10b5.jpg" 
                alt="Quang Âm Chi Ngoại (Thời Gian Bên Ngoài)" w='200px' h='200px' mr="50px" /> 
              <Box ml="10px" w='100%'>
                <Text>Thanh Liên chi đỉnh</Text>
                <Text mt='20px'>Tiên giới, Thanh Liên Tiên vực. Thanh Liên sơn mạch, nhất tọa rường cột...</Text>
                <Button mt='20px' textColor='white' bgColor='#ff751a' _hover={{bg: '#e65c00'}}>Đọc truyện</Button>
              </Box>
          </Flex>
            
        </SwiperSlide>
      </Swiper>
        
     
     
      <Grid templateColumns='repeat(2, 1fr)' w='100%' gap='4' mt='30px'>
          {data.map((item) =>(
            <GridItem>
              <Link href={item.link}>
                  <Text noOfLines={1} fontWeight='semibold'>{item.name}</Text>
                  <span style={{color: '#e65c00', fontSize:'18px'}}>{item.chap}</span><span style={{marginLeft: '5px', color: '#e65c00'}}>chương</span>
                  <Text noOfLines={1}>{item.infor}</Text>
              </Link>
          </GridItem>
          ))}
          
          
      </Grid>
    </Box>
  )
}

export default Recommend