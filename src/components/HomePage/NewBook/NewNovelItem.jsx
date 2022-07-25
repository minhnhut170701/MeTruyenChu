import React from 'react'
import { Box, GridItem, Image, Text, Flex, Link} from "@chakra-ui/react"
import {AiOutlineUser} from "react-icons/ai"

const NewNovelItem = ({name, image, key, link, author}) => {
  return (
    <GridItem key={key}>
        <Link href={link}>
            <Flex alignItems='center'>
                <Image src={image}
                alt="name book" title='name book' loading='lazy' w='72px' h='96px' mr='10px' />
                <Box fontSize='13px'>
                    <Text fontWeight='semibold' noOfLines={1} fontSize='16px'>{name}</Text>
                    <Text noOfLines={2}>Trong lúc vô tình lấy được một trò chơi, bên trong kịch bản đặc sắc xuất...</Text>
                    <Flex justifyContent='space-between' alignItems='center' mt='2'>
                        <Flex alignItems='center' sx={{color: 'var(--text-chap-color)'}} w='60%'>
                            <Text mr="10px"><AiOutlineUser /></Text>
                            <Text noOfLines={1}>{author}</Text>
                        </Flex>
                        <Text p='0 3px' border='1px solid #bfbfbf' textColor='#bfbfbf'>Khoa huyễn</Text>
                    </Flex>
                </Box>
            </Flex>
        </Link>
        
    </GridItem>
  )
}

export default NewNovelItem
