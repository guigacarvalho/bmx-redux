import { NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { Map } from '../components/Map'
import { ParkList } from './ParkList';

export function Home() {
    const location = useLocation()
    return (
    <>
        <h1>bmxparks.org</h1>
        <nav class="nav">
            <ul>
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