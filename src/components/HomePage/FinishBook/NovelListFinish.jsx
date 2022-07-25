import React from 'react'
import { Box, GridItem, Image, Text, Flex, Link} from "@chakra-ui/react"
import {AiOutlineUser} from "react-icons/ai"
const NovelListFinish = ({name, image, key, infor, link, author, cate}) => {
  return (
    <GridItem key={key}>
      <Link href={link}>
        <Flex alignItems='center'>
          <Image src={image}
          alt="name book" title='name book' loading='lazy' w='72px' h='96px' mr='10px' />
          <Box fontSize='13px'>
              <Text fontWeight='semibold' noOfLines={1} fontSize='16px'>{name}</Text>
              <Text noOfLines={2}>{infor}</Text>
              <Flex justifyContent='space-between' alignItems='center'>
                  <Flex alignItems='center' sx={{color: 'var(--text-chap-color)'}} w='60%'>
                      <Text mr="10px"><AiOutlineUser /></Text>
                      <Text>{author}</Text>
                  </Flex>
                  <Text sx={{color: 'var(--text-chap-color)', borderColor:'var(--text-chap-color)' }} border='1px'
                  p='0 3px' >
                    {cate}
                  </Text>
              </Flex>
          </Box>
      </Flex>
      </Link>
   
    </GridItem>
  )
}

export default NovelListFinish