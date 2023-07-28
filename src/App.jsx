import React from 'react';
import { useState, useMemo, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider} from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';
import {ThemeProvider, ThemeContext} from './contexts/ThemeContext';

import themes from './styles/themes';

class App extends React.Component {
  


  render(){
    return(
      <ThemeProvider>
       <ThemeContext.Consumer>
         {({theme, handleToggleTheme}) => (
          <StyledThemeProvider theme={themes[theme] || themes.dark}>
           <GlobalStyle />
           <Layout />          
          </StyledThemeProvider>
         )}
       </ThemeContext.Consumer>       
      </ThemeProvider>
    );
  }
}

/*function App() {
  const [theme, setTheme] = useState('dark');

  //useEffect armazenando no local storage
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme]);

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme]);

  function handleToggleTheme() {
    setTheme(prevState => prevState === 'dark' ? 'light' : 'dark');
  }

    return(
        <ThemeProvider theme={currentTheme}>
          <GlobalStyle />
          <Layout 
             onToggleTheme={handleToggleTheme} 
             selectedTheme={theme}
          />                                           
        </ThemeProvider>
    );
};*/

export default App;