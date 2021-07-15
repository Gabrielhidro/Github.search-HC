import React from 'react';
import Routes from './routes'
import Header from './components/Header'
import { GlobalStyle } from './globalStyles'

function App() {

  return (
    <>
      <Header />
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
