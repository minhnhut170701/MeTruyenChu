import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getDataFinish} from "../../../features/NovelFinish/NovelFinishSlice"
import {Box, Flex, Text, Image, Grid} from "@chakra-ui/react"
import RecommendUpdate from './RecommendUpdate'
import NovelListFinish from './NovelListFinish'
const FinishBook = () => {
  const dispatch = useDispatch()
  const {data} = useSelector((state) => state.finishNovel)

  useEffect(() =>{
      dispatch(getDataFinish())
  }, [dispatch])
  return (
    <Box w="1213px" mx='auto' mt='50px'>
          <Box w='100%' mr="40px">
                <Text fontSize='18px' fontWeight='bold'
                borderBottom='1px'>Truyện Hoàn Thành</Text>
                <Flex>
                    <Box mr="20px" w='30%'>
                          <RecommendUpdate hot={data} />
                    </Box>
                    <Grid w='70%' templateColumns='repeat(2, 1fr)' gap='6' p='4'>
                        {data.slice(0,6).map((item) =>(
                             <NovelListFinish name={item.name} image={item.image} key={item.name} infor={item.infor} 
                             link={item.link} author={item.author} cate={item.category}/>
                        ))}
                    </Grid>
                </Flex>
          </Box>
        <Image src="https://img.qidian.com/upload/gamesy/2022/04/01/202204011514413z6jhjzhj5.jpg"
        alt="name banner" title='name banner' w='100%' h='100%' mt='40px' />
    </Box>
  )
}

export default FinishBook
