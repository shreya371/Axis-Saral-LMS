import { useEffect } from 'react';
import axios from 'axios';
import './Project.css';
import dept from '../../images/dept-icon.png'
import logo from '../../axis-logo.png';
import crypto from '../../images/crypto-p.jpg';
import propic from '../../images/stake-propic.jpg';
import flowchart from '../../images/flowchart.svg';
import credit from '../../images/credit.png';
import { ChakraProvider, HStack, useToast, VStack } from '@chakra-ui/react'
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
import logowhite from '../../images/Logo_White.png'
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
import { useState } from 'react';

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
} from '@chakra-ui/react'

import pic1 from '../../images/news-icon.png';
import pic2 from '../../images/org-icon.png';
import pic3 from '../../images/pro-icon.png';
import pic4 from '../../images/ser-icon.png';
import pic5 from '../../images/doc-icon.png';

import pmpic from '../../images/pro-pic.png'

import pic0 from '../../images/logo-img.jpeg';

import pimage from '../../images/projectimages/3level.png'
import { setGlobal } from '../global';
const Project = () => {
    const email = useLocation().state;
    setGlobal({ "empemail": email });

    console.log("projectpage email :" + email)

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
        else if (side == "Organization") {
            navigate('/organization');
        }
        else if (side == "News Feed") {
            navigate("/newsfeed")
        }

    }

    const [projects, setProjects] = useState([])
    const [stakeholders, setStakeholders] = useState([])
    const [supportteam, setSupportteam] = useState([])

    const supportteamByProjectId = (projectId) => {
        axios.get(`http://localhost:9092/ms2/empl/g5/${projectId}`).then(res => {

            setSupportteam(res.data);
        })

    }
    console.log(supportteam)


    const stakeByProjectId = (projectId) => {
        axios.get(`http://localhost:9091/ms1/sthd/g3/${projectId}`).then(res => {

            setStakeholders(res.data);
        })

    }

    const convertToDate = (unform) => {
        const date = new Date(unform);
        return date.toDateString();


    }



    useEffect(() => {
        axios.get("http://localhost:9091/ms1/proj/g1").then(res => {

            setProjects(res.data);
        })


    }, []);

    const [searchvalue, setSearchValue] = useState("")

    const getAllProjects = () => {
        axios.get("http://localhost:9091/ms1/proj/g1").then(res => {

            setProjects(res.data);
        })

    }
    const toast = useToast()
    const searchProject = (searchvalue) => {
        axios.get(`http://localhost:9999/ms1/search/${searchvalue}`).then(res => {


            setProjects(res.data);
            if (res.data.length == 0) {
                toast({
                    title: 'No Results Found',
                    // description: "We've created your account for you.",
                    position: 'top-right',
                    status: "error",
                    duration: 4000,
                    isClosable: true,
                })
                axios.get("http://localhost:9091/ms1/proj/g1").then(res => {

                    setProjects(res.data);
                })

            }

        })


    }

    const [projectManager, setProjectManager] = useState({})
    const getProjectManagerByProj = (proj_id) => {
        axios.get(`http://localhost:9091/ms1/pmng/g2/${proj_id}`).then(res => {

            setProjectManager(res.data);
        })

    }


    const [jobs, setJobs] = useState([])
    const getJobsByProjId = (proj_id) => {
        axios.get(`http://localhost:9093/ms3/jopp/g2/${proj_id}`).then(res => {

            setJobs(res.data);
        })

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
                        <Card bg='red.50' w='1253px' position='fixed' zIndex='1' variant='unstyled'  >
                            <HStack columns={2} spacing='530px'>
                                <VStack>
                                    <HStack spacing='450px' mt='20px' mb='10px' ml='120px'>
                                        <Breadcrumb ml='20px'>
                                            <BreadcrumbItem>
                                                <BreadcrumbLink ><Text as='b'>Home</Text></BreadcrumbLink>
                                            </BreadcrumbItem>

                                            <BreadcrumbItem isCurrentPage>
                                                <BreadcrumbLink onClick={() => getAllProjects()}><Text as='b'>Projects</Text></BreadcrumbLink>
                                            </BreadcrumbItem>


                                        </Breadcrumb>
                                    </HStack>
                                </VStack>
                                <VStack>
                                    <Box id="menu" bg='white' w='315px' h='59px' mt='10px'   >
                                        <HStack spacing='2px' float='right' pt='9px'  >
                                            <Box id="search" w='214px' h='41px' bg='gray' boxShadow='md'>
                                                <HStack mt='9px'>
                                                    <Search2Icon ml='10px' id='search-hover' onClick={() => searchProject(searchvalue)} />
                                                    <Input variant='unstyled' placeholder='search by project name' onChange={(e) => setSearchValue(e.target.value)} />
                                                </HStack>
                                            </Box>
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


                        <Box mt='100px' >
                            {/* <Card w='150px' shadow='lg' mt='10px' display='block'>

                                <CardBody>
                                    <Box boxSize='xs' h='50px' p='2px'>
                                        <Image src={credit} w='100px' h='100px' objectPosition='center' alt='Dan Abramov' />
                                    </Box>
                                </CardBody>
                                <CardFooter >
                                    <Text pt='15px' ms='25px'>Credit</Text>
                                </CardFooter>
                            </Card> */}


                        </Box>


                        {projects.map(p =>
                            <Card w='1000px' ml='120px' mb="20px" variant={'unstyled'}  >

                                <Card w='950px' ml='20px' mt='20px'>
                                    <Text as='b' ml='auto' mr='auto' fontSize='2xl' mb='10px' mt='10px'>{p.proj_name}</Text>



                                    <Box variant='unstyled'>
                                        <Image src={p.proj_pic} w='1000px' h='400px' ml='auto' mr='auto' ></Image>
                                    </Box>
                                    <HStack columns={2} spacing='200px' ml='70px' mt='20px' mb='20px' >

                                        <VStack align='left'>


                                            <Text><Text as='b'>Project ID :</Text> {p.proj_code}</Text>
                                            <Text> <Text as='b'>Start Date : </Text>{convertToDate(p.proj_startdate)}</Text>
                                            <Text><Text as='b'>Application Owner : </Text>{p.proj_owner_name} </Text>
                                        </VStack>
                                        <VStack align='left'>
                                            <Text><Text as='b'>Project Department : </Text>{p.department.dept_name}</Text>
                                            <Text><Text as='b'>End Date: </Text>{convertToDate(p.proj_enddate)}</Text>

                                            <Text><Text as='b'>Status : </Text>{p.proj_status} </Text>


                                        </VStack>
                                    </HStack>

                                    <HStack>
                                        <Text></Text>
                                    </HStack>



                                </Card>



                                <Accordion allowMultiple w='800px' ml='auto' mr='auto' display='block'>
                                    <AccordionItem >





                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left'>
                                                    View Details
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <Card w='810px' mb="20px">
                                                <Accordion allowMultiple w='800px'>
                                                    <AccordionItem>
                                                        {/* <Text as='b' ml='10px' fontSize='2xl'>{p.proj_name}</Text> */}
                                                        {/* <Image src={p.proj_pic} ml='auto' mr='auto' mt='10px' w='800px' h='400x' display='block'></Image> */}
                                                        <h2>
                                                            <AccordionButton>
                                                                <Box as="span" flex='1' textAlign='left'>
                                                                    Description
                                                                </Box>
                                                                <AccordionIcon />
                                                            </AccordionButton>
                                                        </h2>
                                                        <AccordionPanel pb={4}>
                                                            {p.proj_desc}
                                                        </AccordionPanel>
                                                    </AccordionItem>

                                                    <AccordionItem>
                                                        {({ isExpanded }) => (
                                                            <>
                                                                <h2>
                                                                    <AccordionButton>
                                                                        <Box as="span" flex='1' textAlign='left'>
                                                                            Flow chart
                                                                        </Box>
                                                                        {isExpanded ? (
                                                                            <MinusIcon fontSize='12px' />
                                                                        ) : (
                                                                            <AddIcon fontSize='12px' />
                                                                        )}
                                                                    </AccordionButton>
                                                                </h2>
                                                                <AccordionPanel pb={4}>

                                                                    <Image src={p.proj_flowchart} h='400px' ml='auto' mr='auto' />
                                                                </AccordionPanel>
                                                            </>
                                                        )}
                                                    </AccordionItem>
                                                    <AccordionItem>
                                                        {({ isExpanded }) => (
                                                            <>
                                                                <h2>
                                                                    <AccordionButton onClick={() => getProjectManagerByProj(p.proj_id)}>
                                                                        <Box as="span" flex='1' textAlign='left'>
                                                                            Project Manager
                                                                        </Box>
                                                                        {isExpanded ? (
                                                                            <MinusIcon fontSize='12px' />
                                                                        ) : (
                                                                            <AddIcon fontSize='12px' />
                                                                        )}
                                                                    </AccordionButton>
                                                                </h2>
                                                                <AccordionPanel pb={4}>

                                                                    <Card
                                                                        direction={{ base: 'column', sm: 'row' }}
                                                                        overflow='hidden'
                                                                        variant='outline'
                                                                        h='150px'
                                                                        w='500px'
                                                                        ml='auto'
                                                                        mr='auto'
                                                                    >
                                                                        <Image
                                                                            objectFit='cover'
                                                                            maxW={{ base: '100%', sm: '200px' }}
                                                                            borderRadius='20'
                                                                            src={pmpic}
                                                                            alt='Caffe Latte'
                                                                        />

                                                                        <Stack>
                                                                            <CardBody>

                                                                                <TableContainer>
                                                                                    <Table size='sm'>
                                                                                        {/* <Thead>
                                                                                            <Tr>
                                                                                                <Th>To convert</Th>
                                                                                                <Th>into</Th>
                                                                                                <Th isNumeric>multiply by</Th>
                                                                                            </Tr>
                                                                                        </Thead> */}
                                                                                        <Tbody>
                                                                                            <Tr>
                                                                                                <Td>ID</Td>
                                                                                                <Td>{projectManager.pmng_name}</Td>

                                                                                            </Tr>
                                                                                            <Tr>
                                                                                                <Td>Designation</Td>
                                                                                                <Td>{projectManager.pmng_desg}</Td>

                                                                                            </Tr>
                                                                                            <Tr>
                                                                                                <Td>Experience</Td>
                                                                                                <Td>{projectManager.pmng_exp}</Td>

                                                                                            </Tr>
                                                                                            <Tr>
                                                                                                <Td>Contact</Td>
                                                                                                <Td>+91 {projectManager.pmng_contact}</Td>

                                                                                            </Tr>

                                                                                        </Tbody>
                                                                                    </Table>
                                                                                </TableContainer>


                                                                            </CardBody>


                                                                        </Stack>
                                                                    </Card>
                                                                </AccordionPanel>
                                                            </>
                                                        )}
                                                    </AccordionItem>
                                                    <AccordionItem>
                                                        {({ isExpanded }) => (
                                                            <>
                                                                <h2>
                                                                    <AccordionButton onClick={() => stakeByProjectId(p.proj_id)}>
                                                                        <SimpleGrid></SimpleGrid>
                                                                        <Box as="span" flex='1' textAlign='left'>
                                                                            Stake holders
                                                                        </Box>
                                                                        {isExpanded ? (
                                                                            <MinusIcon fontSize='12px' />
                                                                        ) : (
                                                                            <AddIcon fontSize='12px' />
                                                                        )}
                                                                    </AccordionButton>
                                                                </h2>
                                                                <AccordionPanel pb={4}>
                                                                    <SimpleGrid columns={4}>
                                                                        {stakeholders.map(s =>

                                                                            <div className="Card">
                                                                                <div className="upper-container">
                                                                                    <div className="image-container">
                                                                                        <img className="pro-pic" src={propic} alt="" height="100px" width="100px" />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="lower-container">
                                                                                    <div className="id"> {s.sthd_code}</div>
                                                                                    <div className="name">{s.sthd_name}</div>
                                                                                    <div className="designation">{s.sthd_desg}</div>

                                                                                    <div className="email">rowan@gmail.com</div>

                                                                                    <div className="phone">9892716438</div>
                                                                                </div>

                                                                            </div>
                                                                        )}
                                                                    </SimpleGrid>
                                                                </AccordionPanel>
                                                            </>
                                                        )}
                                                    </AccordionItem>
                                                    <AccordionItem>
                                                        {({ isExpanded }) => (
                                                            <>
                                                                <h2>
                                                                    <AccordionButton onClick={() => supportteamByProjectId(p.proj_id)}>
                                                                        <SimpleGrid></SimpleGrid>
                                                                        <Box as="span" flex='1' textAlign='left'>
                                                                            Support Team
                                                                        </Box>
                                                                        {isExpanded ? (
                                                                            <MinusIcon fontSize='12px' />
                                                                        ) : (
                                                                            <AddIcon fontSize='12px' />
                                                                        )}
                                                                    </AccordionButton>
                                                                </h2>
                                                                <AccordionPanel pb={4}>
                                                                    <SimpleGrid columns={4}>
                                                                        {supportteam.map(st =>

                                                                            <div className="Card">
                                                                                <div className="upper-container">
                                                                                    <div className="image-container">
                                                                                        <img className="pro-pic" src={propic} alt="" height="100px" width="100px" />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="lower-container">
                                                                                    <div className="id"> {st.empl_code}</div>
                                                                                    <div className="name">{st.empl_name}</div>
                                                                                    <div className="designation">{st.empl_role}</div>

                                                                                    <div className="email">{st.empl_email}</div>

                                                                                    <div className="phone">{st.empl_contact}</div>
                                                                                </div>

                                                                            </div>
                                                                        )}
                                                                    </SimpleGrid>
                                                                </AccordionPanel>
                                                            </>
                                                        )}
                                                    </AccordionItem>


                                                    <AccordionItem>
                                                        {({ isExpanded }) => (
                                                            <>
                                                                <h2>
                                                                    <AccordionButton onClick={() => getJobsByProjId(p.proj_id)}>
                                                                        <Box as="span" flex='1' textAlign='left'>
                                                                            Job Opportunities
                                                                        </Box>
                                                                        {isExpanded ? (
                                                                            <MinusIcon fontSize='12px' />
                                                                        ) : (
                                                                            <AddIcon fontSize='12px' />
                                                                        )}
                                                                    </AccordionButton>
                                                                </h2>
                                                                <AccordionPanel pb={4}>


                                                                    {jobs.map(j =>


                                                                        <Card
                                                                            w='750px'
                                                                            direction={{ base: 'column', sm: 'row' }}
                                                                            overflow='hidden'
                                                                            mb='10px'
                                                                        // variant='outline'
                                                                        >
                                                                            <Image
                                                                                mt='20px'
                                                                                ml='20px'
                                                                                objectFit='cover'
                                                                                borderRadius='10'
                                                                                boxSize='50px'
                                                                                maxW={{ base: '100%', xs: '100px' }}
                                                                                //src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                                                                                src='https://c4.wallpaperflare.com/wallpaper/510/989/208/web-development-development-java-wallpaper-preview.jpg'
                                                                                alt='Java Developer'
                                                                            />

                                                                            <Stack>

                                                                                <CardBody>
                                                                                    <Box>
                                                                                        <Box>
                                                                                            <Heading size='md'>{j.jopp_name}</Heading>
                                                                                        </Box>
                                                                                        <Box>
                                                                                            <Text py='2'>
                                                                                                {j.jopp_desc}

                                                                                            </Text>
                                                                                        </Box>
                                                                                        <Box>
                                                                                            <Text >Experience : {j.jopp_exp} years</Text>
                                                                                            <Text >Salary : {j.jopp_slary} /month</Text>
                                                                                            <Text >Shift : {j.jopp_shift} </Text>

                                                                                        </Box>
                                                                                        <Box>
                                                                                            <Text >Required Skills : {j.jopp_skills}</Text>
                                                                                        </Box>

                                                                                        {/* <SimpleGrid mt='5' spacing='3' columns={5}>
                                                                                            {['Java', 'Advanced Java', 'Servlets', 'OOPS', 'Database',].map((item) => (
                                                                                                <Tag key={item} variant='outline'>
                                                                                                    {item}
                                                                                                </Tag>
                                                                                            ))}
                                                                                        </SimpleGrid> */}

                                                                                    </Box>
                                                                                </CardBody>
                                                                                <CardFooter>

                                                                                </CardFooter>


                                                                            </Stack>
                                                                        </Card>
                                                                    )}
                                                                </AccordionPanel>
                                                            </>
                                                        )}
                                                    </AccordionItem>
                                                </Accordion>
                                            </Card>






                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>




                            </Card>
                        )}
                    </SimpleGrid>

                </div>
            </div >
        </ChakraProvider >
    );
}

export default Project;