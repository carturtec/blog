import React from 'react';

import { Container } from './styles';

export default function Header({onToggleTheme}) {
  return (
    <Container>
      <h1>My Blog's</h1>
      <button type="button" onClick={onToggleTheme}>🌞</button>
    </Container>
  );
}