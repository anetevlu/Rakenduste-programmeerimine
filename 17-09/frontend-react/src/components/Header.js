import { Menu } from 'antd'
import { Link } from 'react-router-dom'

function Header(){
    return(
        <>
            <Menu theme="light" mode="horizontal">                   
                <Menu.Item>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/login">Log in</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/signup">Sign up</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to='/logout'>Log out</Link>
                </Menu.Item>                
            </Menu>
        </>
    )
}

export default Header