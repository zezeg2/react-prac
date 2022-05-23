import {useContext} from "react";

import {ThemeContext} from "../context/ThemeContext";
import {UserContext} from "../context/UserContext";

export const Content = () => {
    const {isDark} = useContext(ThemeContext);
    const user = useContext(UserContext)
    return (
        <div className="content"
             style={{
                 backgroundColor: isDark ? 'black' : 'lightgray',
                 color: isDark ? 'white' : 'black'
             }}>

            <p>{user} 좋은하루 되라.</p>
        </div>
    );
}