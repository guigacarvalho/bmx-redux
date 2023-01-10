import { Link } from 'react-router-dom'

const Header = () => {

    return (
        <header className='header'>
            <div className='logo'>
                <Link to='/'>bmxparks.org</Link>
            </div>
            <ul class="nav-links">
                <li>
                    <Link end to="/addpark">add park</Link>
                </li>
                <li>
                    <Link end to="/logout">log out</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header