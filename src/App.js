import React, { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Routes from 'src/routes';
import sal from 'sal.js';

const App = () => {
  useEffect(() => {
    sal();
  }, []);

  return (
    <ChakraProvider>
      <Routes />
    </ChakraProvider>
  );
}

export default App;
