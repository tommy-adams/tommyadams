import React from 'react';
import clsx from "clsx";
import { Box, Text } from '@chakra-ui/react';
import Sidebar from 'src/components/Home/Sidebar';
import Landing from 'src/components/Home/Landing';
import Education from 'src/components/Home/Education';
import Experience from 'src/components/Home/Experience';
import Calendario from 'src/media/calendario_example.png';
import { FiArrowRight } from 'react-icons/fi';

const Home = () => {
 return (
    <Box w="100vw" h="2000px">
      <Sidebar />
      <Landing />
      <Box bg="white" textAlign="center" p="50px">
        <Text
          fontSize={{ base: "2xl", md: "4xl"}}
          fontWeight={700}
          data-sal="slide-up"
          data-sal-duration="1000"
        >
          —— What I'm up to ——
        </Text>
        <Education />
      </Box>
      <Box bg="#ECECEC" textAlign="center" p="50px">
        <Text
          fontSize={{ base: "2xl", md: "4xl" }}
          fontWeight={700}
          data-sal="slide-up"
          data-sal-duration="1000"
        >
          —— My SWE Path ——
        </Text>
        <Experience />
      </Box>
      <Box bg="purple.500" p="50px">
        <div
          className={clsx("flex flex-wrap", {
            "space-y-4": window.innerWidth <= 640
          })}
          data-sal="slide-up"
          data-sal-duration="1000"
        >
          <div className="px-4 sm:px-10 w-full sm:w-1/2">
            <div
              className="flex transform hover:scale-105 items-center cursor-pointer"
              onClick={() => window.location.pathname = "/csubscribe"}
            >
              <img src={Calendario} alt="Calendario" className="rounded-md h-32 sm:h-56 mr-4" />
              <FiArrowRight className="text-4xl text-white" />
            </div>
          </div>
          <div className="w-full sm:w-1/2 text-center">
            <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight={700} color="white">Calendario</Text>
            <Text fontSize={{ base: "md", md: "xl" }} color="white">
              Calendario is a task manager for students that allows them to effeciently keep track of their assignments.
              Some of its features involve a calendar to show the due date of your assignments, a color coding system for 
              each class, and a unique account for each student that uses it. It was created using the MERN stack as well 
              as Redux, Chakra-UI, and Tailwindcss. You can sign up <a className="underline hover:text-purple-900" href="https://tommyadams.xyz/csubscribe">here</a>.
            </Text>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default Home;
