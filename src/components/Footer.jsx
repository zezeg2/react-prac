import {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext";

export const Footer = () => {
    const {isDark,set_isDark} = useContext(ThemeContext);
    const toggleTheme = () => {
        set_isDark(!isDark)
    };
    return (
        <footer className="footer"
                style={{
                    backgroundColor: isDark ? 'black' : 'lightgray',
                }}>
            <button className="button" onClick={toggleTheme}>DarkMode</button>
        </footer>
    )
};