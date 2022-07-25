import React from 'react'
import {Box, Flex, Image} from '@chakra-ui/react'
import TopNovel from './TopNovel'
import PeopleNovel from './PeopleNovel'
import Favourite from './Favourite'
import FollowNovel from '../Category/FollowNovel'
const CategoryNovel = () => {
  return (
    <Box w="80%" mx="auto" mt='50px'>
      <Flex>
            <TopNovel />
            <PeopleNovel />
            <Favourite />
            <FollowNovel />
      </Flex>

      <Image src="https://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/141841ca350aef7afc245e3439abeeca.jpg"
      alt="Name banner" loading='lazy' title='banner name' w="100%" h="100%" mt="40px" />

            
    </Box>
  )
}

export default CategoryNovel