import React from 'react';
import { Box, HStack, Image, Text, VStack, Wrap, WrapItem } from '@chakra-ui/react';
import Headshot from 'src/media/casual_headshot.jpg';
import { FaGithub, FaLinkedinIn, FaRegEnvelope } from 'react-icons/fa';

const Home = () => {
  const mailRef = React.createRef();
  const isMobile = window.innerWidth < 992;

  return (
    <Box bg="white" h="100vh" display="flex" justifyContent="center" alignItems="center">
      <Wrap align="center" justify="center" spacing="25px">
        <WrapItem>
          <Box
            overflow="hidden"
            borderRadius="50%"
            h={200}
            w={200}
            border="solid 10px rgba(140,21,21,0.9)"
            boxShadow="0 8px 12px rgba(0,0,0,0.2)"
          >
            <Image src={Headshot} mt={-5} />
          </Box>
        </WrapItem>
        <WrapItem>
          <VStack
            spacing={15}
            alignItems={isMobile ? "center" : "left"}
            textAlign={isMobile ? "center" : "left"}
          >
            <Text fontSize="4xl">👋 Tommy Adams</Text>
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
        </WrapItem>
      </Wrap>
    </Box>
  );
};

export default Home;
