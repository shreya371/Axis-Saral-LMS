import { Accordion, ChakraProvider, HStack, InputGroup, useToast, VStack } from '@chakra-ui/react'
import './Newsfeed.css';
import React, { useState } from 'react'
import { useDisclosure } from '@chakra-ui/react'
import pdf1 from '../../images/pdf1.pdf';
import {
    Grid, GridItem, RadioGroup, Stack, Radio

} from '@chakra-ui/react'

import like from '../../images/like-icon.png'
import comment from '../../images/comment-icon.png'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    InputRightAddon

} from '@chakra-ui/react'
import { useEffect } from 'react';
import axios from 'axios';


import logo from '../../images/logo-up.png';
import crypto from '../../images/crypto-p.jpg';
import propic from '../../images/stake-propic.jpg';
import flowchart from '../../images/flowchart.svg';
import credit from '../../images/credit.png';

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
    Flex,
    Tag

} from '@chakra-ui/react'
import { ChevronDownIcon, Search2Icon, MinusIcon, AddIcon } from '@chakra-ui/icons'
import { Input, Box } from '@chakra-ui/react'

import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { Link, Navigate, Router, useLocation, useNavigate } from 'react-router-dom';

import { Image } from '@chakra-ui/react'

import {

    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Heading, Text } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
} from '@chakra-ui/react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
} from '@chakra-ui/react'
import { Center } from '@chakra-ui/react';
import { CloseButton } from '@chakra-ui/react'
import { isDisabled } from '@testing-library/user-event/dist/utils';


import pic1 from '../../images/news-icon.png';
import pic2 from '../../images/org-icon.png';
import pic3 from '../../images/pro-icon.png';
import pic4 from '../../images/ser-icon.png';
import pic5 from '../../images/doc-icon.png';

import pic0 from '../../images/pro-pic.png';
import { Provider } from 'react-redux';
import { getGlobal, setGlobal } from '../global';

import r1 from '../../images/initiatives/rural-banking-img.jpg'
import r2 from '../../images/initiatives/upi-img.jpg'
import r3 from '../../images/initiatives/computing-img.jpg'
import r4 from '../../images/initiatives/digital-img.jpg'

import logowhite from '../../images/Logo_White.png'

