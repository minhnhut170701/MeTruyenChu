import React from 'react'

import {Box, Flex, Text, Image} from "@chakra-ui/react"
import Category from './Category'
import TopBook from './TopBook/TopBook'
import News from './News'
const Banner = () => {
  
  return (
    <Box>
      {/* desktop */}
      <Box w='1218px' mx='auto' display={{md: 'block', base: 'none'}}>
        <Flex w="100%" minHeight='0'>
            <Category />
            <TopBook />
            <News />

        </Flex>    
       
      </Box>
      {/* mobile */}
      <Box w='100%' p='4' display={{md:'none', base: 'block'}} mt='15px' bg='white'>
        {/* menu */}
        <Flex w='100%' alignItems='center' justifyContent='space-between' >
            <Flex flexDirection='column' alignItems='center'>
              <Box bgImage='url(https://m.truyen.tangthuvien.vn/images/sprite.png)'
                bgSize='87px 87px' bgPosition='-63px -28px' w='24px' h='26px'> 
              </Box>
              <Text>Thể loại</Text>
            </Flex>
            <Flex flexDirection='column' alignItems='center'>
              <Box bgImage='url(https://m.truyen.tangthuvien.vn/images/sprite.png)'
                bgSize='87px 87px' bgPosition='0 0' w='24px' h='26px'> 
              </Box>
              <Text>Xếp hạng</Text>
            </Flex>
            <Flex flexDirection='column' alignItems='center'>
              <Box bgImage='url(https://m.truyen.tangthuvien.vn/images/ic_filter.png)'
                bgRepeat='no-repeat' bgSize='contain' bgPosition='center' w='24px' h='26px'> 
              </Box>
              <Text>Bộ lọc</Text>
            </Flex>
            <Flex flexDirection='column' alignItems='center'>
              <Box bgImage='url(https://m.truyen.tangthuvien.vn/images/sprite.png)'
                bgSize='87px 87px' bgPosition='-30px -30px' w='24px' h='26px'> 
              </Box>
              <Text>Top User</Text>
            </Flex>
            <Flex flexDirection='column' alignItems='center'>
              <Box bgImage='url(https://m.truyen.tangthuvien.vn/images/sprite.png)'
                bgSize='87px 87px' bgPosition='0 -60px' w='24px' h='26px'> 
              </Box>
              <Text>Review</Text>
            </Flex>
        </Flex>
        <Image src="https://truyen.tangthuvien.vn/images/banner-app-ttv.jpg" alt="logo Your Novel"
      w='100%' h="100px" mt='60px' />
      </Box>
    </Box>
    
  )
}

export default Banner