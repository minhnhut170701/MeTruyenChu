import React, {useEffect} from 'react'
import Novel from './Novel'
import {Box,Flex, Text, Image} from "@chakra-ui/react"
import { useSelector, useDispatch } from 'react-redux'
import { getDataTD } from '../../../features/NovelTop/NovelTopSlice'
const FollowNovel = () => {
  const dispatch = useDispatch()
  const {dataTD} = useSelector((state) => state.novelTop)
  useEffect(() =>{
    dispatch(getDataTD())
}, [dispatch])
  return (
    <Box w='30%'>
     <Text fontSize='18px' fontWeight='semibold' borderBottom='1px'>Theo Dõi Nhiều</Text>
        <Box mt='20px'>
          <Flex alignItems='center'>
              <Text mr="20px" p='2' bg='#d32f2f' textColor='white' fontSize='14px'>1</Text>
                <Box mr="20px">
                    <Text>Trò Chơi Này Cũng Quá</Text>
                    <Text>205 Đề cử</Text>
                    <Text>Khoa huyễn</Text>
                </Box>
                <Image src="https://www.nae.vn/ttv/ttv/public/images/story/a9e7efdf021895765e8aeb828842e51a88b4b45bf2b802aca2fd1b6902cae7b4.jpg"
                alt="Trò Chơi Này Cũng Quá" loading='lazy' w='100px' h="130px" />
            </Flex>
            {dataTD.slice(0,9).map((item, index) =>(
              <Novel name={item.title} chap={item.chap} index={index} link={item.link} />
            ))}
        </Box>
    </Box>
  )
}

export default FollowNovel