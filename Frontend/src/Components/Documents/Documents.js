import pdf1 from '../../images/pdf1.pdf';
import React from 'react';
import { useDisclosure } from '@chakra-ui/react';
import pdficon from '../../images/pdf-icon.png'
import {
    Grid, GridItem, RadioGroup, Stack, Radio,

} from '@chakra-ui/react'
import logowhite from '../../images/Logo_White.png'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,

} from '@chakra-ui/react'
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

    Tag

} from '@chakra-ui/react'
import { ChevronDownIcon, Search2Icon, MinusIcon, AddIcon } from '@chakra-ui/icons'
import { Input, Box } from '@chakra-ui/react'

import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { Link, Navigate, Router, useLocation, useNavigate } from 'react-router-dom';

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
import logingif from '../../images/login.gif'

import pic1 from '../../images/news-icon.png';
import pic2 from '../../images/org-icon.png';
import pic3 from '../../images/pro-icon.png';
import pic4 from '../../images/ser-icon.png';
import pic5 from '../../images/doc-icon.png';
import { useState } from 'react';


import a1 from '../../Docs/SOP about Database.pdf'
import a2 from '../../Docs/SOP about Middelware.pdf'
import a3 from '../../Docs/SOP of Incident Management.pdf'
import a4 from '../../Docs/SOP of Project Management.pdf'

import a5 from '../../Docs/SCD of Operating Systems.pdf'
import a6 from '../../Docs/SCD of Network Devices.pdf'

import b1 from '../../Docs/Cyber Security Policy.pdf'
import b2 from '../../Docs/GIFTING POLICY.pdf'
import b3 from '../../Docs/Dress Code Policy.pdf'
import b4 from '../../Docs/Code of Conducts & Ethics.pdf'
import b5 from '../../Docs/Corporate Governance Policy.pdf'
import b6 from '../../Docs/Human Resources.pdf'

