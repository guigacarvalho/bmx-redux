import { Link, Outlet, useSearchParams } from "react-router-dom"

export function ParkLayout() {
    const [searchParams, setSearchParams] = useSearchParams({ n: 3})
    const number = searchParams.get("n")
    return (
        <>
            <h1>Park List</h1>
            <Link to="/parks/1">Park 1</Link>
            <br />
            <Link to="/parks/2">Park 2</Link>
            <br />
            <Link to={`/parks/${number}`}>Park {number}</Link>
            <br />
            <Link to="/parks/new">New Park</Link>
            <Outlet  context={{ hello: "World" }}/>
            <input 
                type="number" 
                value={number} 
                onChange={e => setSearchParams({ n: e.target.value })}
            />
        </>
    )
}