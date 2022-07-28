import React from 'react';
import { Wrap, WrapItem, Image, Text, VStack, Link } from '@chakra-ui/react';

const Experience = ({ image, name, link, position, date, description, imageWidth = '100%' }) => {
  return (
    <Wrap
      spacing={{ base: "50px", md: "75px" }}
      py={15}
      justify="center"
    >
      <WrapItem w={{ base: "100%", md: "30%" }} data-sal="slide-up" data-sal-duration="500">
        <Image src={image} w={imageWidth} />
      </WrapItem>
      <WrapItem w={{ base: "100%", md: "30%" }} data-sal="slide-up" data-sal-duration="500">
        <VStack align="left" spacing={1}>
          <Link
            color="purple.500"
            align="left"
            fontSize="3xl"
            fontWeight={500}
            href={link}
            target="_blank"
          >
            {name}
          </Link>
          <Text color="blue.500" align="left" fontSize="xl" fontWeight={500}>{position}</Text>
          <Text align="left" fontSize="xl" fontWeight={500}>{date}</Text>
          {description}
        </VStack>
      </WrapItem>
    </Wrap>
  );
};

export default Experience;
