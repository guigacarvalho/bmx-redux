import { Map } from '../components/Map'
import ParkList from '../components/ParkList'
import { ParkProvider } from '../context/ParkContext';

export function Home() {
    return (
    <>
        <main>
            <Map />
            <ParkList />
        </main>
    </>
    )
}