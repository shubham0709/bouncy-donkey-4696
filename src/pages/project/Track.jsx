import { Box, Button, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import {RiTimerLine} from 'react-icons/ri'
import Sidebar from '../Sidebar'
import DatePicker from "react-multi-date-picker"
import InputIcon from "react-multi-date-picker/components/input_icon"
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineHome } from 'react-icons/ai'

import StopWatch from './Stopwatch'

const Track = () => {
  const [value, setValue] = useState(new Date());
  

 
  return (
    <Flex>
      <Box w="15%" bg="blue.200">
        <Sidebar />
      </Box>
      <Box ml={'5%'} width="80%" border='1px solid green'>
      <Box mt='5%' ml='10%' display='flex'>
   
         
      <DatePicker value={value} onChange={setValue} format="ddd, DD MMMM" 
      render={<InputIcon size='20px'/>}
    />
    <input type='text' value={value} />
    <Box display='flex'width='20%' ml='1%' mt='2px'> 
    <AiOutlineArrowLeft size='20px' style={{marginRight:"6%"}}/>
    <AiOutlineArrowRight size='20px' style={{marginRight:"7%"}}/>
    <AiOutlineHome size='20px'/>
    </Box>
    
    <Box display='flex'    ml='25%' gap='6'> 
   

    <StopWatch/>
    </Box>
         
      
      </Box>
            
      </Box>
      </Flex>
  )
}

export default Track
