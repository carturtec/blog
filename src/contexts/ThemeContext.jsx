import React, {createContext, useState} from "react";

export const ThemeContext = createContext();

//método com classe
export class ThemeProvider extends React.Component {
    /*state = {
        theme: 'dark',
    };*/
    constructor(props) {
        super(props);

        let theme = 'dark';

        try {
            theme = JSON.parse(localStorage.getItem('theme'));
        } catch (err) {
            console.log(err);
        }

        this.state = {
            theme,
        };
    }

    handleToggleTheme = () => {
        this.setState(prevState =>({
            theme: prevState.theme === 'dark' ? 'light' : 'dark',
        }), () => {
            localStorage.setItem('theme', JSON.stringify(this.state.theme));
        });       
     }

     render() {
        return (
        <ThemeContext.Provider value={{
            theme: this.state.theme,
            handleToggleTheme: this.handleToggleTheme 
            }}
        >
            {this.props.children}
        </ThemeContext.Provider>

        );
     }
}

// método funcional
/*export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('dark');

    function handleToggleTheme() {
       setTheme(prevState => prevState === 'dark' ? 'light' : 'dark');
    }

    return(
        <ThemeContext.Provider value={{theme, handleToggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}*/