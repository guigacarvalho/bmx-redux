import { Link } from 'react-router-dom'
import bmxlogo from '../images/bmxlogo.jpg'

const Header = () => {

    return (
        <header className='header'>
            <div className='logo'>
                <img src={bmxlogo} alt='bmxlogo' className='bmxlogo'/>
                <Link to='/'><h1>bmxparks.org</h1></Link>
            </div>
            <ul class="nav-links">
                <li>
                    <Link className='header-link' end to="/addpark">add park</Link>
                </li>
                <li>
                    <Link className='header-link' end to="/logout">log out</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header