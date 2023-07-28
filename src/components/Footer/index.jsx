import React, {useContext} from 'react';

import {ThemeContext} from '../../contexts/ThemeContext';
import { Container } from './styles';

//usando context de forma funcional
export default function Footer() {
  const {theme, handleToggleTheme} = useContext(ThemeContext)

  return (    
    <Container>
      <span>My Blog's - Todos os direitos reservados.</span>
      <button type="button" onClick={handleToggleTheme}
      >
       {theme ==='dark' ? '🌞' : '🌙' }
      </button>
    </Container>   
   

  
  );
}