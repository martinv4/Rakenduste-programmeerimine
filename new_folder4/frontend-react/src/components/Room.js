import {React} from "react";


function Room({ room, type }) {
    return (
        <>
        <p>Ruumi nr: { room }</p>
        <p>Tüüp: { type }</p>
        </>
    )
}

export default Room