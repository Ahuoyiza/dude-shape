import { Flex, Heading, Image, Text, Button, Box } from '@chakra-ui/react';
import { Container } from 'next/app';

export const Hero = ({ title }: { title: string }) => (
  <Flex  height="auto" >
    <Flex direction ="column" alignSelf="center" pl="6" flex="1">
      <Text float="left"fontSize="2vw"> * 2 Months Free Trial</Text>
      <Heading fontSize="6vw">{title}</Heading>
      <Text fontSize="1.5vw">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Text>
      <Flex mt="4">
        <Button variant="outline" color="#fff"bg="#333333"  width="30%" hover="color:#333333">Get Started </Button>
      </Flex>
   </Flex>
    <Flex flex="1">
      <Image alt="woman" src="https://res.cloudinary.com/sophire/image/upload/v1617884975/dudespaces/busy-woman-casual-clothes-working-laptop-home_b6avx1.jpg" />
    </Flex>
  </Flex>
)

Hero.defaultProps = {
  title: 'with-chakra-ui-typescript',
}