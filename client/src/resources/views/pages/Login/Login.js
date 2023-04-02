import {memo, useEffect, useState} from 'react'
import axios from 'axios'

const Login = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const HandleLogin = () => { 
        useEffect(() => {
            axios.get('/api/login')
            .then(res => {console.log(res.data)})
        },[])
    }

    return (
        <div>
            <form action='./api/login' method='post'  >
                <input type="text" value={userName} onChange={e => setUserName(e.target.value)} style={{border: '1px solid black'}}></input>
                <br />
                <input type='password' value={password} onChange={e => setPassword(e.target.value)} style={{border: '1px solid black'}}></input>
                <br />
                <input type='submit' onClick={() => {HandleLogin()}}></input>
            </form>
        </div>
    )
}

export default memo(Login)