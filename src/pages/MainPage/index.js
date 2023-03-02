import React from 'react';
import {MdSearch} from 'react-icons/md';

import { Container, Logo, Title, Form, Input, Button } from './styles';

import githublogo from '../../assets/images/github-logo.svg';

const MainPage = () => (
  <Container>
    <Logo src={githublogo} alt="API GitHub" />
    <Title>API GitHub</Title>
    <Form>

      <Input placeholder="Usuario" />
      <Button>
        <MdSearch size={42} />
      </Button>
    </Form>
  </Container>
);

export default MainPage;
