import React, {useEffect} from 'react'
import {Box, Flex, Image, Text, Link} from '@chakra-ui/react'
import {useDispatch, useSelector} from "react-redux"
import TopNovel from './TopNovel'
import PeopleNovel from './PeopleNovel'
import Favourite from './Favourite'
import FollowNovel from '../Category/FollowNovel'
import { getDataFinish } from '../../../features/NovelFinish/NovelFinishSlice'
const CategoryNovel = () => {
  const dispatch = useDispatch()
  const {data} = useSelector((state) => state.finishNovel)

  useEffect(() => {
    dispatch(getDataFinish())
  
  }, [dispatch])
  
  return (
    <Box p={{md: '0', base: '4'}}>
      {/* desktop */}
      <Box w="80%" mx="auto" mt='50px' display={{md: 'block', base: 'none'}}>
        <Flex>
              <TopNovel />
              <PeopleNovel />
              <Favourite />
              <FollowNovel />
        </Flex>

        <Image src="https://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/141841ca350aef7afc245e3439abeeca.jpg"
        alt="Name banner" loading='lazy' title='banner name' w="100%" h="100%" mt="40px" />

              
      </Box>
      {/* mobile */}
      <Box display={{md: 'none', base: 'block'}} p='4' bg='white'>
        <Flex alignItems='center' justifyContent='space-between' mb='5px'>
          <Text textTransform='uppercase' fontSize='18px' 
          borderLeft='4px' p='2' borderLeftColor='#ed424b'>Truyện Xem Nhiều</Text>
          <Link href='#' textTransform='uppercase' fontSize='18px'>Xem Thêm</Link>
        </Flex>
        <Flex p='2' justifyContent='space-between'>
              {data.slice(0,4).map((item) =>(
                <Link href={item.link} key={item.name} w="83px">
                    <Image src={item.image} alt={item.name}
                     w='100%' />
                    <Text noOfLines={2}>{item.name}</Text>
                </Link>
              ))}
            </Flex>
      </Box>

    </Box>
    
  )
}

export default CategoryNovel