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
            I am currently a junior at Stanford University in Stanford, California. My major is in computer science 
            with a special focus in Systems, including operating systems, compilers, networking, security, and 
            blockchain technologies. Accompanying my major, I am pursuing a minor in mathematics, with studies in 
            matrix theory, graph theory, and linear algebra.
          </Text>
        </VStack>
      </WrapItem>
    </Wrap>
  );
};

export default Education;
