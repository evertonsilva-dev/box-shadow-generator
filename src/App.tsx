import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { withTheme } from 'styled-components';
import Loader from './components/Loader';
import Routes from './router';
import GlobalStyle from './styles';

interface Props {
  theme: {
    mode: String;
  };
}
const App = (props: Props) => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Suspense>
      <GlobalStyle />
    </>
  );
};

export default withTheme(App);
