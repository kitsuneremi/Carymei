import { memo, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const HandleLogin = () => {
        let f = new FormData();
        f.append('username', userName)
        f.append('password', password)
        axios.post('http://localhost:5000/api/login', f)
            .then(res => { localStorage.setItem('accessToken', res.data.accessToken); localStorage.setItem('username', res.data.username); })
            .then(() => { navigate('/') })
    }

    return (
        <div style={{justifyContent: "center", display: 'flow'}}>
            <div><input type="text" value={userName} onChange={e => setUserName(e.target.value)} style={{border: '1px solid black', outline: '1px', margin: '3% 10%'}}></input></div>
            <div><input type='password' value={password} onChange={e => setPassword(e.target.value)} style={{border: '1px solid black', margin: '3% 10%'}}></input></div>
            <div><button onClick={() => {HandleLogin()}} style={{border: '1px solid black', margin: '3% 10%', padding: '10px'}}>login</button></div>
        </div>
    )
}

export default memo(Login)