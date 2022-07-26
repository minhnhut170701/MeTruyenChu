import React, {useEffect}from 'react'
import {Box, Flex, Text} from "@chakra-ui/react"
import { useDispatch, useSelector } from 'react-redux'
import TopConvert from './TopConvert'
import ListNewConvert from './ListNewConvert'
import TopRich from './TopRich'
import { getDataUpdate } from '../../../features/NovelNewUpdate/NovelNewUpdateSlice'
const BookUpdate = () => {
    const dispatch = useDispatch()
    const {data} = useSelector((state) => state.novelUpdate)
    useEffect(() =>{
        dispatch(getDataUpdate())
    }, [dispatch])
  return (
    <Box w='1220px' mx='auto' mt='50px' display={{md: 'block', base:'none'}}>
       <Flex>
        {/* Top converter */}
            <Box p='3' w='20%'>
                <TopConvert />
            </Box>
        {/* Mới cập nhật */}
            <Box m='3' w='80%'>
                <Flex alignItems='center' justifyContent='space-between'>
                    <Text>Mới Cập nhật</Text>
                    <Text>Xem Thêm</Text>
                </Flex>
                <ListNewConvert data={data} />
            </Box>
       </Flex>
    </Box>
  )
}

export default BookUpdate