import { useToast } from '@chakra-ui/react'
import { setGlobal } from '../global';
const Documents = () => {

    const email = useLocation().state;
    setGlobal({ "empemail": email });

    console.log("docspage email :" + email)

    const goto = (side) => {


        if (side == "Newsfeed") {
            navigate("/newsfeed", { state: email })
        }
        else if (side == "Organization") {
            navigate("/organization", { state: email })
        }
        else if (side == "Projects") {
            navigate("/project", { state: email })
        }
        else if (side == "Services") {
            navigate("/services", { state: email })
        }
        else if (side == "Documents") {
            navigate("/documents", { state: email })
        }
        else if (side == "Profile") {
            navigate("/profile", { state: email })
        }
        else if (side == "Login") {
            navigate("/", { state: email })
        }


    }

    const toast = useToast()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [scrollBehavior, setScrollBehavior] = React.useState('inside')

    const btnRef = React.useRef(null)

    const onButtonClick = (pdfname) => {
        // using Java Script method to get PDF file

        toast({
            title: 'Download Completed.',
            // description: "We've created your account for you.",
            position: 'top-right',
            status: 'success',
            duration: 9000,
            isClosable: true,
        })


        fetch(pdfname).then(response => {
            console.log(response.blob)
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = pdfname;
                alink.download = pdfname;
                alink.click();
            })
        })
    }
    const navigate = useNavigate();
    const sidelist = ['News Feed', "Projects", "Services", "Employees", "Careers", "Policies", "Logout", "documents", "all", "new", "new2"];
    const fun1 = (side) => {

        alert(side);
        if (side == "documents") {
            navigate("/documents")
        }
        else {
            navigate('/newsfeed');
        }

    }

    const [pdfname, setPdfname] = useState("")


    const [pdftitle, setPdftitle] = useState("")



    return (
        <ChakraProvider>


            <div>
                <div className="sidebarContainer">
                    {/* <Image className='axislogo' src={pic0} h='100px' w='260px' bg='pink' /> */}
                    <Card className='axislogo' bg='#af275f' w='263px' borderRadius={1}><Image src={logowhite} p={5} w='220px' ml='10px'></Image></Card>
                    {/* <Image src={pic0} h='100px' w='250px' bg='pink' /> */}
                    {/* <Image src={pic0}></Image> */}
                    {/* <div className='sidecolor'>.</div> */}
                    <div className='names-container' >

                        <Button
                            onClick={() => goto("Newsfeed")}
                            mt='20px'
                            leftIcon={<Image src={pic1} h='30px' w='30px'></Image>}
                            justifyContent="flex-start"
                            color='#af275f'
                            variant='ghost'
                            w='200px'
                            fontSize='18px'
                            mb='10px'

                        >
                            Newsfeed
                        </Button>
                        <Button
                            onClick={() => goto("Organization")}
                            leftIcon={<Image src={pic2} h='30px' w='30px'></Image>}
                            justifyContent="flex-start"
                            color='#af275f'
                            variant='ghost'
                            w='200px'
                            fontSize='18px'
                            mb='10px'
                        >
                            Organization
                        </Button>
                        <Button
                            onClick={() => goto("Projects")}
                            leftIcon={<Image src={pic3} h='30px' w='30px'></Image>}
                            justifyContent="flex-start"
                            color='#af275f'
                            variant='ghost'
                            w='200px'
                            fontSize='18px'
                            mb='10px'
                        >
                            Projects
                        </Button>
                        <Button
                            onClick={() => goto("Services")}
                            leftIcon={<Image src={pic4} h='30px' w='30px'></Image>}
                            justifyContent="flex-start"
                            color='#af275f'
                            variant='ghost'
                            w='200px'
                            fontSize='18px'
                            mb='10px'
                        >
                            Services
                        </Button>
                        <Button
                            onClick={() => goto("Documents")}
                            leftIcon={<Image src={pic5} h='30px' w='30px'></Image>}
                            justifyContent="flex-start"
                            color='#af275f'
                            variant='ghost'
                            w='200px'
                            fontSize='18px'
                            mb='10px'
                        >
                            Documents
                        </Button>


                    </div>
                    <Card className='axislogo' bg='#af275f' w='263px' h='50px' borderRadius={1} mt='320px'><Text color='white' ml='50px' mt='5px'>@copywrite.2023</Text></Card>

                </div>
                <div className="mainBlock" >
                    <SimpleGrid column='1' >
                        <Card bg='red.50' w='1253px' position='fixed' zIndex='1' variant='unstyled'  >
                            <HStack columns={2} spacing='750px'>
                                <VStack>
                                    <HStack spacing='450px' mt='20px' mb='10px' ml='100px'>
                                        <Breadcrumb ml='20px'>
                                            <BreadcrumbItem>
                                                <BreadcrumbLink ><Text as='b'>Home</Text></BreadcrumbLink>
                                            </BreadcrumbItem>

                                            <BreadcrumbItem isCurrentPage>
                                                <BreadcrumbLink ><Text as='b'>Documents</Text></BreadcrumbLink>
                                            </BreadcrumbItem>


                                        </Breadcrumb>
                                    </HStack>
                                </VStack>
                                <VStack>
                                    <Box id="menu" bg='white' w='80px' h='59px' mt='10px'   >
                                        <HStack spacing='2px' float='right'   >
                                            {/* <Box id="search" w='100px' h='41px' bg='gray' boxShadow='md'>
                                                <HStack mt='9px'>

                                                    <Search2Icon ml='10px' />
                                                    <Input variant='unstyled' placeholder='search' />

                                                </HStack>
                                            </Box> */}

                                            <Menu>
                                                <MenuButton as={Button} mt='9px' float='right' colorScheme='transparant' rightIcon={<Avatar id="profile-icon" bg='red.500' h='41px' w='41px' />}>
                                                </MenuButton>
                                                <MenuList>
                                                    <MenuItem onClick={() => goto("Profile")}>Profile</MenuItem>
                                                    <MenuItem onClick={() => goto("Login")}>Logout</MenuItem>

                                                </MenuList>
                                            </Menu>
                                        </HStack>
                                    </Box>
                                </VStack>

                            </HStack>
                        </Card>


                        <Box mt='100px' ml='100px'>
                            <>
                                {/* <Button mt={3} ref={btnRef} onClick={onOpen}>
                                    pdf file name
                                </Button> */}
                                <HStack>
                                    <Card bg='white' w='500px'>
                                        <Text as='b' mb='10px' ml='auto' mr='auto' mt='10px'>Standard operating procedure(SOP)</Text>
                                        <HStack columns={4} spacing="30px">
                                            <VStack mt='10px' mb='10px'>
                                                <Image id='pdf-hover' src={pdficon} h='60px' w='60px' ref={btnRef} onClick={() => { onOpen(); setPdfname(a1); setPdftitle("SOP about Database") }} ></Image>
                                                <Text maxW='100px' fontSize='13px'> Database</Text>
                                            </VStack>
                                            <VStack>
                                                <Image id='pdf-hover' src={pdficon} h='60px' w='60px' ref={btnRef} onClick={() => { onOpen(); setPdfname(a2); setPdftitle("SOP about Middleware") }}></Image>
                                                <Text maxW='100px' fontSize='13px'>Middleware</Text>
                                            </VStack>
                                            <VStack>
                                                <Image id='pdf-hover' src={pdficon} h='60px' w='60px' ref={btnRef} onClick={() => { onOpen(); setPdfname(a3); setPdftitle("SOP about Incident Management") }}></Image>
                                                <Text maxW='150px' fontSize='13px'>Incident Management</Text>
                                            </VStack>
                                            <VStack>
                                                <Image id='pdf-hover' src={pdficon} h='60px' w='60px' ref={btnRef} onClick={() => { onOpen(); setPdfname(a4); setPdftitle("SOP about Project Management Team") }}></Image>
                                                <Text maxW='150px' fontSize='13px'>Project Management</Text>
                                            </VStack>

                                        </HStack>
                                    </Card>
                                    <Card bg='white' w='500px'>
                                        <Text as='b' mb='10px' ml='auto' mr='auto' mt='10px'>Specification Control Document(SCD)</Text>
                                        <HStack columns={4} spacing="30px">
                                            <VStack mt='10px' mb='10px' ml='20px'>
                                                <Image id='pdf-hover' src={pdficon} h='60px' w='60px' ref={btnRef} onClick={() => { onOpen(); setPdfname(a5); setPdftitle("SDC about Operating System") }} ></Image>
                                                <Text maxW='150px' fontSize='13px'>  Operating Systems</Text>
                                            </VStack>
                                            <VStack>
                                                <Image id='pdf-hover' src={pdficon} h='60px' w='60px' ref={btnRef} onClick={() => { onOpen(); setPdfname(a6); setPdftitle("SOP about Network Devices") }}></Image>
                                                <Text maxW='150px' fontSize='13px'>Network Devices</Text>
                                            </VStack>
                                            {/* <VStack>
                                                <Imageid='pdf-hover' src={pdficon} h='80px' w='80px' ref={btnRef} onClick={() => { onOpen(); setPdfname(a3); setPdftitle("SOP about Incident Management") }}></Image>
                                                <Text maxW='150px' fontSize='13px'>Incident Management</Text>
                                            </VStack>
                                            <VStack>
                                                <Image id='pdf-hover' src={pdficon} h='80px' w='80px' ref={btnRef} onClick={() => { onOpen(); setPdfname(a4); setPdftitle("SOP about Project Management Team") }}></Image>
                                                <Text maxW='150px' fontSize='13px'>Project Management</Text>
                                            </VStack> */}

                                        </HStack>
                                    </Card>
                                </HStack>
                                <HStack mt='20px'>
                                    <Card bg='white' w='1000px'>
                                        <Text as='b' mb='10px' ml='auto' mr='auto' mt='10px'> Policies</Text>
                                        <HStack columns={4} spacing="30px" ml='auto' mr='auto'>
                                            <VStack mt='10px' mb='10px'>
                                                <Image id='pdf-hover' src={pdficon} h='60px' w='60px' ref={btnRef} onClick={() => { onOpen(); setPdfname(b1); setPdftitle("Cyber Security") }} ></Image>
                                                <Text maxW='100px' fontSize='13px'>Cyber Security </Text>
                                            </VStack>
                                            <VStack>
                                                <Image id='pdf-hover' src={pdficon} h='60px' w='60px' ref={btnRef} onClick={() => { onOpen(); setPdfname(b2); setPdftitle("Gifting Policy") }}></Image>
                                                <Text maxW='100px' fontSize='13px'>Gifting Policy</Text>
                                            </VStack>
                                            <VStack>
                                                <Image id='pdf-hover' src={pdficon} h='60px' w='60px' ref={btnRef} onClick={() => { onOpen(); setPdfname(b3); setPdftitle("Dress Codes Policy") }}></Image>
                                                <Text maxW='150px' fontSize='13px'>Dress Codes</Text>
                                            </VStack>
                                            <VStack>
                                                <Image id='pdf-hover' src={pdficon} h='60px' w='60px' ref={btnRef} onClick={() => { onOpen(); setPdfname(b4); setPdftitle("Code of Conduct & Ethics ") }}></Image>
                                                <Text maxW='150px' fontSize='13px'>Code of Conduct & Ethics</Text>
                                            </VStack>
                                            <VStack>
                                                <Image id='pdf-hover' src={pdficon} h='60px' w='60px' ref={btnRef} onClick={() => { onOpen(); setPdfname(b5); setPdftitle("Corporate Governance") }}></Image>
                                                <Text maxW='150px' fontSize='13px'>Corporate Governance</Text>
                                            </VStack>
                                            <VStack>
                                                <Image id='pdf-hover' src={pdficon} h='60px' w='60px' ref={btnRef} onClick={() => { onOpen(); setPdfname(b6); setPdftitle("Human Resource") }}></Image>
                                                <Text maxW='150px' fontSize='13px'>Human Resource</Text>
                                            </VStack>

                                        </HStack>
                                    </Card>

                                </HStack>


                                <Modal

                                    size='full'
                                    onClose={onClose}
                                    finalFocusRef={btnRef}
                                    isOpen={isOpen}
                                    scrollBehavior='inside'
                                >
                                    <ModalOverlay />
                                    <ModalContent >
                                        <ModalHeader>{pdftitle}</ModalHeader>
                                        <ModalCloseButton />
                                        <ModalBody>
                                            <embed id="pdf-id"
                                                src={pdfname + "#toolbar=0"}
                                                type="application/pdf"
                                            />
                                        </ModalBody>
                                        <ModalFooter>

                                            <Button onClick={() => onButtonClick(pdfname)}>Download</Button>
                                        </ModalFooter>
                                    </ModalContent>
                                </Modal>
                            </>


                        </Box>


                        {/* <Image src={logingif} h='500px' w='500px'></Image> */}


                    </SimpleGrid>

                </div>
            </div >

        </ChakraProvider >
    );
}

export default Documents;