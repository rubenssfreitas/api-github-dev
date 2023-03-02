import React from 'react';

import { Container, Logo } from './styles';

import githublogo from '../../assets/images/github-logo.svg';

const MainPage = () => (
  <Container>
    <Logo src={githublogo} alt="API GitHub" />
  </Container>
);

export default MainPage;
