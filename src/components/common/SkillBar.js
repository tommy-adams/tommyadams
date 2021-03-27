import React from 'react';
import { Text, HStack } from '@chakra-ui/react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const SkillBar = ({ skill, level }) => {
  const emptyLevel = 5 - level;
  const stars = [];
  for (let i = 0; i < level; i++) {
    stars.push(<AiFillStar />);
  }
  for (let i = 0; i < emptyLevel; i++) {
    stars.push(<AiOutlineStar />);
  }

  return (
    <HStack>
      <Text fontSize="xl">{skill}</Text>
      <HStack spacing={1}>
        {stars.map(s => {
          return s;
        })}
      </HStack>
    </HStack>
  );
};

export default SkillBar;
