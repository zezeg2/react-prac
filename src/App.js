import './App.css';
import {useState} from "react";
import Page from './components/Page'
import {ThemeContext} from "./context/ThemeContext";
import {UserContext} from "./context/UserContext";

const App = () => {
    const [isDark, set_isDark] = useState(false);

    return (
        <UserContext.Provider value={'사용자'}>
            <ThemeContext.Provider value={{isDark, set_isDark}}>
                <Page/>
            </ThemeContext.Provider>

        </UserContext.Provider>
    );
};

export default App;
