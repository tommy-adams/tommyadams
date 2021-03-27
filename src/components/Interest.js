import React from 'react';
import { Box, Wrap, WrapItem, Text, Image, VStack } from '@chakra-ui/react';
import Finance1 from 'src/media/finance_1.svg';
import Finance2 from 'src/media/finance_2.svg';
import Finance3 from 'src/media/finance_3.svg';

const Interest = () => {
  return (
    <Box py={15}>
      <Wrap spacing="25px" justify="center">
        <WrapItem w={{ base: "100%", md: "25%" }} data-sal="slide-up" data-sal-duration="1000">
          <VStack spacing={5}>
            <Image src={Finance1} h={200} />
            <Text align="left" fontSize="md">
              In my sophomore year in high school, I designed a business plan for an entrepreneurship class. 
              My mission statement was plain and simple: bring financial literacy to low-income individuals. 
              I didn't realize at the time that this underlying focus of mine on the wealth gap would build 
              into a significant passion over time.
            </Text>
          </VStack>
        </WrapItem>
        <WrapItem w={{ base: "100%", md: "25%" }} data-sal="slide-up" data-sal-duration="1000">
          <VStack spacing={5}>
            <Image src={Finance2} h={200} />
            <Text align="left" fontSize="md">
              My short time at Stanford has taught me a lot about diversity in many different forms. I realized 
              that my background as a low-income first-generation student was not unique, and this fact 
              revitalized my interest in bridging the wealth gap.
            </Text>
          </VStack>
        </WrapItem>
        <WrapItem w={{ base: "100%", md: "25%" }} data-sal="slide-up" data-sal-duration="1000">
          <VStack spacing={5}>
            <Image src={Finance3} h={200} />
            <Text align="left" fontSize="md">
              I want to focus my computer science knowledge on this topic. Whether it be designing an app that 
              equips low-income individuals with financial literacy, creating some machine learning algorithm to 
              make policymakers conscientious of wealth inequality, or even creating a web app that gives free 
              stock market advice, my mission is as simple as it was in high school.
            </Text>
          </VStack>
        </WrapItem>
      </Wrap>
    </Box>
  );
};

export default Interest;
