import React, { ReactNode } from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  HStack,
  Image,
  Heading
} from '@chakra-ui/react';
import {MdStackedBarChart,MdAlarm,MdOutlineCalendarToday,MdOutlineInput,MdOutlineReduceCapacity,MdOutlineAppSettingsAlt} from "react-icons/md"
import {BsFillGrid3X3GapFill} from 'react-icons/bs'
import {AiOutlineBell} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'

import { IconType } from 'react-icons';
import { ReactText } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

interface LinkItemProps {
  name: string;
  icon: IconType;
}


export default function SimpleSidebar({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')} >
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const navigate = useNavigate();

  const handleTrack = () =>{
    navigate('/track');
  }
  const handleProjects = ()=> {
    navigate('/projects')
  }
  const handleReports = ()=>{
    navigate('/reports')
  }

  return (
    <Box bg = 'gray.100'
      // bg={useColorModeValue('#e1e1e1', 'gray.700')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.300', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="800px"
      overflowY='scroll' 
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
      <BsFillGrid3X3GapFill/>
        <Image src='https://app.myhours.com/assets/myhours_app_logo_icon.svg' alt='sh'/>
      
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>

      <HStack justifyContent='space-between' width='100%' paddingLeft='15px' spacing='20px' mt='6'> 
          <MdAlarm/>
         
         
            <Box flex='1' textAlign='justify' fontWeight='600' color='#375d75' onClick={handleTrack} cursor='pointer'>
             Track
            </Box>
           
           
            </HStack>
            <HStack justifyContent='space-between' width='100%' paddingLeft='15px' spacing='20px' mt='6'>
            <MdOutlineCalendarToday/>
              <Box flex='1' textAlign='justify' fontWeight='600' color='#375d75' onClick={handleProjects} cursor='pointer'>
               Projects
              </Box>
             
              </HStack>
      <Accordion defaultIndex={[0]} allowMultiple  mt='4' border='transparent'>
      <AccordionItem>
        <h2>
          <AccordionButton>
          <HStack justifyContent='space-between' width='100%' spacing='20px'>
          <MdStackedBarChart/>
            <Box flex='1' textAlign='left' fontWeight='600' color='#375d75' onClick={handleReports}>
             Reports
            </Box>
            <Box justifyContent={'right'}>
            <AccordionIcon />
            </Box>
            </HStack>
          </AccordionButton>
        </h2>
        <AccordionPanel bg='rgba(45, 182, 126, 0.15)'>
        <Box textAlign='left' ml='15%' pl='10px'>
        <Text cursor='pointer'>Dashboard</Text>
        <Text cursor='pointer'>Activity</Text>
        <Text cursor='pointer'>Team Pivot</Text>
        <Text cursor='pointer'>Timesheet</Text>
        </Box>
          
        </AccordionPanel>
      </AccordionItem>
    
    </Accordion>
    <Accordion defaultIndex={[0]} allowMultiple  mt='4'   border='transparent'>
    <AccordionItem>
      <h2>
        <AccordionButton>
        <HStack justifyContent='space-between' width='100%' spacing='20px'>
        <MdOutlineInput/>
          <Box flex='1' textAlign='left' fontWeight='600' color='#375d75'>
          Clients
          </Box>
          <Box justifyContent={'right'}>
          <AccordionIcon />
          </Box>
          </HStack>
        </AccordionButton>
      </h2>
      <AccordionPanel bg='rgba(45, 182, 126, 0.15)'>
      <Box textAlign='left' ml='15%' pl='10px'>
      <Text cursor='pointer'>Client</Text>
      <Text cursor='pointer'>Invoice</Text>
      <Text cursor='pointer'>Uninvoiced</Text>
     
      </Box>
        
      </AccordionPanel>
    </AccordionItem>
  
  </Accordion>
  <Accordion defaultIndex={[0]} allowMultiple  mt='4'  border='transparent'>
  <AccordionItem>
    <h2>
      <AccordionButton>
      <HStack justifyContent='space-between' width='100%' spacing='20px'>
      <MdOutlineReduceCapacity/>
        <Box flex='1' textAlign='left' fontWeight='600' color='#375d75'>
         Team
        </Box>
        <Box justifyContent={'right'}>
        <AccordionIcon />
        </Box>
        </HStack>
      </AccordionButton>
    </h2>
    <AccordionPanel bg='rgba(45, 182, 126, 0.15)'>
    <Box textAlign='left' pl='10px' ml='15%'>
    <Text cursor='pointer'>Team Members</Text>
    <Text cursor='pointer'>Team</Text>
   
   
    </Box>
      
    </AccordionPanel>
  </AccordionItem>

</Accordion>
<HStack justifyContent='space-between' width='100%' height='100px' paddingLeft='15px' spacing='20px' mt='20' bg='rgba(45, 182, 126, 0.15)'>

  <Box flex='1' textAlign='left' w='60%' fontWeight='600' color='#375d75' pl='1rem'>
  <Text color='#375d75'>Pro trial expires in 12 days.
 </Text>
  <Heading as = 'h5' fontSize='1.25rem'> Keep/leave the Pro</Heading>
 
  </Box>
 
  </HStack>
  <HStack justifyContent='space-between' width='100%' paddingLeft='15px' spacing='20px' mt='6'>
  <Icon />
    <Box flex='1' textAlign='justify' fontWeight='600' color='#375d75'>
     Help
    </Box>
   
    </HStack>
    <HStack justifyContent='space-between' width='100%' paddingLeft='15px' spacing='20px' mt='6'>
    <MdOutlineAppSettingsAlt/>
      <Box flex='1' textAlign='justify' fontWeight='600' color='#375d75'>
       Apps
      </Box>
     
      </HStack>
      <HStack justifyContent='space-between' width='100%' paddingLeft='15px' spacing='20px' mt='6'>
      <AiOutlineBell/>
        <Box flex='1' textAlign='justify' fontWeight='600' color='#375d75'>
         What's new
        </Box>
       
        </HStack>
        <HStack justifyContent='space-between' width='100%' paddingLeft='15px' spacing='20px' mt='6'>
        <CgProfile/>
          <Box flex='1' textAlign='justify' fontWeight='600' color='#375d75'>
          Profile
          </Box>
         
          </HStack>

  
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
    </Flex>
  );
};