const Newsfeed = () => {
    const nempemail = getGlobal("empemail")
    console.log("this is get form newsdfeed" + getGlobal("empemail"))
    const navigate = useNavigate();
    const sidelist = ['News Feed', "Projects", "Services", "Organization", "documents"];
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
    const [isOpenCmt, setIsOpenCmt] = useState(false)


    const [inputValue, setInputValue] = useState("");
    const [isButtonDisabled, setIsButtonDisabled] = React.useState(true);

    function handleChange(event) {
        setInputValue(event.target.value);
        console.log(inputValue)
        if (event.target.value) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    }
    const showComments = () => {
        setIsOpenCmt(true)


    }
    const offComments = () => {
        setIsOpenCmt(false)

    }

    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([])
    const [epostid, setEpostid] = useState(0)

    useEffect(() => {

        axios.get("http://localhost:9094/ms4/posts/g1").then(res => {

            setPosts(res.data);
        })

        // axios.get(`http://localhost:8888/comments/get/${epostid}`).then(res => {
        //     setComments(res.data);
        //     console.log(epostid)

        // })

        axios.get(`http://localhost:9092/ms2/employee/${getGlobal("empemail")}`).then(res => {

            setnewsEmployee(res.data);
            console.log(newsemployee)
        })


    }, []);


    const [newsemployee, setnewsEmployee] = useState({
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




    const commentsByPost = (epost_id) => {


        axios.get(`http://localhost:9094/ms4/comments/get/${epost_id}`).then(res => {
            setComments(res.data);
            console.log(comments)
        })
    }

    const [myComment, setMyComment] = useState("")

    const addComment = (epost_id) => {
        let data = {
            ecmt_content: inputValue
        }
        console.log("------------")
        console.log(data)
        console.log("----------------")
        console.log("after method")

        fetch(`http://localhost:9094/ms4/comments/postcmt/${newsemployee.empl_id}/${epost_id}`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        }).then(
            toast({
                title: 'Comment Success',
                // description: "We've created your account for you.",
                position: 'top-right',
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
        )




    }




    const [isopen, setIsOpen] = useState(false)

    const [userId, setUserId] = useState(0);
    const [data1, setData1] = useState([]);

    // useEffect(() => {

    //     fetch(`http://localhost:8888/comments/get/${userId}`)
    //         .then(response => response.json())
    //         .then(data => { setComments(data1); console.log(data) })
    //         .catch(error => console.error(error));
    // }, [userId]);

    const likeByPost = (epost_id) => {

        fetch(`http://localhost:9094/ms4/posts/g7/${epost_id}`, {
            method: "PUT",

            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        })

        alert("product updated successfully")

    }
    const [postContent, setPostContent] = useState("")

    const toast = useToast()

    const addPost = () => {
        let data = {

            epost_content: postContent,
            epost_likes: 0,
            epost_category: "news feed"

        }
        fetch(`http://localhost:9094/ms4/posts/post/${newsemployee.empl_id}`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        }).then(
            toast({
                title: 'Post Success',
                // description: "We've created your account for you.",
                position: 'top-right',
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
        )
        axios.get("http://localhost:9094/ms4/posts/g1").then(res => {

            setPosts(res.data);
        })

    }
    const [postlikes, setPostLikes] = useState(0)
    const getLikesByPostId = (epost_id) => {
        axios.get(`http://localhost:9094/ms4/posts/g6/${epost_id}`).then(res => {
            setPostLikes(res.data);
            console.log(comments)
        })

    }

    const gotoProfile = () => {
        navigate("/profile")
    }


    const email = useLocation().state;
    setGlobal({ empemail: email });
    console.log("newspage email :" + email)
    return (


        <ChakraProvider>


            <div>
                <div className="sidebarContainer">
                    {/* <Image className='axislogo' src={pic0} h='100px' w='260px' bg='pink' /> */}
                    {/* <Text as='b' fontSize='20px' color='white' mt='30px' ml='30px'>Axis saral</Text> */}
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
                            <HStack columns={2} spacing='610px'>
                                <VStack>
                                    <HStack spacing='450px' mt='20px' mb='10px' ml='120px'>
                                        <Breadcrumb ml='20px'>
                                            <BreadcrumbItem isCurrentPage>
                                                <BreadcrumbLink ><Text as='b'>Home</Text></BreadcrumbLink>
                                            </BreadcrumbItem>

                                            {/* <BreadcrumbItem isCurrentPage>
                                                <BreadcrumbLink href='#'><Text as='b'></Text></BreadcrumbLink>
                                            </BreadcrumbItem> */}


                                        </Breadcrumb>
                                    </HStack>
                                </VStack>
                                <VStack>
                                    <Box id="menu" bg='white' w='310px' h='59px' mt='10px'   >
                                        <HStack spacing='2px' float='right' pt='9px'  >
                                            {/* <Box id="search" w='214px' h='41px' bg='gray' boxShadow='md'>
                                                <HStack mt='9px'>
                                                    <Search2Icon ml='10px' onClick={() => goto("hello")} />
                                                    <Input variant='unstyled' placeholder='search' />
                                                </HStack>
                                                
                                            </Box> */}
                                            <Box >
                                                <VStack>
                                                    <Text as='b' fontSize={'15px'}>{newsemployee.empl_name}</Text>

                                                </VStack>

                                            </Box>
                                            <Menu>
                                                <MenuButton as={Button} mt='9px' float='right' colorScheme='transparant' rightIcon={<Avatar src={pic0} bg='red.500' h='41px' w='41px' />}>
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


                        <div id='main-content'>


                            <div class="container" id='scroll-container'>

                                <div class="panel middle-panel">



                                    <>

                                        <Card w='587px' ml='100px'>
                                            <HStack ml='20px' alignItems='center' mb='10px' mt='10px'>


                                                <Avatar size='md' name='Segun Adebayo' src={pic0} border="2px solid pink" alignSelf='flex-start' />



                                                <Popover>
                                                    <PopoverTrigger>
                                                        <Button w='500px' h='100px'>Start a post</Button>
                                                    </PopoverTrigger>
                                                    <PopoverContent w='550px'>
                                                        <PopoverArrow />
                                                        <PopoverCloseButton />
                                                        <PopoverHeader>Write your Post</PopoverHeader>
                                                        <PopoverBody >


                                                            <HStack ml='20px' alignItems='center' mb='10px'>


                                                                <Avatar size='md' name='Segun Adebayo' src={pic0} border="2px solid pink" alignSelf='flex-start' />

                                                                <InputGroup>
                                                                    <Input w='380px' placeholder='write your post' onChange={(e) => setPostContent(e.target.value)} ></Input>
                                                                    <Button colorScheme='blue' onClick={() => addPost()}>Post</Button>
                                                                </InputGroup>



                                                            </HStack>
                                                        </PopoverBody>
                                                    </PopoverContent>
                                                </Popover>


                                            </HStack>

                                        </Card>














                                        {posts.map(ps =>
                                            <Box mt="10px" ml='100px'>
                                                <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(500px, 1fr))'>

                                                    <Card>

                                                        <Flex spacing='4' mt='20px' ml='20px'>
                                                            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                                                <Avatar name='Segun Adebayo' src={pic0} border="2px solid pink" />

                                                                <Box>
                                                                    <Text as='b' fontSize='18px'>{ps.empl_name}</Text>
                                                                    <Text fontSize='12px' color='gray.500'>{ps.empl_role}</Text>
                                                                </Box>
                                                            </Flex>

                                                        </Flex>
                                                        <CardBody>
                                                            <Center>
                                                                <Divider w='540px' mb='10px' />
                                                            </Center>
                                                            <Text>
                                                                {ps.epost_content}

                                                            </Text>
                                                        </CardBody>
                                                        <Center>
                                                            <Divider w='540px' mb='10px' />
                                                        </Center>

                                                        {/* <Divider orientation='horizontal' color='gray.100' mb='10px' alignItems='center' /> */}
                                                        <HStack justifyContent="left" mb='10px' ml='20px'>
                                                            {/* <Box >
                                                                <Button dispaly='block' w='260px' onClick={() => { likeByPost(ps.epost_id) }} >
                                                                    <Image src={like} h='20px' mr='10px'></Image>   Like
                                                                </Button>
                                                            </Box> */}
                                                            <Box>


                                                                <Popover>
                                                                    <PopoverTrigger>
                                                                        <Button w='260px'><Image src={comment} h='20px' mr='10px' ></Image> Comment</Button>
                                                                    </PopoverTrigger>
                                                                    <PopoverContent w='550px'>
                                                                        <PopoverArrow />
                                                                        <PopoverCloseButton />
                                                                        <PopoverHeader>Add Comment</PopoverHeader>
                                                                        <PopoverBody >


                                                                            <HStack ml='20px' alignItems='center' mb='10px'>


                                                                                <Avatar size='md' name='Segun Adebayo' src={pic0} border="2px solid pink" alignSelf='flex-start' />



                                                                                <InputGroup>
                                                                                    <Input w='380px' onChange={handleChange} placeholder='write your comment' ></Input>
                                                                                    <Button colorScheme='blue' onClick={() => { setUserId(ps.epost_id); addComment(ps.epost_id); commentsByPost(ps.epost_id) }} isDisabled={isButtonDisabled}>Post</Button>
                                                                                </InputGroup>

                                                                            </HStack>
                                                                        </PopoverBody>
                                                                    </PopoverContent>
                                                                </Popover>
                                                            </Box>
                                                        </HStack>



                                                        <Accordion allowToggle>

                                                            <AccordionItem>
                                                                {/* <HStack ml='20px' alignItems='center' mb='10px'>


                        <Avatar size='md' name='Segun Adebayo' src='https://bit.ly/sage-adebayo' alignSelf='flex-start' />



                        <InputGroup>
                            <Input w='380px' onChange={handleChange} placeholder='write your comment' ></Input>
                            <Button colorScheme='blue' onClick={() => { setUserId(ps.epost_id); addComment(ps.epost_id); commentsByPost(ps.epost_id) }} isDisabled={isButtonDisabled}>Post</Button>
                        </InputGroup>

                    </HStack> */}
                                                                <AccordionButton alignItems='center' onClick={() => { commentsByPost(ps.epost_id); getLikesByPostId(ps.epost_id) }}>



                                                                    <AvatarGroup size='xs' max={2}>
                                                                        <Avatar name='Ryan Florence' src={comment} />



                                                                    </AvatarGroup>

                                                                    All Comments

                                                                </AccordionButton>

                                                                <AccordionPanel>
                                                                    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(500px, 1fr))'>
                                                                        {/* <Text ml='20px' as='i' > {postlikes} likes</Text> */}
                                                                        <Card variant='unstyled'>

                                                                            {/* <HStack ml='20px' alignItems='center' mb='10px'>


                                    <Avatar size='md' name='Segun Adebayo' src='https://bit.ly/sage-adebayo' alignSelf='flex-start' />
                                    <InputGroup>
                                        <Input w='380px' onChange={(e) => setInputValue(e.target.value)}></Input>
                                        <Button colorScheme='blue' onClick={() => { setUserId(ps.epost_id); addComment(ps.epost_id); commentsByPost(ps.epost_id) }}  >Post</Button>
                                    </InputGroup>

                                </HStack> */}


                                                                            {comments.map(c =>

                                                                                <HStack ml='20px' alignItems='center' mb='10px'>

                                                                                    <Avatar size='md' name='Segun Adebayo' src={pic0} border="2px solid pink" alignSelf='flex-start' />
                                                                                    <Card templateColumns='repeat(auto-fill, minmax(500px, 1fr))' w='450px' variant='filled' p='10px' pt='3px' >
                                                                                        <Text as='b'>{c.empl_name}</Text>
                                                                                        <Text color='blackAlpha.500' fontSize='xs' pb='5px'>{c.empl_role}</Text>
                                                                                        <Text>
                                                                                            {c.ecmt_content}


                                                                                        </Text>
                                                                                    </Card>
                                                                                </HStack>
                                                                            )}





                                                                        </Card>


                                                                    </SimpleGrid>
                                                                </AccordionPanel>

                                                            </AccordionItem>
                                                        </Accordion>








                                                    </Card>

                                                </SimpleGrid>

                                                {isOpenCmt &&

                                                    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(500px, 1fr))'>

                                                        <Card variant='unstyled'>
                                                            <CloseButton onClick={() => offComments()} ml='527px' mt='5px' />
                                                            <HStack ml='20px' alignItems='center' mb='10px'>


                                                                <Avatar size='md' name='Segun Adebayo' src='https://bit.ly/sage-adebayo' alignSelf='flex-start' />
                                                                <InputGroup>
                                                                    <Input w='380px' onChange={handleChange}></Input>
                                                                    <Button isDisabled={isButtonDisabled} colorScheme='blue' >Post</Button>
                                                                </InputGroup>

                                                            </HStack>


                                                            {comments.map(c =>

                                                                <HStack ml='20px' alignItems='center' mb='10px'>

                                                                    <Avatar size='md' name='Segun Adebayo' src='https://bit.ly/sage-adebayo' alignSelf='flex-start' />
                                                                    <Card templateColumns='repeat(auto-fill, minmax(500px, 1fr))' w='450px' variant='filled' p='10px' pt='3px' >
                                                                        <Text as='b'>Name of employee</Text>
                                                                        <Text color='blackAlpha.500' fontSize='xs' pb='5px'>Sr.Business Analyst</Text>
                                                                        <Text>
                                                                            commentslllllllllllll
                                                                        </Text>
                                                                    </Card>
                                                                </HStack>
                                                            )}





                                                        </Card>

                                                        {/* <Card>
        <Flex spacing='4' mt='20px' ml='20px'>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />

                <Box >
                    <Heading size='sm'>Segun Adebayo</Heading>
                    <Text>Creator, Chakra UI</Text>
                </Box>
                <Box ml='300px'>
                    <CloseButton onClick={() => offComments()} float='right' />
                </Box>

            </Flex>

        </Flex>
        <CardBody>
            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.


            </Text>
        </CardBody>


    </Card> */}

                                                    </SimpleGrid>

                                                }


                                            </Box>


                                        )}
                                    </>





                                </div>
                                <div class="panel right-panel">
                                    <Card maxW='sm' mb='10px' >
                                        <Image
                                            objectFit='cover'
                                            src={r1}
                                        />
                                        <CardBody backgroundColor='#fff'>

                                            <Stack mt='0.1' spacing='3' backgroundColor='#fff'>
                                                <Heading size='sm' backgroundColor='#fff'>Rural Banking Initiative</Heading>
                                                <Text fontSize='xs' backgroundColor='#fff'>
                                                    Axis Saral embarked on a unique Rural Banking Initiative, the Rural Banking Services with branches in Punjab, Tamil Nadu, Rajasthan and Gujarat.
                                                </Text>

                                            </Stack>
                                        </CardBody>


                                    </Card>

                                    <Card maxW='sm' mb='10px'>
                                        <Image
                                            objectFit='cover'
                                            src={r2}
                                        />
                                        <CardBody backgroundColor='#fff'>

                                            <Stack mt='0.1' spacing='3' backgroundColor='#fff'>
                                                <Heading size='sm' backgroundColor='#fff'>Cross border transaction through the UPI network</Heading>
                                                <Text fontSize='xs' backgroundColor='#fff'>
                                                    Providing a real time and cost-effective cross border payment solution between India and Singapore.Currently, Axis Saral will settle these transactions to beneficiaries holding an account with or are registered on the UPI App of the six banks - SBI, IOB, Indian Bank, ICICI and DBS .
                                                </Text>

                                            </Stack>
                                        </CardBody>


                                    </Card>


                                    <Card maxW='sm' mb='10px'>
                                        <Image
                                            objectFit='cover'
                                            src={r3}
                                        />
                                        <CardBody backgroundColor='#fff'>

                                            <Stack mt='0.1' spacing='3' backgroundColor='#fff'>
                                                <Heading size='sm' backgroundColor='#fff'>Axis Saral dedicates Mathematics and Computing Centre at IISc</Heading>
                                                <Text fontSize='xs' backgroundColor='#fff'>
                                                    It will play a vital role in building the nation’s future as many contemporary and futuristic areas such as Artificial Intelligence and Data Science rely on the foundations of mathematics and computing.
                                                </Text>

                                            </Stack>
                                        </CardBody>


                                    </Card>

                                    <Card maxW='sm' mb='10px'>
                                        <Image
                                            objectFit='cover'
                                            src={r4}
                                        />
                                        <CardBody backgroundColor='#fff'>

                                            <Stack mt='0.1' spacing='3' backgroundColor='#fff'>
                                                <Heading size='sm' backgroundColor='#fff'>Axis Saral partners with OPEN to launch a fully digital current account proposition for businesses</Heading>
                                                <Text fontSize='xs' backgroundColor='#fff'>
                                                    Customers can avail banking services from Axis Saral, along with OPEN’s financial automation features.Customers can avail 250+ banking services and claim up to 50% cashback through grab-deals
                                                </Text>

                                            </Stack>
                                        </CardBody>


                                    </Card>



                                </div>
                            </div>






                        </div>


                    </SimpleGrid>
                </div>
            </div >

        </ChakraProvider >
    );
}

export default Newsfeed;