import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import Sidebar from 'src/components/Home/Sidebar';
import Landing from 'src/components/Home/Landing';
import Education from 'src/components/Home/Education';
import Interest from 'src/components/Home/Interest';
import Experience from 'src/components/Home/Experience';
import Skills from 'src/components/Home/Skills';

const Home = () => {
 return (
    <Box w="100%" h="2000px">
      <Sidebar />
      <Landing />
      <Box bg="white" textAlign="center" p="50px">
        <Text
          fontSize={{ base: "2xl", md: "4xl"}}
          fontWeight={700}
          data-sal="slide-up"
          data-sal-duration="1000"
        >
          —— What I'm up to ——
        </Text>
        <Education />
      </Box>
      <Box bg="#ECECEC" textAlign="center" p="50px">
        <Text
          fontSize={{ base: "2xl", md: "4xl" }}
          fontWeight={700}
          data-sal="slide-up"
          data-sal-duration="1000"
        >
          —— My SWE Path ——
        </Text>
        <Experience />
      </Box>
      <Box bg="white" textAlign="center" p="50px">
        <Text
          fontSize={{ base: "2xl", md: "4xl" }}
          fontWeight={700}
          data-sal="slide-up"
          data-sal-duration="1000"
        >
          —— Key Interest ——
        </Text>
        <Interest />
      </Box>
      <Box bg="#ECECEC" textAlign="center" p="50px">
        <Text
          fontSize={{ base: "2xl", md: "4xl" }}
          fontWeight={700}
          data-sal="slide-up"
          data-sal-duration="1000"
        >
          —— Skills ——
        </Text>
        <Skills />
      </Box>
      <Box h="100vh" display="flex" justifyContent="center" alignItems="center">
        <Text
          fontSize={{ base: "2xl", md: "4xl" }}
          fontWeight={700}
          data-sal="slide-up"
          data-sal-duration="1000"
          color="white"
        >
          Connect with me!
        </Text>
      </Box>
    </Box>
  );
};

export default Home;
