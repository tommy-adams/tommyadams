import React from 'react';
import { VStack, Wrap, WrapItem } from '@chakra-ui/react';
import SkillBar from 'src/components/common/SkillBar';

const Skills = () => {
  return (
    <Wrap
      justify="center"
      py={15}
      spacing={{ base: 2, md: "250px" }}
      data-sal="slide-up"
      data-sal-duration="1000"
    >
      <WrapItem>
        <VStack>
          <SkillBar skill="ReactJS" level={5} />
          <SkillBar skill="NodeJS" level={5} />
          <SkillBar skill="HTML/CSS" level={5} />
          <SkillBar skill="Teamwork" level={5} />
          <SkillBar skill="Leadership" level={5} />
          <SkillBar skill="ExpressJS" level={4} />
        </VStack>
      </WrapItem>
      <WrapItem>
        <VStack>
          <SkillBar skill="C++" level={4} />
          <SkillBar skill="Systems Fundamentals" level={4} />
          <SkillBar skill="Assembly" level={3} />
          <SkillBar skill="C" level={3} />
          <SkillBar skill="MongoDB" level={3} />
        </VStack>
      </WrapItem>
    </Wrap>
  );
};

export default Skills;
