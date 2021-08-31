import React, { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from "react-redux";
import Routes from 'src/routes';
import sal from 'sal.js';
import store from "./store";

const App = () => {
  useEffect(() => {
    sal();
  }, []);

  return (
    <ChakraProvider>
      <Provider store={store}>
        <Routes />
      </Provider>
    </ChakraProvider>
  );
}

export default App;
