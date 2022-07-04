import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button
  } from '@chakra-ui/react'

  import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    useDisclosure,
  } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getlist, Updateit } from '../redux/action'
import { useNavigate } from 'react-router-dom'

export const DatTable = ()  => {

    const dispatch = useDispatch()

    useEffect(()=>{getlist(dispatch)},[])

    var lst = useSelector(store=>store.list)

    const navi= useNavigate();

    return (
       <>
       
        <TableContainer>
  <Table variant='simple'>
    <Thead>
      <Tr>
        <Th>Id</Th>
        <Th>Country</Th>
        <Th>City</Th>
        <Th>Population</Th>
        <Th>Edit</Th>
        <Th>Delete</Th>
      </Tr>
    </Thead>
    <Tbody>

      { lst.map((e)=>(

    <Tr key={e.id}>
    <Td>{e.id}</Td>
    <Td>{e.country}</Td>
    <Td>{e.nm}</Td>
    <Td>{e.pop}</Td>
    <Td><Button><InitialFocus id={e.id}/></Button></Td>
    <Td><Button>Delete</Button></Td>
    </Tr>

      ))}
    </Tbody>
  </Table>
</TableContainer>
<br />
<br />
<br />
<Button onClick={()=> navi("/add-city")}>add</Button>
       </>
    )

}


function InitialFocus({id}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const [country,setCountry] = useState("");
    const [city,setCity] = useState("");
    const [population,setPopulation] = useState("");
    const dispatch = useDispatch()
  
    return (
      <>
        <Button onClick={onOpen}>Edit</Button>
  
        <Modal
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Country</FormLabel>
                <Input placeholder='country' onChange={(e)=>{setCountry(e.target.value)}}/>
              </FormControl>

              <FormControl>
                <FormLabel>City</FormLabel>
                <Input placeholder='city' onChange={(e)=>{setCity(e.target.value)}} />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Population</FormLabel>
                <Input placeholder='population' onChange={(e)=>{setPopulation(e.target.value)}} />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={()=>{
                Updateit(dispatch,country,city,population,id);
                onClose()
            }}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }