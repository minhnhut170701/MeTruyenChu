import React from 'react'
import {Box, Flex, Text, UnorderedList, ListItem, ListIcon} from "@chakra-ui/react"
import {BsFillVolumeUpFill} from 'react-icons/bs'
const News = () => {
  return (
    <Box w="20%" ml='2' p='4' h='auto' mt='2'>
        <Text textAlign='center' fontSize={18} fontWeight='semibold' >Tin tức</Text>
        <UnorderedList>
            <ListItem marginTop='2'><a href='#'>Đăng ký convert</a></ListItem>
            <ListItem marginTop='2'><a href='#'>Bảng lương convert</a></ListItem>
            <ListItem marginTop='2'><a href='#'>Kiếm tiền với Tàng Thư Viên</a></ListItem>
            <ListItem marginTop='2'><a href='#'>Các đơn vị tiền tệ</a></ListItem>
            <ListItem marginTop='2'><a href='#'>Các bước trở thành một Converter - Không cần ...</a></ListItem>
        </UnorderedList>
       
            <Flex alignItems='center' marginTop='2'>
                <Text textColor='#ed4259' marginRight='2'><BsFillVolumeUpFill /></Text>
                <Text noOfLines={2}>TTV Translate - Ứng dụng convert truyện trên mobile</Text>
            </Flex>
            <Flex alignItems='center' marginTop='2'>
                <Text textColor='#ed4259' marginRight='2'><BsFillVolumeUpFill /></Text>
                <Text noOfLines={2}>Tàng Thư Viện hỗ trợ chi phí cho converter, dịch qweqweqweqweqweqweqweqweqweqwe</Text>
            </Flex>
        
    </Box>
  )
}

export default News