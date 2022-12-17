import { useState } from "react";
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.prevenDefault();
        const data = {
            username: username,
            password: password,
        }
        const request = await fetch("https://kobarsept.com/api/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
        const response = await request.json();
        localStorage.setItem('token', JSON.stringify(response))
        localStorage.setItem('users', JSON.stringify(data))
        navigate('/')
    }
    return (
        <>
            <h1 className="font-bold text-xl text-center p-8">Login Page</h1>
            <div className="container">
                <form className="add-form" onSubmit={handleSubmit}>
                    <label>
                        Username:
                        <input
                            className="add-input"
                            type="text"
                            data-testid="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>
                    <label>
                        Password:
                        <input
                            className="add-input"
                            type="text"
                            value={password}
                            data-testid="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <input className="submit-btn" type="submit" value="Submit" data-testid="submit" />
                </form>
            </div>
        </>
    )
}

export default Login