import React from 'react'
import {Box, List, ListItem, Flex, Image, Text} from "@chakra-ui/react"
const Footer = () => {
  return (
    <Box w="100%" mt='40px' bg="#f8f8f8" borderTop='1px' borderColor='#e7e7e7' p='6'>
        <Box w={{md: '1223px', base: '100%'}} mx='auto'>
            <Flex alignItems='center' textColor='#4E4E4E' 
            flexDirection={{md: 'row', base: 'column'}}>
                <Image src="https://truyen.tangthuvien.vn/images/logo-web-gray.png"
                alt='name logo' title='name logo' loading='lazy' maxW='100%' h='60px' />
                <Box ml='40px'>
                    <Text>© 2007 Tàng Thư Viện</Text>
                    <Text>Tàng Thư Viện là sân chơi mở và free cho cộng đồng fan kiếm hiệp, tiên hiệp, ngôn tình. Chúc các bạn có những giây phút thư giãn thoải mái sau giờ làm việc và học tập căng thẳng.</Text>
                </Box>
            </Flex>
        </Box>

    </Box>
  )
}

export default Footer