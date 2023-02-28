import { useEffect } from 'react';
import axios from 'axios';
import './Profile.css'
import stake from '../../images/stake-propic.jpg'
import logo from '../../axis-logo.png';
import crypto from '../../images/crypto-p.jpg';
import propic from '../../images/stake-propic.jpg';
import flowchart from '../../images/flowchart.svg';
import credit from '../../images/credit.png';
import { ChakraProvider, HStack, useDisclosure, VStack } from '@chakra-ui/react'
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
import { Link, Navigate, Router, useLocation, useNavigate } from 'react-router-dom';

import { Image } from '@chakra-ui/react'


import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Heading, Text } from '@chakra-ui/react'

import docicon from '../../images/per-doc.png'
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

import pic1 from '../../images/news-icon.png';
import pic2 from '../../images/org-icon.png';
import pic3 from '../../images/pro-icon.png';
import pic4 from '../../images/ser-icon.png';
import pic5 from '../../images/doc-icon.png';

import pmpic from '../../images/pro-pic.png'

import pic0 from '../../images/logo-img.jpeg';
import { useState } from 'react';
import { getGlobal, setGlobal } from '../global';


import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';



import { Table, Tbody, Tr, Td, Th, TableCaption, TableContainer } from "@chakra-ui/react";



import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,


} from '@chakra-ui/react'


import logowhite from '../../images/Logo_White.png'

