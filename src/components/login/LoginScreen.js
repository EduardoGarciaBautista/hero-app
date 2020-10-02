import React, {useContext} from "react";
import {AuthContext} from "../../auth/AuthContext";
import {types} from "../../types/types";

export const LoginScreen = ({history}) => {

    const {dispatch} = useContext(AuthContext);

    const lastPath = localStorage.getItem('lastPath') || '/';
    const handleLogin = (e) => {
        e.preventDefault();

       dispatch({
           type: types.login,
           payload: {
               name: 'Eduardo GB'
           }
       });
        history.replace(lastPath);
    }

    return(
        <div className="container mt-5 text-center">
            <h1>Login</h1>
            <hr/>
            <button
            className="btn btn-primary"
            onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}