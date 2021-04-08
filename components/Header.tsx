import { Flex, Spacer , Box, Heading, Button, Link} from "@chakra-ui/react";


export const  Header = () => {
    return(
        <Flex>
            <Box p="2">
                <Heading size="md">DudeSpaces</Heading>
            </Box>
            <Spacer />
            <Box mt="4">
                <Link mr="8">Courses</Link>
                <Link mr="8">Features</Link>
                <Link mr="8">Contact</Link>
                <Link>About</Link>
            </Box>
            <Spacer/>
            <Box mt="4">
                <Button variant="outline" colorScheme="blackAlpha" mr="4">
                Sign Up
                </Button>
                <Button variant="outline" colorScheme="blackAlpha">Log in</Button>
            </Box>
        </Flex>
    )
}