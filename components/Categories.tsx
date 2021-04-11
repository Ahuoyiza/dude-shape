import {Flex, Box, Text, Image, Link, Spacer} from '@chakra-ui/react';

export const Categories = () => {
    return (
        <Flex direction="column" mt="10">
            <Flex mb= "8">
                <Box textAlign="center" p="8">
                    <Box fontSize="30">15M+</Box>
                    <Text>Learners &amp; counting</Text>
                </Box>
                <Spacer />
                <Box textAlign="center"  p="8">
                    <Box fontSize="30">15M+</Box>
                    <Text>Learners &amp; counting</Text>
                </Box>
                <Spacer />
                <Box textAlign="center" p="8">
                    <Box fontSize="30">15M+</Box>
                    <Text>Learners &amp; counting</Text>
                </Box>
                <Spacer />
                <Box textAlign="center" p="8">
                    <Box fontSize="30">15M+</Box>
                    <Text>Learners &amp; counting</Text>
                </Box>
            </Flex>
            <Flex mt="10">
                <Flex flex="1">
                    <Image color="#00B586" src="https://res.cloudinary.com/sophire/image/upload/v1617965707/Personal/svg/clipart-0006_mlih3i.svg"/>
                </Flex>
                <Spacer />
                <Flex direction="column" flex="2" justifyItems="center" alignItems="center">
                    <Box fontSize="1.5vw" color="#00B586"lo><Link>BROWSE CATEGORIES</Link></Box>
                    <Text fontSize="3vw" fontWeight="700">Popular topics to learn</Text>
                </Flex>
                <Spacer />
                <Flex flex="1">
                    <Image src="https://res.cloudinary.com/sophire/image/upload/v1617965707/Personal/svg/clipart-0006_mlih3i.svg"/>
                </Flex>
            </Flex>
        </Flex>
    )
}