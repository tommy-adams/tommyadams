import React, { useEffect, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from "react-redux";
import Routes from 'src/routes';
import sal from 'sal.js';
import store from "./store";
import LoadContext from 'src/contexts/LoadContext';
import LoadWrapper from 'src/components/common/LoadWrapper';

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    sal();
  }, []);

  return (
    <ChakraProvider>
      {loading && <LoadWrapper />}
      <LoadContext.Provider value={{ loading, setLoading }}>
        <Provider store={store}>
          <Routes />
        </Provider>
      </LoadContext.Provider>
    </ChakraProvider>
  );
}

export default App;
