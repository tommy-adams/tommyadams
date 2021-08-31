import React from 'react';
import { Box, VStack } from '@chakra-ui/react';
import { FaGithub, FaLinkedinIn, FaRegEnvelope } from 'react-icons/fa';

const Nav = () => {
  const mailRef = React.createRef();

  return (
    <VStack spacing={0} position="fixed" left={0} top="50%" transform="translateY(-50%)" zIndex={99}>
      <Box
        p={2}
        bg="#2867B2"
        color="white"
        fontSize="3xl"
        onClick={() => window.open('https://www.linkedin.com/in/thomas-adams-2001/', '_blank')}
        style={{ cursor: 'pointer' }}
      >
        <FaLinkedinIn />
      </Box>
      <Box
        p={2}
        bg="black"
        color="white"
        fontSize="3xl"
        onClick={() => window.open('https://github.com/tommy-adams', '_blank')}
        style={{ cursor: 'pointer' }}
      >
        <FaGithub />
      </Box>
      <Box
        p={2}
        bg="purple"
        color="white"
        fontSize="3xl"
        onClick={() => mailRef.current.click()}
        style={{ cursor: 'pointer' }}
      >
        <FaRegEnvelope />
      </Box>
      {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
      <a href="mailto:thomasadams012@gmail.com" hidden ref={mailRef} />
    </VStack>
  );
};

export default Nav;
