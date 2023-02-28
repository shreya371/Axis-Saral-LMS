import { useState } from "react";
import {
    Flex,
    Heading,
    Input,
    Button,
    InputGroup,
    Stack,
    InputLeftElement,
    chakra,
    Box,
    Link,
    Avatar,
    FormControl,
    FormHelperText,
    InputRightElement,
    ChakraProvider,
    useToast,
    Card,
    Image,
    HStack,
    Text
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { setGlobal } from "../global";

import lgimg from '../../images/LoginPageImg.jpg'

import logo from '../../images/AxisSaralLogo-2.png'
import logo3 from '../../images/AxisSaralLogo-3.png'

// import { FaUserAlt, FaLock } from "react-icons/fa";

// const CFaUserAlt = chakra(FaUserAlt);
// const CFaLock = chakra(FaLock);

const LoginPage = () => {
    const toast = useToast()


    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const handleShowClick = () => setShowPassword(!showPassword);

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const validate = () => {
        console.log("email" + email)
        console.log("password: " + password)

        let data = {
            login_email: email,
            login_password: password

        }
        fetch(`http://localhost:9092/ms2/validate`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        }).then(response => { return response.text() })
            .then(text => {
                if (text === "valid") {


                    toast({
                        title: 'Login Success',
                        // description: "We've created your account for you.",
                        position: 'top-right',
                        status: 'success',
                        duration: 9000,
                        isClosable: true,
                    })
                    setGlobal({ empemail: email });

                    setTimeout(() => {
                        navigate("/newsfeed", { state: email })
                        console.log('This will run after 1 second!')
                    }, 1000);







                }
                else {
                    toast({
                        title: 'Invalid Username or Password',
                        // description: "We've created your account for you.",
                        position: 'top-right',
                        status: 'error',
                        duration: 9000,
                        isClosable: true,
                    })

                }
            })

    }

    return (
        <ChakraProvider>

            <Box w='1000px' ml='auto' mr='auto' >
                <HStack>
                    <Image src={lgimg} position='fixed' w='1000px' h='500px'></Image>
                    <Flex

                        flexDirection="column"
                        width="100wh"
                        height="100vh"
                        backgroundColor="pink.20"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Stack
                            ml='500px'
                            flexDir="column"
                            mb="2"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Avatar src={logo} h='200px' w='300px' />
                            {/* <Image src={logo}> </Image> */}
                            {/* <Heading color="#af275f">AXIS SARAL</Heading>
                            <Text color='pink'>hello</Text> */}

                            <Box minW={{ base: "80%", md: "468px" }}>
                                <form>
                                    <Stack
                                        spacing={4}
                                        // p="1rem"
                                        backgroundColor="whiteAlpha.900"
                                        boxShadow="md"
                                    >
                                        <FormControl>
                                            <InputGroup>
                                                <InputLeftElement
                                                    pointerEvents="none"
                                                // children={<CFaUserAlt color="gray.300" />}
                                                />
                                                <Input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                                            </InputGroup>
                                        </FormControl>
                                        <FormControl>
                                            <InputGroup>
                                                <InputLeftElement
                                                    pointerEvents="none"
                                                    color="gray.300"
                                                // children={<CFaLock color="gray.300" />}
                                                />
                                                <Input
                                                    type={showPassword ? "text" : "password"}
                                                    placeholder="Password"
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                                <InputRightElement width="4.5rem">
                                                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                                                        {showPassword ? "Hide" : "Show"}
                                                    </Button>
                                                </InputRightElement>
                                            </InputGroup>
                                            {/* <FormHelperText textAlign="right">
                                        <Link>forgot password?</Link>
                                    </FormHelperText> */}
                                        </FormControl>
                                        <Button
                                            borderRadius={0}
                                            variant='solid'

                                            colorScheme='pink'
                                            // bg='#af275f'


                                            width="full"
                                            onClick={() => validate()}
                                        >
                                            Login
                                        </Button>
                                    </Stack>
                                </form>
                            </Box>
                        </Stack>
                        {/* <Box>
                    New to us?{" "}
                    <Link color="teal.500" href="#">
                        Sign Up
                    </Link>
                </Box> */}
                    </Flex>

                </HStack>


            </Box>
            {/* <Flex
                flexDirection="column"
                width="100wh"
                height="100vh"
                backgroundColor="pink.20"
                justifyContent="center"
                alignItems="center"
            >
                <Stack
                    flexDir="column"
                    mb="2"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Avatar bg="#af275f" />
                    <Heading color="#af275f">AXIS SARAL</Heading>
                    <Box minW={{ base: "90%", md: "468px" }}>
                        <form>
                            <Stack
                                spacing={4}
                                p="1rem"
                                backgroundColor="whiteAlpha.900"
                                boxShadow="md"
                            >
                                <FormControl>
                                    <InputGroup>
                                        <InputLeftElement
                                            pointerEvents="none"
                                        // children={<CFaUserAlt color="gray.300" />}
                                        />
                                        <Input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                                    </InputGroup>
                                </FormControl>
                                <FormControl>
                                    <InputGroup>
                                        <InputLeftElement
                                            pointerEvents="none"
                                            color="gray.300"
                                        // children={<CFaLock color="gray.300" />}
                                        />
                                        <Input
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Password"
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <InputRightElement width="4.5rem">
                                            <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                                                {showPassword ? "Hide" : "Show"}
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                  
                                </FormControl>
                                <Button
                                    borderRadius={0}

                                    variant="solid"
                                    colorScheme='pink'


                                    width="full"
                                    onClick={() => validate()}
                                >
                                    Login
                                </Button>
                            </Stack>
                        </form>
                    </Box>
                </Stack>
              
            </Flex> */}
        </ChakraProvider>
    );
};

export default LoginPage;
