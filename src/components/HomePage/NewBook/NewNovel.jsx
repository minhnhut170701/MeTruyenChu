import React, { useEffect} from 'react'
import {Box, Flex, Text, Image, Grid, Link} from "@chakra-ui/react"
import TopListNewNoVel from './TopListNewNoVel'
import NewNovelItem from './NewNovelItem'
import BxhNovel from './BxhNovel'

import { useSelector, useDispatch } from 'react-redux'
import { getData } from '../../../features/NovelHot/NovelHotSlice'

const NewNovel = () => {
    const dispatch = useDispatch()
    const {data} = useSelector((state) => state.novelHot)

    useEffect(() =>{
        dispatch(getData())
        
    }, [dispatch])

  return (
    <Box p={{md: '0', base: '4'}}>
        {/* desktop */}
        <Box w="1213px" mx='auto' mt='50px' display={{md: 'block', base: 'none'}}>
                <Flex justifyContent='space-between' alignItems='center'>
                    {/* Left */}
                    <Box w='80%' mr="40px">
                        <Text fontSize='18px' fontWeight='bold'
                        borderBottom='1px'>Truyện Mới</Text>
                        <Flex>
                            <Box mr="20px" w='30%'>
                                <TopListNewNoVel hot={data} />
                            </Box>
                            <Grid w='70%' templateColumns='repeat(2, 1fr)' gap='6' p='4'>
                                {data.slice(0,6).map((item) =>(
                                    <NewNovelItem name={item.name} image={item.image} key={item.name} link={item.link} author={item.author} />
                                ))}
                            </Grid>
                        </Flex>
                    </Box>
                    {/* right */}
                    <Box w='20%'>
                    <BxhNovel bxh={data.slice(1,9)} />
                    </Box>
                </Flex>
                <Image src="https://img.qidian.com/upload/gamesy/2022/04/01/202204011514413z6jhjzhj5.jpg"
                alt="name banner" title='name banner' w='100%' h='100%' mt='40px' />
        </Box>
        {/* mobile */}
      <Box display={{md: 'none', base: 'block'}} p='4' bg="white">
        <Flex alignItems='center' justifyContent='space-between' mb='5px'>
          <Text textTransform='uppercase' fontSize='18px' 
          borderLeft='4px' p='2' borderLeftColor='#ed424b'>Truyện Mới</Text>
          <Link href='#' textTransform='uppercase' fontSize='18px'>Xem Thêm</Link>
        </Flex>
        {data.slice(0,6).map((item) =>(
          <Link href={item.link} key={item.name}>
            <Flex alignItems="center">
              <Image src={item.image} alt={item.name} w='66px' h='88px'
              mr='20px'  m='25px' />
              <Box>
                  <Text noOfLines={2} fontSize='16px' 
                  fontWeight='semibold'>{item.name}</Text>
                  <Text>Thể Loại: {item.category}</Text>
                  <Text>Tác Giả: {item.author}</Text>
              </Box>

            </Flex>
          </Link>
          
        ))}
      </Box>
    </Box>
    
  )
}

export default NewNovel
