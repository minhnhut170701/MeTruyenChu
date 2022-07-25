import React, {useState} from 'react'
import {Box, Grid} from "@chakra-ui/react"
import ListNewItem from './ListNewItem'
const ListNew = () => {
    const [position, setPosition] = useState(0)
  return (
    <Box ml="30px" w={{base: '60%', md:'auto'}}>
        <Grid templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)'}} 
        gap={{base: 4, md:12}}>
                <ListNewItem position="-206px" title='Huyền Huyễn'/>
                <ListNewItem position="-167px" title='Tiên Hiệp'/>
                <ListNewItem position="0px" title='Đô Thị'/>
                <ListNewItem position="-245px" title='Khoa Huyễn'/>
                <ListNewItem position="-119px" title='Linh Dị'/>
                <ListNewItem position="-36px" title='Ngôn Tình'/>

        </Grid>
    </Box>
  )
}

export default ListNew
