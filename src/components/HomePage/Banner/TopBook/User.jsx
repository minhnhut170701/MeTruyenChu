import React from 'react'
import {Box, Flex, Text, Image} from "@chakra-ui/react"
const User = () => {
  return (
    <Box w='100%'>
      <Flex>
          <Box bgImage="url('https://truyen.tangthuvien.vn/images/cover2.jpg')"
           bgPosition='center' bgRepeat='no-repeat' bgSize='cover' w='230px' h="150px"
           position='relative'>
            <Flex flexDirection='column' justifyContent='center' alignItems='center'
               mt='20px'>
              <Image src="https://www.nae.vn/ttv/ttv/public/images_user/1b845e195d1c1e80fa8662c8160aa72b7bf0fabbbcd29f926a1c90cde67bc71a.jpg"
              alt='user' borderRadius='50%' w='80px' h="80px"  style={{boxShadow: '1px 2px 10px #d9d4c7'}}
              />
              <Text color='white' fontWeight='semibold' fontSize='lg'>why03you</Text>
            </Flex>
            {/* Box note */}
            <Box position='absolute' top='-50px' right='-50px' w='100px' h='100px' bgColor='red'
           style={{transform: 'rotate(45deg)'}}></Box>
            <Text position='absolute' zIndex={2} textColor='white' fontSize='12px'
            top='3px' right='0' style={{transform: 'rotate(45deg)'}} textAlign='center'
            fontWeight='semibold'>
                No.1 <br /> Coverter 
            </Text>
          </Box>
          <Box bgImage="url('https://truyen.tangthuvien.vn/images/cover1.jpg')"
          bgPosition='center' bgRepeat='no-repeat' bgSize='cover' w='230px' h="150px" 
          zIndex={0} position='relative'>
              <Flex flexDirection='column' justifyContent='center' alignItems='center'
               mt='20px'>
              <Image src="https://www.nae.vn/ttv/ttv/public/images_user/120722.png"
              alt='user' borderRadius='50%' w='80px' h="80px"  
              style={{boxShadow: '1px 2px 10px #d9d4c7'}}
              />
              <Text color='white' fontWeight='semibold' fontSize='lg'>why03you</Text>
            </Flex>
             {/* Box note */}
             <Box position='absolute' top='-50px' right='-50px' w='100px' h='100px' 
             bgColor='#327c86'
              style={{transform: 'rotate(45deg)'}}></Box>
              <Text position='absolute' zIndex={4} textColor='white' fontSize='12px'
              top='3px' right='0' style={{transform: 'rotate(45deg)'}} textAlign='center'
              fontWeight='semibold'>
                  No.1 <br /> Đại Gia
              </Text>
          </Box>
          <Box bgImage="url('https://truyen.tangthuvien.vn/images/cover3.jpg')"
           bgPosition='center' bgRepeat='no-repeat' bgSize='cover' w='240px' h="150px"
           zIndex={0} position='relative' overflow='hidden'>
              <Flex flexDirection='column' justifyContent='center' alignItems='center'
               mt='20px'>
              <Image src="https://nae.vn/ttv/ttv/public/images_user/239334.png"
              alt='user' borderRadius='50%' w='80px' h="80px" 
              style={{boxShadow: '1px 2px 10px #d9d4c7'}}
              />
              <Text color='white' fontWeight='semibold' fontSize='lg'>why03you</Text>
            </Flex>
            {/* Box note */}
            <Box position='absolute' top='-50px' right='-50px' w='100px' h='100px' 
            bgColor='#a3af1e'
              style={{transform: 'rotate(45deg)'}}></Box>
              <Text position='absolute' zIndex={4} textColor='white' fontSize='12px'
              top='3px' right='0' style={{transform: 'rotate(45deg)'}} textAlign='center'
              fontWeight='semibold'>
                  No.1 <br /> Tiêu Phí
              </Text>
          </Box>
      </Flex>

    </Box>
  )
}

export default User