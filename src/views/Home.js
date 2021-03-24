import React from 'react';
import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react';
import Headshot from 'src/media/casual_headshot.jpg';
import { FaGithub, FaLinkedinIn, FaRegEnvelope } from 'react-icons/fa';

const breakpoint = 992;

const Home = () => {
  const mailRef = React.createRef();

  if (window.innerWidth < breakpoint) {
    return (
      <Box bg="white" h="100%" px={5} pt={100}>
        <VStack h="100%" alignItems="center" justifyContent="center">
          <Box overflow="hidden" borderRadius="50%" h={150} w={150} border="solid 10px rgba(140,21,21,0.9)">
            <Image src={Headshot} mt={-5} />
          </Box>
          <VStack textAlign="center" spacing={25}>
            <Text fontSize="4xl">Hi 👋, I'm Tommy Adams.</Text>
            <Text>My website is under reconstruction, but here are my important links:</Text>
            <HStack spacing={25}>
              <Box
                as={FaLinkedinIn}
                fontSize="2xl"
                onClick={() => window.open('https://www.linkedin.com/in/thomas-adams-2001/', '_blank')}
                style={{ cursor: 'pointer' }}
              />
              <Box
                as={FaGithub}
                fontSize="2xl"
                onClick={() => window.open('https://github.com/tommy-adams', '_blank')}
                style={{ cursor: 'pointer' }}
              />
              <Box
                as={FaRegEnvelope}
                fontSize="2xl"
                onClick={() => mailRef.current.click()}
                style={{ cursor: 'pointer' }}
              />
              {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
              <a href="mailto:thomasadams012@gmail.com" hidden ref={mailRef} />
            </HStack>
          </VStack>
        </VStack>
      </Box>
    );
  }

  return (
    <Box bg="white" h="100vh" w="100vw">
      <HStack h="100%" alignItems="center" justifyContent="center" spacing={50}>
        <Box overflow="hidden" borderRadius="50%" h={200} w={200} border="solid 10px rgba(140,21,21,0.9)">
          <Image src={Headshot} mt={-5} />
        </Box>
        <VStack spacing={15} alignItems="left">
          <Text fontSize="4xl">Hi 👋, I'm Tommy Adams.</Text>
          <Text>My website is under reconstruction, but here are my important links:</Text>
          <HStack spacing={25}>
            <Box
              as={FaLinkedinIn}
              fontSize="2xl"
              onClick={() => window.open('https://www.linkedin.com/in/thomas-adams-2001/', '_blank')}
              style={{ cursor: 'pointer' }}
            />
            <Box
              as={FaGithub}
              fontSize="2xl"
              onClick={() => window.open('https://github.com/tommy-adams', '_blank')}
              style={{ cursor: 'pointer' }}
            />
            <Box
              as={FaRegEnvelope}
              fontSize="2xl"
              onClick={() => mailRef.current.click()}
              style={{ cursor: 'pointer' }}
            />
            {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
            <a href="mailto:thomasadams012@gmail.com" hidden ref={mailRef} />
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
};

export default Home;
