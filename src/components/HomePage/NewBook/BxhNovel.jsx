import React from 'react'
import {Box, Flex, Text, Image, position} from "@chakra-ui/react"
import {list} from "../../../data/ListBook"
import BxhItem from './BxhItem'
const BxhNovel = ({bxh}) => {
  return (
    <Box>
        <Text borderBottom='1px'>BXH book</Text>
        <Flex mt='20px'>
            <Box mr="10px">
                    <Text>NO.1</Text>
                    <Text>Thanh Liên Chi Đỉnh</Text>
                    <Text>Tác Giả</Text>
                    <Text>Thể Loại</Text>
            </Box>
            <Box transform='perspective(60px) rotateY(-10deg)' w='52px' h='105px' position='relative'
            _after={{content: '""', bgColor:'#efefef', boxShadow: 'inset 0 0 5px #333',
            height: '92%', w:'10%', left: '100%', top: '2%', position:'absolute',
            transform: 'perspective(60px) rotateY(30deg)'}}>

            <Image src='https://bookcover.yuewen.com/qdbimg/349573/1033054345/90'
                alt='name book' title='name book' loading='lazy' w='62px' h='100px'
                transform='translateZ(0px)'/>
            </Box>
        </Flex>
        {/* line 2 */}
        <Box>
            {bxh.map((item, i) =>(
                <BxhItem title={item.name} key={item.id} stt={i+2} link={item.link} />
            ))}
            
        </Box>
        
    </Box>
  )
}

export default BxhNovel
