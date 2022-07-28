import React from 'react';
import { VStack, Text } from '@chakra-ui/react';
import ExpRow from 'src/components/common/ExpRow';
import Thoughtcloud from 'src/media/tc_logo.png';
import Dulead from 'src/media/dulead_logo.png';
import Peach from 'src/media/peach-3d.png';

const peachDescription = (
  <Text align="left">
    Peach is an early-stage startup focused on alleviating loneliness in virtual spaces. As a co-founding engineer, my responsibilities 
    included building out the Firestore database architecture, establishing authentication and an API through Firebase, building a 
    push notification infrastructure through Apple and Firebase, and developing significant app features in Swift and SwiftUI.
  </Text>
);

const tcDescription = (
  <Text align="left">
    Working at Thoughtcloud was an incredible way to connect with individuals my age that share my interest in technology and 
    bettering the life of students! Thoughtcloud is a platform that encourages student collaboration and organization in their 
    courses. Though it is not yet publicly launched, it will do amazing things in the educational atmosphere!
    <br />
    <br />
    At Thoughtcloud, I used my skills in React and DevOps to build large-scale features in the application and review code from 
    the other developers. Thoughtcloud introduced me to a new and fresh startup culture that operated like a hive, where everyone 
    had the same goal of getting this product off the ground. The determination of a startup team is unmatched, and I am proud to 
    have been a part of it!
  </Text>
);

const duleadDescription = (
<Text align="left">
  Interning at Dulead was my first experience with software engineering in a professional setting. Upon starting the internship, 
  I had no idea what to expect. And, to be honest, at first glance into the code base, I was overwhelmed! However, I was 
  surrounded by a great group of people that helped me get acclimated to this unfamiliar environment.
  <br />
  <br />
  Dulead helped me refine my skills in React, Node, Redux, Ruby on Rails, and SQL. My primary focus was building features in both 
  the frontend and API for Dulead's web application. My features, both small and large, were used for services like Character Amp, 
  iAspire Education, and iAspire Business to supply coaches, teachers, and businesses alike with tools for culture improvement and 
  growth!
  <br />
  <br />
  After my first summer at Dulead, my internship was extended for another year and a half. In this later part of my internship, 
  I had the pleasure of leading two other interns in development, where I gained skills in DevOps and small-scale management. 
  Dulead enabled me to hone my software engineering skills by delivering a product to thousands of people and inspired me to 
  build other projects (both personal and freelance). It also made me realize I'm not a fan of Ruby on Rails. I prefer the 
  MERN stack.
</Text>
);

const Experience = () => {
  return (
    <VStack spacing={25}>
      <ExpRow
        image={Peach}
        name="Peach"
        link="https://peachparty.app"
        position="Software Engineer"
        date="April 2022 - Present"
        description={peachDescription}
        imageWidth="60%"
      />
      <ExpRow
        image={Dulead}
        name="Dulead"
        link="https://dulead.com"
        position="Software Engineer Intern"
        date="June 2018 – August 2021"
        description={duleadDescription}
      />
      <ExpRow
        image={Thoughtcloud}
        name="Thoughtcloud"
        link="https://thoughtcloud.me"
        position="Frontend Engineer"
        date="January 2021 – April 2021"
        description={tcDescription}
      />
      <Text fontWeight={700}>...and other various freelance projects!</Text>
    </VStack>
  );
};

export default Experience;
