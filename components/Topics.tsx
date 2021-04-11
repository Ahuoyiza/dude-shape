import { Flex,Box, Text , Spacer} from '@chakra-ui/react';
import {FaShapes} from 'react-icons/fa';

export const  Topics =  ({topic}: {topic: string}, {text}: {text: string}) => {
    return (
        <Flex direction="column" flex="1" justifyItems="center" alignItems="center" p= "10 " textAlign="center">
            <Flex mb="6" fontSize="60" color="#00B586" justifyContent="center" alignContent="center"><FaShapes /></Flex>
            <Box mb="6">
            <Text fontSize = "20" fontWeight=" 400">{topic}</Text>
            </Box>
            <Box>
            <Text fontSize="15">The simple and secure wallet for buying, selling, sending and storing your cryptocurrencies</Text>
            </Box>
        </Flex>
    )
}
Topics.defaultProps = {
    topic: 'Computer Science',
    text: 'The simple and secure wallet for buying, selling, sending and storing your cryptocurrencies.'
  }