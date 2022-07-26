import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Flex, Box, Image, Text, Tabs, TabList, TabPanels, TabPanel, Tab, Link} from "@chakra-ui/react"
import {useDispatch, useSelector} from "react-redux"
import List from './List'
import Recommend from './Recommend'
import Follow from './Follow'
import { getData } from '../../../features/NovelHot/NovelHotSlice'
const ListBook = () => {
  const [dataNovel, setDataNovel] = useState([])
  const dispatch = useDispatch()
  const {data} = useSelector((state) => state.novelHot)

  const fetchData = () =>{
    axios.get("https://rest-api-tangthuvien.onrender.com/cover/list").then((res) =>{
      setDataNovel(res.data)
    })
  }
  useEffect(() => {
    
    fetchData()
    dispatch(getData())
    
  }, [dataNovel, dispatch])

  return (
    <Box p={{md: '0', base: '4'}}>
      
      {/* desktop */}
      <Box w='80%' mx='auto' mt='70px' display={{md: 'block', base: 'none'}}>
          <Flex>
              <List data={dataNovel} />
              <Recommend />
              <Follow data={dataNovel} />
          </Flex>
        <Image src="https://truyen.tangthuvien.vn/images/banner-app-ttv.jpg" alt="logo Your Novel"
        w='100%' h='50px' mt='60px' />
      </Box>
      {/* Mobile */}
      <Box w='100%' display={{md: 'none', base: 'block'}} bg="white" p='4'>
      <Flex alignItems='center' justifyContent='space-between' mb='5px'>
        <Text textTransform='uppercase' fontSize='18px' 
        borderLeft='4px' p='2' borderLeftColor='#ed424b'>Truyện mới cập nhật</Text>
        <Link href='#' textTransform='uppercase' fontSize='18px'>Xem Thêm</Link>
      </Flex>
        <Tabs isFitted variant='unstyled'>
        <TabList>
          <Tab _selected={{color: 'white', bg: 'var(--color-button-mobile)'}}
          sx={{borderColor: 'var(--color-button-mobile)', 
          color: 'var(--color-button-mobile)'}} border='1px' >One</Tab>
          <Tab _selected={{color: 'white', bg: 'var(--color-button-mobile)'}}
          sx={{borderColor: 'var(--color-button-mobile)', 
          color: 'var(--color-button-mobile)'}} border='1px' >Two</Tab>
          <Tab _selected={{color: 'white', bg: 'var(--color-button-mobile)'}}
          sx={{borderColor: 'var(--color-button-mobile)', 
          color: 'var(--color-button-mobile)'}} border='1px' >Three</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Flex p='2' justifyContent='space-between'>
              {data.slice(0,4).map((item) =>(
                <Link href={item.link} key={item.name} w="83px" >
                    <Image src={item.image} alt={item.name}
                     w='100%' />
                    <Text noOfLines={2}>{item.name}</Text>
                </Link>
              ))}
            </Flex>
          </TabPanel>
          <TabPanel>
            <Flex p='2' justifyContent='space-between'>
                {data.slice(2,6).map((item) =>(
                  <Link href={item.link} key={item.name} w="83px" >
                      <Image src={item.image} alt={item.name}
                      w='100%' />
                      <Text noOfLines={2}>{item.name}</Text>
                  </Link>
                ))}
              </Flex>
          </TabPanel>
          <TabPanel>
            <Flex p='2' justifyContent='space-between'>
                  {data.slice(4,8).map((item) =>(
                    <Link href={item.link} key={item.name} w="83px" >
                        <Image src={item.image} alt={item.name}
                        w='100%' />
                        <Text noOfLines={2}>{item.name}</Text>
                    </Link>
                  ))}
              </Flex>
          </TabPanel>
        </TabPanels>
        </Tabs>
      </Box>
    </Box>
    
    
  )
}

export default ListBook