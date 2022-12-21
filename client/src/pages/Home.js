import { NavLink, useLocation } from 'react-router-dom';
import { Map } from '../components/Map'
import { ParkList } from './ParkList';
import '../App.css'

export function Home() {
    const location = useLocation()
    return (
    <>
        <h1 class="header">bmxparks.org</h1>
        <nav class="nav">
            <ul class="nav-links">
                <li>
                    <NavLink to="/">home</NavLink>
                </li>
                <li>
                    <NavLink end to="/addpark">add park</NavLink>
                </li>
                <li>
                    <NavLink end to="/logout">log out</NavLink>
                </li>
            </ul>
        </nav>
        {location.state}
        <Map />
        <ParkList />
    </>
    )
}