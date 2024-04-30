import {useState} from "react";

const RegisterPage = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const register = async (ev: any) => {
        ev.preventDefault()
        const response = await fetch('http://localhost:4000/register', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type':'application/json'}
        })

        if (response.status === 200) {
            alert('Registration successful');
        } else {
            alert('Registration failed');
        }
    }
    return (
        <form className="register" onSubmit={register}>
            <h1>Register</h1>
            <input type="text" placeholder="username" value={username} onChange={(e) => setUserName(e.target.value)}/>
            <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button >Register</button>
        </form>
    );
};

export default RegisterPage;