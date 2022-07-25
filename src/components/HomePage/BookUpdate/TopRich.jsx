import React from 'react'
import {Box, Flex, Text, Image} from "@chakra-ui/react"
const TopRich = () => {
  return (
    <Box>
        <Flex alignItems='center' justifyContent='space-between'>
            <Box>
                <Text>NO.1</Text>
                <Text>yappa</Text>
                <Text>205028 thạch</Text>
            </Box>
            <Image src="https://www.nae.vn/ttv/ttv/public/images_user/120722.png"
            alt="name" title='name' loading='lazy' w='80px' h='80px' />
        </Flex>
    {/* line 1 */}
        <Flex alignItems='center' justifyContent='space-between' mt='10px' borderTop='1px'>
            <Flex>
                <Text mr='10px'>1</Text>
                <Text>luoihoc</Text>
            </Flex>

            <Text>120615</Text>
        </Flex>
        {/* line 2 */}
        <Flex alignItems='center' justifyContent='space-between' mt='10px' borderTop='1px'>
            <Flex>
                <Text mr='10px'>2</Text>
                <Text>luoihoc</Text>
            </Flex>

            <Text>120615</Text>
        </Flex>
        {/* line 3 */}
        <Flex alignItems='center' justifyContent='space-between' mt='10px' borderTop='1px'>
            <Flex>
                <Text mr='10px'>3</Text>
                <Text>luoihoc</Text>
            </Flex>

            <Text>120615</Text>
        </Flex>
        {/* line 4 */}
        <Flex alignItems='center' justifyContent='space-between' mt='10px' borderTop='1px'>
            <Flex>
                <Text mr='10px'>4</Text>
                <Text>luoihoc</Text>
            </Flex>

            <Text>120615</Text>
        </Flex>
        {/* line 5 */}
        <Flex alignItems='center' justifyContent='space-between' mt='10px' borderTop='1px'>
            <Flex>
                <Text mr='10px'>5</Text>
                <Text>luoihoc</Text>
            </Flex>

            <Text>120615</Text>
        </Flex>
        {/* line 6 */}
        <Flex alignItems='center' justifyContent='space-between' mt='10px' borderTop='1px'>
            <Flex>
                <Text mr='10px'>6</Text>
                <Text>luoihoc</Text>
            </Flex>

            <Text>120615</Text>
        </Flex>
    </Box>
  )
}

export default TopRich