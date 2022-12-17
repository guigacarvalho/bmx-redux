import { useOutletContext, useParams } from "react-router-dom"

export function Park() {
    const { id } = useParams()
    const obj = useOutletContext()
    return (
        <h1>Park {id} {obj.hello}</h1>
    )
}