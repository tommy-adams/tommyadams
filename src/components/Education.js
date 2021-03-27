import React from 'react';
import { Wrap, WrapItem, Text, Image, VStack } from '@chakra-ui/react';
import Stanford from 'src/media/stanford.jpeg';

const Education = () => {
  return (
    <Wrap
      spacing="50px"
      py={15}
      justify="center"
      data-sal="slide-up"
      data-sal-duration="1000"
    >
      <WrapItem>
        <Image src={Stanford} w={400} borderRadius="md" />
      </WrapItem>
      <WrapItem w={{ base: "100%", md: "40%" }}>
        <VStack align="left" spacing={1}>
          <Text align="left" fontSize="3xl" fontWeight={500}>Stanford University 🌲</Text>
          <Text align="left" fontSize="2xl" fontWeight={500}>Bachelor of Science, B.S. - Computer Science</Text>
          <Text align="left">
            I am currently a first-year undergraduate student at Stanford University in Palo Alto, California.
            In my short time at Stanford, I have taken an interest in many topics including computer science,
            high-level mathematics, and economics. I am still unsure if I will strive for a minor in economics
            or mathematics, but I am certain that my major will be computer science with a specialization in 
            artificial intelligence. My long-term goal at this university is to be accepted into its coterminal
            program for AI.
          </Text>
        </VStack>
      </WrapItem>
    </Wrap>
  );
};

export default Education;
