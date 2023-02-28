import { useEffect } from 'react';
import axios from 'axios';
import './Services.css'
import stake from '../../images/stake-propic.jpg'
import logo from '../../axis-logo.png';
import crypto from '../../images/crypto-p.jpg';
import propic from '../../images/stake-propic.jpg';
import flowchart from '../../images/flowchart.svg';
import credit from '../../images/credit.png';
import { ChakraProvider, HStack, ListItem, UnorderedList, VStack } from '@chakra-ui/react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Divider,
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

import pic1 from '../../images/news-icon.png';
import pic2 from '../../images/org-icon.png';
import pic3 from '../../images/pro-icon.png';
import pic4 from '../../images/ser-icon.png';
import pic5 from '../../images/doc-icon.png';

import pmpic from '../../images/pro-pic.png'

import pic0 from '../../images/logo-img.jpeg';
import { useState } from 'react';
import s1 from '../../images/ServiceImages/online-banking.png';
import s2 from '../../images/services/car-loan.png';
import s3 from '../../images/services/debit-card.png';

import b1 from '../../images/banner/banner-fd.jpg'
import b2 from '../../images/banner/banner-car.jpg'
import b3 from '../../images/banner/banner-card.jpg'



import c1 from '../../images/banner/clock.png'
import c2 from '../../images/banner/sand-clock.png'
import c3 from '../../images/banner/money.png'
import c4 from '../../images/banner/fine.png'


import { setGlobal } from '../global';

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,


} from '@chakra-ui/react'

