import { useState } from "react";


const Login = () => {

    const [isLogIn, setIslogIn] = useState(false);

    const handleLogin = () => {
        setIslogIn(true);
    }

    const handleLogOut = () => {
        setIslogIn(false);
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogOut}>LogOut</button>
            <div> User is {isLogIn ? 'Logged in' : 'Logged out'}</div>
        </div>
    );
};

export default Login;