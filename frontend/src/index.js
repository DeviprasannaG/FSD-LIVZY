import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Main';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <Main/>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);


