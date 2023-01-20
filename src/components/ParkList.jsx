import ParkItem from "./ParkItem"
import ParkContext from "../context/ParkContext"
import { useContext } from "react"

const ParkList = () => {

    const {park} = useContext(ParkContext)

    if (!park || park.length === 0) {
        return <p>no parks added yet</p>
    }

    return (
        <div className="park-list">
            {park.map((item) => (
                <ParkItem
                    key={item.id}
                    item={item}
                />
            ))}
        </div>
    )
}

export default ParkList