import { useState } from 'react'
import Dashboard from './Dashboard'
import LogIn from './LogIn'
import NavBar from './NavBar'

export default function DynamicPage() {
    const [user, setUser] = useState({userName:null, loggedIn:null})
    const getInfo = (user) => {
        setUser(user)
        console.log(user)
    }

    return (
        <div>
            <NavBar/>
            {!user.loggedIn
            ? <LogIn getInfo={getInfo}/>
            : <Dashboard user={user}/>
            }
            
        </div>
    )
}
