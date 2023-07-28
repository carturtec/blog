import React, {Component} from 'react';
import {ThemeContext} from '../../contexts/ThemeContext';
import { Container } from './styles';

//passando props com classes
export default class Header extends Component {

  render() {
    const {onToggleTheme, selectedTheme} = this.props;

    return (
      <ThemeContext.Consumer>
        {({theme, handleToggleTheme}) => (
         <Container>
           <h1>My Blog's</h1>
           <button type="button" onClick={handleToggleTheme}
           >
            {theme ==='dark' ? '🌞' : '🌙' }
           </button>
         </Container>
        )}
      </ThemeContext.Consumer>
    );
  }
}




/*export default function Header({onToggleTheme, selectedTheme}) {
  return (
    <Container>
      <h1>My Blog's</h1>
      <button type="button" onClick={onToggleTheme}
      >
       {selectedTheme ==='dark' ? '🌞' : '🌙' }
      </button>
    </Container>
  );
}*/