const Profile = () => {





    const [isDrawer1Open, setIsDrawer1Open] = useState(false);
    const [isDrawer2Open, setIsDrawer2Open] = useState(false);
    const [isDrawer3Open, setIsDrawer3Open] = useState(false);
    const [isDrawer4Open, setIsDrawer4Open] = useState(false);

    const toggleDrawer1 = () => {
        setIsDrawer1Open(!isDrawer1Open);
    };

    const toggleDrawer2 = () => {
        setIsDrawer2Open(!isDrawer2Open);
    };
    const toggleDrawer3 = () => {
        setIsDrawer3Open(!isDrawer3Open);
    };
    const toggleDrawer4 = () => {
        setIsDrawer4Open(!isDrawer4Open);
    };



    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()



    //-------------------------------appointment letter download-----------------------------------------
    const drawercontent1 = useRef(null);
    function downloadPDF1() {
        const myElement1 = drawercontent1.current;
        if (myElement1) {

            const options = {
                margin: 1,
                filename: 'my-drawer-content.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { dpi: 192, letterRendering: true },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().set(options).from(myElement1).save();
        }
    }

    //---------------------------------------------------------------------------------------------------------


    //------------------------------------------joining letter download------------------------------------------
    const drawercontent2 = useRef(null);
    function downloadPDF2() {
        const myElement2 = drawercontent2.current;
        if (myElement2) {

            const options = {
                margin: 1,
                filename: 'my-drawer-content.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { dpi: 192, letterRendering: true },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().set(options).from(myElement2).save();
        }
    }

    //-----------------------------------------------------------------------------------------------------------------

    //------------------------------------------incletter download------------------------------------------
    const drawercontent3 = useRef(null);
    function downloadPDF3() {
        const myElement3 = drawercontent3.current;
        if (myElement3) {

            const options = {
                margin: 1,
                filename: 'my-drawer-content.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { dpi: 192, letterRendering: true },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().set(options).from(myElement3).save();
        }
    }

    //-----------------------------------------------------------------------------------------------------------------



    //------------------------------------------Salary slipdownload------------------------------------------
    const drawercontent4 = useRef(null);
    function downloadPDF4() {
        const myElement4 = drawercontent4.current;
        if (myElement4) {

            const options = {
                margin: 1,
                filename: 'my-drawer-content.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { dpi: 300, letterRendering: true },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().set(options).from(myElement4).save();
        }
    }

    //-----------------------------------------------------------------------------------------------------------------











    const [employee, setEmployee] = useState({
        "empl_id": 0,
        "empl_name": "Loading...",
        "empl_code": "string",
        "empl_role": "string",
        "empl_email": "string",
        "empl_contact": "string",
        "empl_uname": "string",
        "empl_pswd": "string",
        "empl_exp": 0,
        "empl_team": 0,
        "empl_salary": 0,
        "empl_address": "string",
        "empl_gender": "string",
        "empl_dob": "2023-02-23T11:24:36.117Z",
        "empl_location": "string",
        "project": {
            "proj_id": 0,
            "proj_name": "string",
            "proj_code": "string",
            "proj_desc": "string",
            "proj_startdate": "2023-02-23T11:24:36.117Z",
            "proj_status": "string",
            "proj_enddate": "2023-02-23T11:24:36.117Z",
            "department": {
                "dept_id": 0,
                "dept_name": "string",
                "dept_code": "string",
                "dept_desc": "string"
            }
        },
        "projectManager": {
            "pmng_id": 0,
            "pmng_name": "string",
            "pmng_desg": "string",
            "pmng_email": "string",
            "pmng_contact": "string",
            "pmng_uname": "string",
            "pmng_pswd": "string",
            "pmng_exp": 0,
            "pmng_salary": 0,
            "pmng_propic": "string",
            "project": {
                "proj_id": 0,
                "proj_name": "string",
                "proj_code": "string",
                "proj_desc": "string",
                "proj_startdate": "2023-02-23T11:24:36.117Z",
                "proj_status": "string",
                "proj_enddate": "2023-02-23T11:24:36.117Z",
                "department": {
                    "dept_id": 0,
                    "dept_name": "string",
                    "dept_code": "string",
                    "dept_desc": "string"
                }
            }
        }
    })


    const email = useLocation().state;
    setGlobal({ "empemail": email });

    console.log("profilepage email :" + email)


    const getByEmail = () => {

        axios.get(`http://localhost:9092/ms2/employee/${getGlobal("empemail")}`).then(res => {

            setEmployee(res.data);
            console.log(employee)
        })
    }
    useEffect(() => {

        axios.get(`http://localhost:9092/ms2/employee/${getGlobal("empemail")}`).then(res => {

            setEmployee(res.data);
            console.log(employee)
        })


    }, []);






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
    const convertToDate = (unform) => {
        const date = new Date(unform);
        return date.toLocaleDateString();


    }












    return (
        <ChakraProvider >
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
                        <Box bg='red.50' position='fixed' zIndex='1' >
                            <HStack spacing='800px' mt='20px' ml='120px'>
                                <Breadcrumb ml='20px'>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink ><Text as='b'>Home</Text></BreadcrumbLink>
                                    </BreadcrumbItem>

                                    <BreadcrumbItem>
                                        <BreadcrumbLink isCurrentPage><Text as='b'>Profile</Text></BreadcrumbLink>
                                    </BreadcrumbItem>


                                </Breadcrumb>
                                <Box id="menu" bg='white' w='80px' h='59px' mt='10px' mr='10px'   >
                                    <HStack spacing='2px' float='right'  >
                                        {/* <Box id="search" w='214px' h='41px' bg='gray' boxShadow='md'>
                                            <HStack mt='9px'>
                                                <Search2Icon ml='10px' onClick={() => fun1("hello")} />
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
                            </HStack>

                        </Box>

                        <Box>

                            <div className='profile-div'>


                                <div className="Card-p">
                                    <div className="upper-container-p">
                                        <div className="image-container-p">

                                            <img className="pro-pic-p" src={stake} alt="" height="100px" width="100px" />
                                        </div>
                                    </div>
                                    <div className="lower-container-p">
                                        <div className="name-p">{employee.empl_name}</div>
                                        <div className="designation-p">{employee.empl_role}</div>
                                    </div>
                                </div>
                                {/* <Button onClick={getByEmail}>view details</Button> */}
                                <HStack >

                                    <div className="aboutme-p">
                                        <div className="header-p"> About Me </div>
                                        <div className="container-p">
                                            <table id='table-p'>
                                                <tbody>
                                                    <tr>
                                                        <td>ID</td>
                                                        <td>{employee.empl_code}</td>
                                                    </tr>

                                                    <tr>
                                                        <td>Department</td>
                                                        <td>{employee.project.department.dept_name}</td>
                                                    </tr>

                                                    <tr>
                                                        <td>Team</td>
                                                        <td>Developer</td>
                                                    </tr>

                                                    <tr>
                                                        <td>Email</td>
                                                        <td>{employee.empl_email}</td>
                                                    </tr>

                                                </tbody>

                                            </table>
                                        </div>
                                    </div>

                                    <div className="personal-p">
                                        <div className="p-header-p"> Basic Info </div>
                                        <div className="p-container-p">
                                            <table id='p-table-p'>
                                                <tbody>
                                                    <tr>
                                                        <td>Name</td>
                                                        <td>{employee.empl_name}</td>
                                                    </tr>

                                                    <tr>
                                                        <td>Birth Date</td>
                                                        <td>{convertToDate(employee.empl_dob)}</td>
                                                    </tr>

                                                    <tr>
                                                        <td>Contact</td>
                                                        <td>{employee.empl_contact}</td>
                                                    </tr>

                                                    <tr>
                                                        <td>Location</td>
                                                        <td>{employee.empl_location}</td>
                                                    </tr>

                                                </tbody>

                                            </table>
                                        </div>
                                    </div>
                                </HStack>


                                <div className="project-p">
                                    <div className="header-p"> Project Details </div>
                                    <div className="pr-container-p">
                                        <table id='pr-table-p'>
                                            <tbody>
                                                <tr>
                                                    <td>ID</td>
                                                    <td>{employee.project.proj_code}</td>
                                                </tr>

                                                <tr>
                                                    <td>Name</td>
                                                    <td>{employee.project.proj_name}</td>
                                                </tr>

                                                <tr>
                                                    <td>Department</td>
                                                    <td>{employee.project.department.dept_name}</td>
                                                </tr>



                                            </tbody>

                                        </table>
                                    </div>


                                    <div className="manager-div-p">
                                        <div className="m-header-p"> Reporting To </div>
                                        <div className="m-container-p">
                                            <table id='m-table-p'>
                                                <tbody>
                                                    <tr>
                                                        <td>Project Manager</td>
                                                        <td>Hardik Simon</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>



                                {/* <div className="team-p">
                                    <div className="header-p"> Team Members </div>
                                    <div className="t-container-p">
                                        <HStack spacing='20px-p-p' >
                                            <div className="t-card-p">
                                                <div className="t-upper-container-p">
                                                    <div className="t-image-container-p">
                                                        <img className="t-pro-pic-p" src="../profile-pic.png" alt="" height="100px" width="100px" />
                                                    </div>
                                                </div>
                                                <div className="t-lower-container-p">
                                                    <div className="t-id-p"> SH01</div>
                                                    <div className="t-name-p">Rowan Galpins</div>
                                                    <div className="t-designation-p">Vice President</div>

                                                    <div className="t-email-p">rowan@gmail.com</div>

                                                    <div className="t-phone-p">9892716438</div>
                                                </div>

                                            </div>

                                            <div className="t-card-p">
                                                <div className="t-upper-container-p">
                                                    <div className="t-image-container-p">
                                                        <img className="t-pro-pic-p" src="../profile-pic.png" alt="" height="100px" width="100px" />
                                                    </div>
                                                </div>
                                                <div className="t-lower-container-p">
                                                    <div className="t-id-p"> SH01</div>
                                                    <div className="t-name-p">Rowan Galpins</div>
                                                    <div className="t-designation-p">Vice President</div>

                                                    <div className="t-email-p">rowan@gmail.com</div>

                                                    <div className="t-phone-p">9892716438</div>
                                                </div>

                                            </div>

                                            <div className="t-card-p">
                                                <div className="t-upper-container-p">
                                                    <div className="t-image-container-p">
                                                        <img className="t-pro-pic-p" src="../profile-pic.png" alt="" height="100px" width="100px" />
                                                    </div>
                                                </div>
                                                <div className="t-lower-container-p">
                                                    <div className="t-id-p"> SH01</div>
                                                    <div className="t-name-p">Rowan Galpins</div>
                                                    <div className="t-designation-p">Vice President</div>

                                                    <div className="t-email-p">rowan@gmail.com</div>

                                                    <div className="t-phone-p">9892716438</div>
                                                </div>

                                            </div>
                                        </HStack>


                                    </div>


                                </div> */}

                                <Card w='1000px' ml='130px' mt='20px' mb='30px'>
                                    <Text as='b' mt='10px' ml='10px'>Documents</Text>


                                    <SimpleGrid columns={3} spacing={2} mt='20px' w='1000px'>


                                        <Card w='300px' h='50px' id='doc-hover' ref={btnRef} onClick={toggleDrawer1}>
                                            <HStack mt='10px' ml='20px'>

                                                <Image src={docicon} h='30px' w='30px'></Image>
                                                <Text>Appointment Letter</Text>
                                            </HStack>
                                        </Card>

                                        <Card w='300px' h='50px' id='doc-hover' ref={btnRef} onClick={toggleDrawer2}>
                                            <HStack mt='10px' ml='20px'>

                                                <Image src={docicon} h='30px' w='30px' ></Image>
                                                <Text>Joining Letter</Text>
                                            </HStack>
                                        </Card>

                                        <Card w='300px' h='50px' id='doc-hover' ref={btnRef} onClick={toggleDrawer3} >
                                            <HStack mt='10px' ml='20px'>

                                                <Image src={docicon} h='30px' w='30px'></Image>
                                                <Text>Increment Letter</Text>
                                            </HStack>
                                        </Card>

                                        {/* <Card w='300px' h='50px' id='doc-hover' onClick={toggleDrawer4}>
                                            <HStack mt='10px' ml='20px'>

                                                <Image src={docicon} h='30px' w='30px'></Image>
                                                <Text>Salary Slip</Text>
                                            </HStack>
                                        </Card> */}
                                    </SimpleGrid>



                                </Card>







                                {/* <Button ref={btnRef} colorScheme='teal' onClick={toggleDrawer1}>
                                    Appointment letter
                                </Button>


                                <Button ref={btnRef} colorScheme='teal' onClick={toggleDrawer2}>
                                    joining letter
                                </Button>


                                <Button ref={btnRef} colorScheme='teal' onClick={toggleDrawer3}>
                                    Increment  letter
                                </Button>

                                <Button ref={btnRef} colorScheme='teal' onClick={toggleDrawer4}>
                                    Salary slip
                                </Button> */}



                                <>




                                    <Drawer
                                        isOpen={isDrawer1Open}
                                        placement='right'
                                        onClose={toggleDrawer1}
                                        finalFocusRef={btnRef}

                                        size='lg'
                                    >
                                        <DrawerOverlay />
                                        <DrawerContent >
                                            <DrawerCloseButton />


                                            <DrawerBody padding='0'>

                                                <Text id="drawer-content1" ref={drawercontent1}>
                                                    <Box h='50px' w='670px' bg='#AE275F'><Image src={logowhite} h='50px' w='200px' ></Image></Box>
                                                    <Box padding={4}>
                                                        <Text as='b' ml="250px">Job Appointment Letter</Text>

                                                        <Text>
                                                            <Text>01-02-2020</Text>
                                                            <Text>{employee.empl_name}</Text>
                                                            <Text mb='20px'>
                                                                <Box w='200px'>
                                                                    {employee.empl_address}
                                                                </Box>
                                                            </Text>


                                                            <Text as='b' mb='10px'>Subject: Appointment for post of {employee.empl_role}</Text>

                                                            <Text mt='10px' mb='10px'> Dear {employee.empl_name},</Text>
                                                            <Text>
                                                                We are happy to offer you the position of {employee.empl_role} at our company Axis Saral with the
                                                                starting date 01-03-2020  and your immediate manager will
                                                                be shreya vanampally. We believe that your abilities and expertise will be the best fit for our
                                                                company.</Text>
                                                            <Text mb='20px'>
                                                                The starting annual salary for your position is Rs.{employee.empl_salary}/-. You are needed to give a
                                                                notice of one week if you want to resign from this post.
                                                                We look forward to working with you on the team. If you have any queries, feel free to reach out
                                                                at shreyavanams@gmail.com, we will definitely help you.
                                                            </Text>
                                                            <Text>Thanking you,</Text>
                                                            <Text>With regards,</Text>
                                                            <Text>HR team</Text>
                                                        </Text>
                                                    </Box>
                                                </Text>
                                            </DrawerBody>

                                            <DrawerFooter>
                                                {/* <Button variant='outline' mr={3} onClick={onClose}>
                                                    Cancel
                                                </Button> */}
                                                <Button bg='#af275f' onClick={() => downloadPDF1()}>Download as PDF</Button>
                                            </DrawerFooter>
                                        </DrawerContent>
                                    </Drawer>
                                </>





                                <Drawer
                                    isOpen={isDrawer2Open}
                                    placement='right'
                                    onClose={toggleDrawer2}
                                    finalFocusRef={btnRef}
                                    size="lg"
                                >
                                    <DrawerOverlay />
                                    <DrawerContent >
                                        <DrawerCloseButton />


                                        <DrawerBody padding='0'>


                                            <Text id='drawercontent2' ref={drawercontent2}>
                                                <Box h='50px' w='670px' bg='#AE275F'><Image src={logowhite} h='50px' w='200px' ></Image></Box>
                                                <Box padding={4}>
                                                    <Text as='b' ml="250px" mb='30px'>Joining Letter</Text>


                                                    <Text mb='20px'>01-02-2020</Text>
                                                    <Text>To,</Text>
                                                    <Text>Shreya Vanampally</Text>
                                                    <Text>Manager</Text>
                                                    <Text> Human Resources</Text>
                                                    <Text mb='20px'>Axis Saral</Text>

                                                    <Text mb='20px'>Subject: Joining Letter</Text>

                                                    <Text mb='20px'> Dear Sir,</Text>




                                                    <Text mb='20px'>I am writing to you about the offer letter you have sent. With pleasure, I accept your job offer for
                                                        the position of {employee.empl_role}, and I will be able to start working on the 01-03-2020.
                                                        I am thankful for this wonderful opportunity and accept the terms and conditions mentioned in
                                                        the offer letter. I cannot wait to join your esteemed organization.
                                                        If you need further information, please contact me at the contact details I have provided.</Text>


                                                    <Text>Yours Sincerely,</Text>
                                                    <Text>{employee.empl_name},</Text>
                                                    <Text>{employee.empl_email}</Text>
                                                    <Text>+91 {employee.empl_contact}</Text>

                                                </Box>

                                            </Text>

                                        </DrawerBody>

                                        <DrawerFooter>
                                            {/* <Button variant='outline' mr={3} onClick={onClose}>
                                                Cancel
                                            </Button> */}
                                            <Button bg='#af275f' onClick={() => downloadPDF2()}>Download as PDF</Button>
                                        </DrawerFooter>
                                    </DrawerContent>
                                </Drawer>






                                <Drawer
                                    isOpen={isDrawer3Open}
                                    placement='right'
                                    onClose={toggleDrawer3}
                                    finalFocusRef={btnRef}
                                    size="lg"
                                >
                                    <DrawerOverlay />
                                    <DrawerContent >
                                        <DrawerCloseButton />


                                        <DrawerBody padding='0'>


                                            <Text id='drawercontent3' ref={drawercontent3}>
                                                <Box h='50px' w='670px' bg='#AE275F'><Image src={logowhite} h='50px' w='200px' ></Image></Box>
                                                <Box padding={4}>
                                                    <Text as='b' ml="250px" mb='30px'>Increment Letter</Text>


                                                    <Text mb='20px'>01-02-2021</Text>
                                                    <Text>To,</Text>
                                                    <Text>{employee.empl_name},</Text>
                                                    <Text>{employee.empl_role},</Text>

                                                    <Text mb='20px'>Axis Saral</Text>

                                                    <Text mb='20px'>Subject: Increment Letter</Text>

                                                    <Text mb='20px'> Dear {employee.empl_name},</Text>




                                                    <Text mb='20px'>We are pleased to inform you that after evaluating your performance we are pleased to inform
                                                        you that your salary has been revised , and the new salary structure will be:

                                                    </Text>
                                                    <Text>Previous Salary:  {employee.empl_salary}/-</Text>
                                                    <Text>Increment: 50000 /-</Text>
                                                    <Text mb='20px'>New Salary: {employee.empl_salary + 50000} /-</Text>
                                                    <Text mb='20px'>We look forward to your valuable contributions to the organization and wishing you a great
                                                        career ahead.</Text>




                                                    <Text>Axis Saral</Text>
                                                    <Text>Executive Director</Text>


                                                </Box>

                                            </Text>


                                        </DrawerBody>

                                        <DrawerFooter>
                                            {/* <Button variant='outline' mr={3} onClick={onClose}>
                                                Cancel
                                            </Button> */}
                                            <Button bg='#af275f' onClick={() => downloadPDF3()}>Download as PDF</Button>
                                        </DrawerFooter>
                                    </DrawerContent>
                                </Drawer>





                                <Drawer
                                    isOpen={isDrawer4Open}
                                    placement='right'
                                    onClose={toggleDrawer4}
                                    finalFocusRef={btnRef}
                                    size="lg"
                                >
                                    <DrawerOverlay />
                                    <DrawerContent >
                                        <DrawerCloseButton />


                                        <DrawerBody p='0'>


                                            <Text id='drawercontent4' ref={drawercontent4}>
                                                <Box h='50px' w='670px' bg='#AE275F'><Image src={logowhite} h='50px' w='200px' ></Image></Box>
                                                <Text ml='300px' mb='30px' fontSize={'20px'} fontWeight='30px' mt='20px'>Salary Slip</Text>

                                                <>
                                                    <Box p="6" w='670px'>

                                                        <HStack spacing={'30px'} >
                                                            <TableContainer >
                                                                <Table variant="simple" mb='10px' size='sm' >
                                                                    <Tbody>
                                                                        <Tr >
                                                                            <Td fontWeight='bold'>Employee Name</Td>
                                                                            <Td  >
                                                                                <Text maxWidth='100px' overflowWrap={'break-word'}>{employee.empl_name}</Text>
                                                                            </Td>
                                                                        </Tr>
                                                                        <Tr >
                                                                            <Td fontWeight='bold'>Employee ID</Td>
                                                                            <Td >{employee.empl_code}</Td>
                                                                        </Tr>
                                                                        <Tr>
                                                                            <Td fontWeight='bold'>Bank Name</Td>
                                                                            <Td >XYZ Bank</Td>
                                                                        </Tr>

                                                                    </Tbody>
                                                                </Table>
                                                            </TableContainer >
                                                            <TableContainer  >
                                                                <Table variant="simple" mb='10px' size='sm' >
                                                                    <Tbody>
                                                                        <Tr >
                                                                            <Td fontWeight='bold'>Department</Td>
                                                                            <Td >IT</Td>
                                                                        </Tr>
                                                                        <Tr >
                                                                            <Td fontWeight='bold'>Location</Td>
                                                                            <Td >{employee.empl_location}</Td>
                                                                        </Tr>
                                                                        <Tr >
                                                                            <Td fontWeight='bold'>Bank Account Number</Td>
                                                                            <Td >XXXX XXXX</Td>
                                                                        </Tr>

                                                                    </Tbody>
                                                                </Table>
                                                            </TableContainer>
                                                        </HStack>

                                                        <Table variant="simple" size='md'>
                                                            <Tbody >
                                                                <Th border="1px solid" borderColor="gray.300" bg=' #AE275F' color='white'>Earnings</Th>
                                                                <Th border="1px solid" borderColor="gray.300" bg=' #AE275F' color='white'>Deductions</Th>
                                                                <Tr borderBottom="1px solid" borderColor="gray.200">
                                                                    <Td border="1px solid" borderColor="gray.200" p={0} pt='0.5'>
                                                                        <Table variant='striped' size='sm'>

                                                                            <Tbody >
                                                                                <Tr  >
                                                                                    <Td border="1px solid" borderColor="gray.300">Basic</Td>
                                                                                    <Td>{((employee.empl_salary) / 12).toFixed(0) - 30000}</Td>
                                                                                </Tr>
                                                                                <Tr>
                                                                                    <Td>HRA</Td>
                                                                                    <Td>25000</Td>
                                                                                </Tr>
                                                                                <Tr>
                                                                                    <Td border="1px solid" borderColor="gray.300">CCA</Td>
                                                                                    <Td>5000</Td>
                                                                                </Tr>
                                                                            </Tbody>
                                                                        </Table>
                                                                    </Td>
                                                                    <Td border="1px solid" borderColor="gray.200" p={0} pt='0.5'>
                                                                        <Table variant='striped' size='sm' >

                                                                            <Tbody>
                                                                                <Tr>
                                                                                    <Td borderColor="gray.200">PF</Td>
                                                                                    <Td>6000</Td>
                                                                                </Tr>
                                                                                <Tr>
                                                                                    <Td borderColor="gray.200">Tax</Td>
                                                                                    <Td>12000</Td>
                                                                                </Tr>
                                                                                <Tr>
                                                                                    <Td borderRight="1px solid" borderColor="gray.200">TDS</Td>
                                                                                    <Td>0</Td>
                                                                                </Tr>
                                                                            </Tbody>
                                                                        </Table>

                                                                    </Td>
                                                                </Tr>
                                                                <Tr border="1px solid" borderColor="gray.200" p={0} pt='0.5'>

                                                                </Tr>


                                                            </Tbody>


                                                        </Table>
                                                        <Table mt='10px'>
                                                            <Tr borderBottom="1px solid" borderColor="gray.200" color='white' >
                                                                <Td bg='#af275f' color='white' fontSize={'20px'}>NetPay</Td>
                                                                <Td bg='#af275f' color='white' fontSize={'20px'}>Rs.{((employee.empl_salary) / 12).toFixed(0)}/-</Td>
                                                            </Tr>
                                                        </Table>
                                                    </Box>
                                                </>

                                            </Text>

                                        </DrawerBody>

                                        <DrawerFooter>
                                            {/* <Button variant='outline' mr={3} onClick={onClose}>
                                                Cancel
                                            </Button> */}
                                            <Button bg='#af275f' onClick={() => downloadPDF4()}>Download as PDF</Button>
                                        </DrawerFooter>
                                    </DrawerContent>
                                </Drawer>






                            </div>
                        </Box>






                    </SimpleGrid>

                </div>
            </div >
        </ChakraProvider >
    );
}

export default Profile;