import React from 'react';
import ShadowController from 'src/components/ShadowController';
import { Title } from 'src/styles/components';
import { Cont, HomeContainer } from './styles';
export default function Home() {
  return (
    <HomeContainer>
      <Cont>
        <Title>Box-Shadow Generator</Title>
        <ShadowController />
      </Cont>
    </HomeContainer>
  );
}
