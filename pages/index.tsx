import {Stack} from '@chakra-ui/react';
import {Hero} from '../components/Hero';
import {Header} from '../components/Header';

export default function Home() {
  return (
    <Stack>
      <Header />
      <Hero  title = "What would you like to learn?"/>
    </Stack>
  )
}
