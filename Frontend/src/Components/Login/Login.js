import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setGlobal } from '../global';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }
    const navigate = useNavigate();

    // function handleSubmit(event) {
    //     event.preventDefault();

    //     // TODO: Validate email and password

    //     // Simulate login request
    //     setTimeout(() => {
    //         dispatch(setEmail(email));
    //     }, 1000);
    // }

    const validate = () => {
        setGlobal({ empemail: email });
        navigate("/profile", { state: email })





    }
    console.log(email);
    return (
        <div>
            <h1>Login</h1>

            <label>
                Email:
                <input type="email" value={email} onChange={handleEmailChange} />
            </label>
            <br />
            <label>
                Password:
                <input type="password" value={password} onChange={handlePasswordChange} />
            </label>
            <br />
            <button onClick={() => validate()}>Log In</button>

        </div>
    );
}
export default Login;