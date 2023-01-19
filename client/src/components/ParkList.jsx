import ParkCard from "./ParkCard"
import ParkContext from "../context/ParkContext"
import { useContext } from "react"

const ParkList = () => {

    const {parks} = useContext(ParkContext)

    if (!parks || parks.length === 0) {
        return <p>no parks added yet</p>
    }

    return (
        <div className="park-list">
            {parks.map((card) => (
                <ParkCard
                    key={parks.id}
                    park={park}
                />
            ))}
        </div>
    )
}

export default ParkList