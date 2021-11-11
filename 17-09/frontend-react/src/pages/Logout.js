import { useContext } from 'react'
import { logoutUser } from '../store/actions'
import { Typography, Button, notification } from 'antd'
import { Context } from "../store"


const { Title } = Typography

function Logout(){
    const [ state, dispatch ] = useContext(Context)

    function handleLogout(){
        dispatch(logoutUser())
        notification.success({message:'Logged out!'})
    }

    return (
        <div style={{textAlign:'center'}}>
            <Title>Log out</Title>
            <Button onClick={() => handleLogout()}>Log out</Button>
        </div>
    )
}

export default Logout