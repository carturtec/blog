import React, {Component} from 'react';

import { Container } from './styles';

//passando props com classes
export default class Header extends Component {
  render() {
    const {onToggleTheme, selectedTheme} = this.props;

    return (
      <Container>
        <h1>My Blog's</h1>
        <button type="button" onClick={onToggleTheme}
        >
         {selectedTheme ==='dark' ? '🌞' : '🌙' }
        </button>
      </Container>
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