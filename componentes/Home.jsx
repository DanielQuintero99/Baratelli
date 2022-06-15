import React, {useState} from 'react'
import HomeScreen from './HomeScreen';
import Login from './Login'

export default function Home () {
    const [login, setLogin] = useState(false);
    let handleLogin = () => {
        setLogin(!login);
    }

    return (
        <>
            {!login ? <Login handleLogin={()=>handleLogin()} /> : <HomeScreen/>}
        </>
    )
}