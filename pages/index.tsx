import {Stack, Flex, Spacer} from '@chakra-ui/react';
import {Hero} from '../components/Hero';
import {Header} from '../components/Header';
import {Categories} from '../components/Categories';
import {Topics} from '../components/Topics';

export default function Home() {
  return (
    <Stack>
      <Header />
      <Hero  title = "What would you like to learn?"/>
      <Categories />
      <Flex direction="column" pb="15" mt = "16" p="4" width="85vw" justifySelf="center" alignSelf="center">
        <Flex mb="10">
          <Topics />
          <Spacer />
          <Topics />
          <Spacer />
          <Topics />
        </Flex>
        <Flex>
          <Topics />
          <Spacer />
          <Topics />
          <Spacer />
          <Topics />
        </Flex>
      </Flex>
    </Stack>
  )
}
