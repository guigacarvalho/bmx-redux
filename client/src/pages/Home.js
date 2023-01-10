import { Map } from '../components/Map'
import { ParkList } from './ParkList';

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