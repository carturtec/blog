import React from 'react';

import { Container } from './styles';

export default function Footer({onToggleTheme, selectedTheme}) {
  return (
    <Container>
      <span>My Blog's - Todos os direitos reservados.</span>
      <button type="button" onClick={onToggleTheme}
      >
       {selectedTheme ==='dark' ? '🌞' : '🌙' }
      </button>
    </Container>
  );
}