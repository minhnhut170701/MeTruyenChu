import React from 'react'
import {Grid, GridItem, Box, Button, Text, Flex, Spacer} from "@chakra-ui/react"
const Category = () => {
  return (
    <Grid templateColumns='repeat(1, 1fr)' gap={0} w="30%">
      {/* 1 color */}
      <GridItem w='100%' bgColor='#f7f6f2' p={2} >
        <Flex alignItems='center' justifyContent='space-between'>
          <Box w='100%' >
            <Flex alignItems='center'>
                <em className='icon-font'>&#xe610;</em>
                <p style={{marginLeft: '10px'}}>Tiên Hiệp</p>
            </Flex>
          </Box>
          <Box w='100%'>
            <Flex alignItems='center'>
                <em className='icon-font'>&#xe642;</em>
                <p style={{marginLeft: '10px'}}>Huyền Huyễn</p>
            </Flex>
            
          </Box>
        </Flex>
      </GridItem>
      {/* 2 */}
      <GridItem w='100%'  p={2}>
        <Flex alignItems='center' justifyContent='space-between'>
          <Box w='100%'>
            <Flex alignItems='center'>
                <em className='icon-font'>&#xe62c;</em>
                <p style={{marginLeft: '10px'}}>Đô Thị</p>
            </Flex>
            
          </Box>
          <Box w='100%'>
            <Flex alignItems='center'>
                <em className='icon-font'>&#xe603;</em>
                <p style={{marginLeft: '10px'}}>Khoa Huyễn</p>
            </Flex>
          </Box>
        </Flex>
      </GridItem>
      {/* 3 color */}
      <GridItem w='100%'  p={2} bgColor='#f7f6f2'>
        <Flex alignItems='center' justifyContent='space-between'>
          <Box w='100%'>
            <Flex alignItems='center'>
                <em className='icon-font'>&#xe62f;</em>
                <p style={{marginLeft: '10px'}}>Kỳ Huyễn</p>
            </Flex>
          </Box>
          <Box w='100%'>
            <Flex alignItems='center'>
                <em className='icon-font'>&#xe632;</em>
                <p style={{marginLeft: '10px'}}>Võ Hiệp</p>
            </Flex>
          </Box>
        </Flex>
      </GridItem>
      {/* 4 */}
      <GridItem w='100%'  p={2}>
        <Flex alignItems='center'>
          <Box w='100%'>
            <Flex alignItems='center'>
                <em className='icon-font'>&#xe62d;</em>
                <p style={{marginLeft: '10px'}}>Lịch Sử</p>
            </Flex>
          </Box>
          <Box w='100%'>
            <Flex alignItems='center'>
                <em className='icon-font'>&#xe641;</em>
                <p style={{marginLeft: '10px'}}>Đồng Nhân</p>
            </Flex>
          </Box>
        </Flex>
      </GridItem>
      {/* 5 color */}
      <GridItem w='100%'  p={2} bgColor='#f7f6f2'>
        <Flex alignItems='center'>
          <Box w='100%'>
            <Flex alignItems='center'>
                <em className='icon-font'>&#xe602;</em>
                <p style={{marginLeft: '10px'}}>Quân Sự</p>
            </Flex>
          </Box>
          <Box w='100%'>
            <Flex alignItems='center'>
                <em className='icon-font'>&#xe617;</em>
                <p style={{marginLeft: '10px'}}>Du Hí</p>
            </Flex>
          </Box>
        </Flex>
      </GridItem>
      {/* 6 */}
      <GridItem w='100%'  p={2}>
        <Flex alignItems='center'>
          <Box w='100%'>
            <Flex alignItems='center'>
                <em className='icon-font'>&#xe614;</em>
                <p style={{marginLeft: '10px'}}>Cạnh Kỹ</p>
            </Flex>
          </Box>
          <Box w='100%'>
            <Flex alignItems='center'>
                <em className='icon-font'>&#xe634;</em>
                <p style={{marginLeft: '10px'}}>Linh Dị</p>
            </Flex>
          </Box>
        </Flex>
      </GridItem>
      {/* 7 color */}

      <GridItem w='100%'  p={2} bgColor='#f7f6f2'>
          <Flex>
            <Box w='100%'>
              <Flex alignItems='center'>
                  <em className='icon-font'>&#xe67c;</em>
                  <p style={{marginLeft: '10px'}}>Ngôn Tình</p>
              </Flex>
            </Box>
            <Box w='100%'>
              <Flex alignItems='center'>
                  <em className='icon-font'>&#xe631;</em>
                  <p style={{marginLeft: '10px'}}>Tất Cả</p>
              </Flex>
            </Box>
          </Flex>
      </GridItem>
      
      
    </Grid>
  )
}

export default Category
