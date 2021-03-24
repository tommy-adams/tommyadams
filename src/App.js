import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Routes from 'src/routes';

const App = () => {
  return (
    <ChakraProvider>
      <Routes />
    </ChakraProvider>
  );
}

export default App;
