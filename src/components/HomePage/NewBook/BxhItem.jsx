import React from 'react'
import { Flex, Text, Link} from "@chakra-ui/react"

const BxhItem = ({key,title, stt, link}) => {
  return (
    <Link href={link}>
      <Flex alignItems='center' key={key} mt='10px'>
          <Text mr='10px'>{stt}</Text>
          <Text noOfLines={1} >{title}</Text>
      </Flex>
    </Link>
   
  )
}

export default BxhItem