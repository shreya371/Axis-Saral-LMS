import { useEffect } from 'react';
import axios from 'axios';


import logo from '../../axis-logo.png';
import crypto from '../../images/crypto-p.jpg';
import propic from '../../images/stake-propic.jpg';
import flowchart from '../../images/flowchart.svg';
import credit from '../../images/credit.png';
import { ChakraProvider, HStack, VStack } from '@chakra-ui/react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button, ButtonGroup,
    Stack,
    Tag

} from '@chakra-ui/react'
import { ChevronDownIcon, Search2Icon, MinusIcon, AddIcon } from '@chakra-ui/icons'
import { Input, Box } from '@chakra-ui/react'

import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { Link, Navigate, Router, useNavigate } from 'react-router-dom';

import { Image } from '@chakra-ui/react'


import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Heading, Text } from '@chakra-ui/react'


import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
} from '@chakra-ui/react'

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
import { useState } from 'react';
const BaseDesign = () => {

    const navigate = useNavigate();

    const sidelist = ['News Feed', "Projects", "Services", "Organization"];
    const fun1 = (side) => {

        alert(side);
        if (side == "documents") {
            navigate("/documents")
        }
        else {
            navigate('/newsfeed');
        }

    }
    return (
        <ChakraProvider >
            <div>
                <div className="sidebarContainer">
                    <img className='axislogo' src={logo} />
                    {/* <div className='sidecolor'>.</div> */}
                    <div className='names-container' >
                        {sidelist.map((side) => (
                            <div className='sep'>
                                <button id="button-id" className='sep' onClick={() => fun1(side)}>{side}</button>
                            </div>
                        ))}
                    </div>

                </div>
                <div className="mainBlock" >
                    <SimpleGrid column='1' >
                        <Box bg='red.50' position='fixed' zIndex='1' >
                            <HStack spacing='700px' mt='20px'>
                                <Breadcrumb ml='20px'>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href='#'><Text as='b'>Project</Text></BreadcrumbLink>
                                    </BreadcrumbItem>

                                    <BreadcrumbItem>
                                        <BreadcrumbLink href='#'><Text as='b'>IT</Text></BreadcrumbLink>
                                    </BreadcrumbItem>

                                    <BreadcrumbItem isCurrentPage>
                                        <BreadcrumbLink href='#'><Text as='b'>Project name</Text></BreadcrumbLink>
                                    </BreadcrumbItem>
                                </Breadcrumb>
                                <Box id="menu" bg='white' w='315px' h='59px' mt='10px' mr='10px'   >
                                    <HStack spacing='2px' float='right' pt='9px' >
                                        <Box id="search" w='214px' h='41px' bg='gray' boxShadow='md'>
                                            <HStack mt='9px'>
                                                <Search2Icon ml='10px' onClick={() => fun1("hello")} />
                                                <Input variant='unstyled' placeholder='search' />
                                            </HStack>
                                        </Box>
                                        <Menu>
                                            <MenuButton as={Button} mt='9px' float='right' colorScheme='transparant' rightIcon={<Avatar id="profile-icon" bg='red.500' h='41px' w='41px' />}>
                                            </MenuButton>
                                            <MenuList>
                                                <MenuItem>Profile</MenuItem>
                                                <MenuItem>Logout</MenuItem>

                                            </MenuList>
                                        </Menu>
                                    </HStack>
                                </Box>
                            </HStack>

                        </Box>






                    </SimpleGrid>

                </div>
            </div >
        </ChakraProvider >
    );
}

export default BaseDesign;