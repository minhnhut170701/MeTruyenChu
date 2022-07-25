import React from 'react'
import {Box, Flex, Text, TableContainer, Table,Thead, Tr,Td,Tbody, Link} from "@chakra-ui/react"
const ListNewConvert = ({data}) => {
  return (
    <TableContainer  maxWidth='100%' overflowX='hidden' whiteSpace='normal'>
        <Table size='sm' variant='simple' >
            <Tbody>
                {data.slice(0,10).map((item) =>(
                <Tr key={item.name}>
                     <Td ><Link href={item.link} noOfLines={1} sx={{color: 'var(--text-chap-color)'}}>{item.category}</Link></Td>
                     <Td><Link href={item.link} noOfLines={1} sx={{color: 'var(--text-link-color)'}}>{item.name}</Link></Td>
                     <Td ><Link href={item.link} noOfLines={1} sx={{color: 'var(--text-link-low-color)'}}>{item.chap}</Link></Td>
                     <Td ><Link href={item.link} noOfLines={1} sx={{color: 'var(--text-chap-color)'}}>{item.author}</Link></Td>
                 </Tr>
                ))}
               
               
            </Tbody>
        </Table>

    </TableContainer>
  )
}

export default ListNewConvert