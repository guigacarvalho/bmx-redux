import ParkItem from "./ParkItem"
import ParkContext from "../context/ParkContext"
import { useContext } from "react"

const ParkList = () => {

    const {parks} = useContext(ParkContext)

    if (!parks || parks.length === 0) {
        return <p>no parks added yet</p>
    }

    return (
        <div className="park-list">
            {parks.map((item) => (
                <ParkItem
                    key={item.id}
                    item={item}
                />
            ))}
        </div>
    )
}

export default ParkList