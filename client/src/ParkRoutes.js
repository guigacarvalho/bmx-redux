import { Routes, Route } from 'react-router-dom';
import { ParkList } from "./pages/ParkList"
import { Park } from "./pages/Park";
import { NewPark } from "./pages/NewPark";
import { ParkLayout } from './ParkLayout';

export function ParkRoutes() {
    return (
        <>
            <Routes>
                <Route element={<ParkLayout />}>
                    <Route index element={<ParkList />} />
                    <Route path=":id" element={<Park />} />
                    <Route path="new" element={<NewPark />} />
                </Route>
            </Routes>
        </>
    )
}