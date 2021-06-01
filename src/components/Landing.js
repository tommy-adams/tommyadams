import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import Picture from 'src/media/me_train.jpg';
import MobilePicture from 'src/media/me_train_mobile.jpeg';

const Landing = () => {
  const isMobile = window.innerWidth < 992;

  return (
    <Box h="100vh">
      {isMobile ? (
        <>
          <Text
            position="absolute"
            zIndex={1}
            left="60%"
            top="125px"
            color="white"
            fontSize="xl"
            fontWeight={700}
            data-sal="fade"
            data-sal-duration="1000"
          >
            Hey, I'm Tommy Adams.
          </Text>
          <Image src={MobilePicture} position="fixed" zIndex={-2} objectFit="cover" />
        </>
      ) : (
        <>
          <Text
            position="absolute"
            zIndex={1}
            color="white"
            right="10%"
            top="10%"
            fontSize="4xl"
            fontWeight={900}
            data-sal="fade"
            data-sal-duration="1000"
          >
            Hey, I'm Tommy Adams.
          </Text>
          <Image src={Picture} position="fixed" zIndex={-2} objectFit="cover" />
        </>
      )}
    </Box>
  );
};

export default Landing;