const Services = () => {

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
        else {
            navigate('/newsfeed');
        }

    }

    const [isDrawer1Open, setIsDrawer1Open] = useState(false);
    const [isDrawer2Open, setIsDrawer2Open] = useState(false);
    const [isDrawer3Open, setIsDrawer3Open] = useState(false);

    const toggleDrawer1 = () => {
        setIsDrawer1Open(!isDrawer1Open);
    };

    const toggleDrawer2 = () => {
        setIsDrawer2Open(!isDrawer2Open);
    };
    const toggleDrawer3 = () => {
        setIsDrawer3Open(!isDrawer3Open);
    };
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
                            <HStack columns={2} spacing='800px' ml='100px' mt='10px'>
                                <Breadcrumb ml='20px'>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink ><Text as='b'>Home</Text></BreadcrumbLink>
                                    </BreadcrumbItem>

                                    <BreadcrumbItem>
                                        <BreadcrumbLink isCurrentPage><Text as='b'>Services</Text></BreadcrumbLink>
                                    </BreadcrumbItem>


                                </Breadcrumb>
                                <Box id="menu" bg='white' w='80px' h='59px' mt='10px' mr='10px'   >
                                    <HStack spacing='2px' float='right' >
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
                            <Box>
                                <>
                                    <div className="container">
                                        <h1>Our Services</h1>
                                        <div className="row">
                                            <div className="service" onClick={toggleDrawer1}>
                                                <img src={s1} width='30px' height='30px' />
                                                <h2>Digital FD</h2>
                                                <p>
                                                    Digital Fixed Deposit is an industry-first digital Full KYC Fixed Deposit product. Open Digital Fixed Deposit without an Axis Bank Savings Account by providing your basic details. It comes with a host of features like attractive FD interest rates, zero issuance fees and no penalty on premature withdrawal (up to 25% of the amount). A quick and convenient way to save money.
                                                </p>
                                            </div>

                                            <div className="service" onClick={toggleDrawer2}>
                                                <img src={s2} width='30px' height='30px' />
                                                <h2>Vehicle Loan</h2>
                                                <p>Who doesn't love to own a car! And it get bigger each time you wish to upgrade.So, why dim your wishes when you can comfortably own it? Be it purchase of new car or takeover of existing vehicle,our easy car loan will help you through it.Avail attractive interest rates with minimal paperwork.</p>
                                            </div>

                                            <div className="service" onClick={toggleDrawer3}>
                                                <img src={s3} width='30px' height='30px' />
                                                <h2>Credit Card</h2>
                                                <p>Credit cards are a convenient way of making any purchases from shopping to purchasing your favourite gadget to buying that new AC for your home to booking your flights & hotel and more or settling exorbitant bills when you don't have immediate funds at your disposal.

                                                    In short, an Axis Saral Credit Card makes Beautiful Possibilities. Ready For You.</p>
                                            </div>



                                        </div>
                                    </div>


                                </>
                            </Box>




                        </Box>







                    </SimpleGrid>

                    <Drawer
                        isOpen={isDrawer1Open}
                        placement='right'
                        onClose={toggleDrawer1}
                        // finalFocusRef={btnRef}

                        size='lg'
                    >
                        <DrawerOverlay />
                        <DrawerContent >
                            <DrawerCloseButton />
                            <DrawerHeader></DrawerHeader>

                            <DrawerBody >

                                <>

                                    <Image src={b1} alt='Dan Abramov' />
                                    <Box mt='20px'>


                                        <Text as='b' fontSize={'22px'}  > Digitial FD</Text>

                                    </Box>
                                    <Box mt='10px' fontSize={'14px'}>

                                        <p>
                                            Digital Fixed Deposit is an industry-first digital Full KYC Fixed Deposit product. Open Digital Fixed Deposit without an Axis Bank Savings Account by providing your basic details. It comes with a host of features like attractive FD interest rates, zero issuance fees and no penalty on premature withdrawal (up to 25% of the amount). A quick and convenient way to save money.
                                        </p>


                                    </Box>



                                    <SimpleGrid mt='40px' columns={[1, null, 4]} spacing='40px'>
                                        <Box height='80px'>
                                            <VStack textAlign={'center'}>
                                                <Image src={c1} alt='Dan Abramov' h={'30px'} w={'30px'} />
                                                <Text fontSize={'13px'}> Open a Full KYC Fixed Deposit within minutes</Text>


                                            </VStack>
                                        </Box>
                                        <Box height='80px'>

                                            <VStack textAlign={'center'}>
                                                <Image src={c2} alt='Dan Abramov' h={'30px'} w={'30px'} />
                                                <Text fontSize={'13px'}>Open FD online without any bank savings account</Text>


                                            </VStack>
                                        </Box>
                                        <Box height='80px'>
                                            <VStack textAlign={'center'}>
                                                <Image src={c3} alt='Dan Abramov' h={'30px'} w={'30px'} />
                                                <Text fontSize={'13px'}> Extended amount and extended tenure
                                                </Text>


                                            </VStack>
                                        </Box>
                                        <Box height='80px'>
                                            <VStack textAlign={'center'}>
                                                <Image src={c4} alt='Dan Abramov' h={'30px'} w={'30px'} />
                                                <Text fontSize={'13px'}> No penalty on pre-mature FD withdrawal</Text>


                                            </VStack>
                                        </Box>

                                    </SimpleGrid>

                                    <HStack mt={'40px'} ml='40px' >
                                        <VStack w={'200px'} mt={'-30px'}>
                                            <Box mb='20px' ml={'-15px'}>

                                                <Text as='b' fontSize={'15px'} > Benefits for you</Text>
                                            </Box>



                                            <UnorderedList>
                                                <ListItem fontSize={'13px'}> No Savings Account Required</ListItem>
                                                <ListItem fontSize={'13px'}> Attractive Interest Rates</ListItem>
                                                <ListItem fontSize={'13px'}> Low Minimum Investment</ListItem>

                                            </UnorderedList>


                                        </VStack>

                                        <Stack direction='row' h='250px' p={4} >
                                            <Divider orientation='vertical' bg={'gray.400'} w='1px' />

                                        </Stack>

                                        <VStack>


                                            <Box mb='20px' ml={'5px'}>

                                                <Text as='b' fontSize={'15px'} > Eligibility</Text>
                                            </Box>


                                            <Box ml={'20px'}>
                                                <UnorderedList >
                                                    <ListItem fontSize={'13px'}> You are an Indian resident with 18+ years of age</ListItem>
                                                    <ListItem fontSize={'13px'}> You are located in India while opening the account</ListItem>
                                                    <ListItem fontSize={'13px'}> You should have a valid Pan and Aadhar card</ListItem>
                                                    <ListItem fontSize={'13px'}> Your mobile number is linked to Aadhaar card</ListItem>
                                                    <ListItem fontSize={'13px'}> You are not an existing Axis Bank customer</ListItem>

                                                </UnorderedList>


                                            </Box>

                                        </VStack>



                                    </HStack>


                                    <Box mt={'30px'}>

                                        <Text as={'b'} fontSize='17px'>How to open a Digital Fixed Deposit?</Text>

                                    </Box>

                                    <Box mt={'20px'}>

                                        <Text fontSize='14px'>It is easy to open Digital Fixed Deposits with us at Axis Bank. All you have to do is:</Text>

                                    </Box>


                                    <Box ml={'20px'} mt={'10px'}>
                                        <UnorderedList >
                                            <ListItem fontSize={'13px'}> Head to our website and choose the Digital Fixed Deposit option.</ListItem>
                                            <ListItem fontSize={'13px'}> Then, verify yourself with your Aadhaar and PAN card.</ListItem>
                                            <ListItem fontSize={'13px'}> Next, enter the requested personal information like your name, address, email-id, and the like.</ListItem>
                                            <ListItem fontSize={'13px'}> Then, choose the Digital FD fund amount.</ListItem>
                                            <ListItem fontSize={'13px'}> Finish the process with a short Know Your Customer (KYC) video call with our authorised agent.</ListItem>

                                        </UnorderedList>


                                    </Box>


                                    <Box mt={'20px'}>

                                        <Text fontSize='14px'>Once you open your Digital FD, download the Axis Bank mobile banking app from Google or Apple Play store and:</Text>

                                    </Box>


                                    <Box ml={'20px'} mt={'10px'}>
                                        <UnorderedList >
                                            <ListItem fontSize={'13px'}> Log in with your customer ID</ListItem>
                                            <ListItem fontSize={'13px'}> Verify your mobile number</ListItem>
                                            <ListItem fontSize={'13px'}> Create an mPIN that will work for future logins</ListItem>
                                            <ListItem fontSize={'13px'}> Enter the OTP we send on your mobile number</ListItem>
                                            <ListItem fontSize={'13px'}> Track your digital FD</ListItem>

                                        </UnorderedList>


                                    </Box>


                                    <Box mt={'30px'}>

                                        <Text as={'b'} fontSize='17px'>Digital Fixed Deposits Interest Rates</Text>

                                    </Box>



                                    <Box ml={'20px'} mt={'10px'}>

                                        <Text fontSize={'13px'}> The Digital Fixed Deposit interest rates do not vary from the standard Fixed Deposit interest rates. However, Axis Bank offers a higher rate of interest, especially for senior citizens. Senior citizens get higher interest rates upto0.75% than non-seniors. The interest rates depend on the tenure of the Fixed Deposit</Text>

                                    </Box>



                                    <Box mt={'30px'}>

                                        <Text as={'b'} fontSize='17px'>Factors that affect Digital Fixed Deposit Interest Rates</Text>

                                    </Box>

                                    <Box mt={'20px'}>

                                        <Text fontSize='14px'>Several factors affect Digital Fixed Deposit rates. These include:</Text>

                                    </Box>


                                    <Box ml={'20px'} mt={'10px'}>
                                        <UnorderedList >
                                            <ListItem fontSize={'13px'}> The Digital Fixed Deposits eligibility criteria. You must have basic documents like your Aadhaar and PAN card in place. Moreover, your mobile number must be linked to your Aadhaar.</ListItem>
                                            <ListItem fontSize={'13px'}> The tenure of your Fixed Deposit is a crucial factor that affects Digital Fixed Deposit rates. The standard rule is that the longer the tenure, the higher interest you accumulate. For instance, a 6-month Digital FD can have an interest rate of 3%, but a 5-year FD would have an interest rate of 5%-6%.</ListItem>
                                            <ListItem fontSize={'13px'}> The amount you invest in the Digital FD will also affect the interest rate payable. Again, the standard rule here is that the higher the amount invested, the better returns you can accrue.</ListItem>
                                            <ListItem fontSize={'13px'}> Your age will also influence the Digital Fixed Deposit rates. For example, senior citizens (usually above 60 years) always get a higher interest rate than non-seniors.</ListItem>


                                        </UnorderedList>


                                    </Box>

                                </>
                            </DrawerBody>

                            <DrawerFooter>
                                {/* <Button variant='outline' mr={3} onClick={onClose}>
                                                    Cancel
                                                </Button> */}
                                {/* <Button bg='#af275f' onClick={() => downloadPDF1()}>Download as PDF</Button> */}
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>




                    <Drawer
                        isOpen={isDrawer2Open}
                        placement='right'
                        onClose={toggleDrawer2}
                        // finalFocusRef={btnRef}

                        size='lg'
                    >
                        <DrawerOverlay />
                        <DrawerContent >
                            <DrawerCloseButton />
                            <DrawerHeader></DrawerHeader>

                            <DrawerBody >

                                <>

                                    <Image src={b2} alt='Dan Abramov' />
                                    <Box mt='20px'>


                                        <Text as='b' fontSize={'22px'}  > Vehicle Loan</Text>

                                    </Box>
                                    <Box mt='10px' fontSize={'14px'}>

                                        <p>Who doesn't love to own a car! And it get bigger each time you wish to upgrade.So, why dim your wishes when you can comfortably own it? Be it purchase of new car or takeover of existing vehicle,our easy car loan will help you through it.Avail attractive interest rates with minimal paperwork.</p>



                                    </Box>

                                    <Box mt={'20px'}>

                                        <Text fontSize='14px'>Taking a car loan to buy a car comes with an array of benefits some of which have been explained below:</Text>

                                    </Box>


                                    <Box ml={'20px'} mt={'10px'}>
                                        <UnorderedList >
                                            <ListItem fontSize={'13px'}> Can be repaid in easy EMIs - The repayment of your car loan can be made in easy equated monthly instalments (EMIs) which you can decide yourself but will be based on the repayment tenure you choose, and the interest rate charged by the lender. EMIs reduce your burden of having to pay a large sum at once towards the loan repayment. Instead, you can repay in smaller amounts, according to your affordability.</ListItem>
                                            <ListItem fontSize={'13px'}> No need for providing collateral - When you avail a car loan, you do not have to provide any collateral as the vehicle itself will be considered as one. The car will be hypothecated to the bank and in case of any default in payments, the lender will have the authority to seize the vehicle, auction it, and recover the outstanding loan amount. There is no need for you to provide any additional security/collateral for a car loan.</ListItem>
                                            <ListItem fontSize={'13px'}> Great for building your credit history - If you take a car loan and make timely payments, it will lead to an enhancement of your credit score. Having a good credit score will assure lenders of your good repayment capability and this may translate to them offering you lower interest rates or other benefits such as waiver in processing fees, etc.</ListItem>

                                        </UnorderedList>


                                    </Box>





















                                </>
                            </DrawerBody>

                            <DrawerFooter>
                                {/* <Button variant='outline' mr={3} onClick={onClose}>
                                                    Cancel
                                                </Button> */}
                                {/* <Button bg='#af275f' onClick={() => downloadPDF1()}>Download as PDF</Button> */}
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>




                    <Drawer
                        isOpen={isDrawer3Open}
                        placement='right'
                        onClose={toggleDrawer3}
                        // finalFocusRef={btnRef}

                        size='lg'
                    >
                        <DrawerOverlay />
                        <DrawerContent >
                            <DrawerCloseButton />
                            <DrawerHeader></DrawerHeader>

                            <DrawerBody >

                                <>

                                    <Image src={b3} alt='Dan Abramov' />
                                    <Box mt='20px'>


                                        <Text as='b' fontSize={'22px'}  >Credit Card</Text>

                                    </Box>
                                    <Box mt='10px' fontSize={'14px'}>

                                        <p>Credit cards are a convenient way of making any purchases from shopping to purchasing your favourite gadget to buying that new AC for your home to booking your flights & hotel and more or settling exorbitant bills when you don't have immediate funds at your disposal.

                                            In short, an Axis Saral Credit Card makes Beautiful Possibilities. Ready For You.</p>


                                    </Box>

                                    <Box mt={'20px'}>

                                        <Text fontSize='14px'>The benefits of credit cards are innumerable, and some prime ones are:</Text>

                                    </Box>


                                    <Box ml={'20px'} mt={'10px'}>
                                        <UnorderedList >
                                            <ListItem fontSize={'13px'}>  Buy on credit:

                                                What makes a credit card attractive is the credit limit allowed to the cardholder. You can buy anything within that limit and pay later. Your monthly budget will not affect, even if you buy items of high value on credit. One among the most important benefits of credit card is you can convert the total amount of your purchases into low-cost EMIs to enable you to repay it easily over a period of time. This has helped revolutionize the shopping experience.</ListItem>
                                            <ListItem fontSize={'13px'}> Most accepted method of payment:

                                                You can travel anywhere, without carrying much money if you have this card. Being the most accepted method of payment, you can use a credit card to pay anything.</ListItem>
                                            <ListItem fontSize={'13px'}> Interest-free cash withdrawals:

                                                There are a few credit cards that allow you to withdraw money up to a certain limit in case of emergency, with no interest charged up to 45 to 50 days. You can make use of it in times of financial emergency.</ListItem>
                                            <ListItem fontSize={'13px'}> 4. Unlimited reward points:

                                                These cards come with reward points when you use them. For instance, IDFC FIRST Bank credit cards offer unlimited and never-expiring reward points, which are easily redeemable.</ListItem>

                                        </UnorderedList>


                                    </Box>

                                </>
                            </DrawerBody>

                            <DrawerFooter>
                                {/* <Button variant='outline' mr={3} onClick={onClose}>
                                                    Cancel
                                                </Button> */}
                                {/* <Button bg='#af275f' onClick={() => downloadPDF1()}>Download as PDF</Button> */}
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>




                </div>
            </div >
        </ChakraProvider >
    );
}

export default Services;