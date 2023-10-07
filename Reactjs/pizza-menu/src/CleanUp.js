import { useEffect, useState } from "react"

export default function CleanUp() {

    const [bilal, setBilal] = useState(false)


    return (
        <>
        <button onClick={()=> setBilal(!bilal)}>Set Bilal</button>
            {bilal && <MeraComponent />}
        </>
    )
}

function MeraComponent() {

    const [rizwan, setRizwan] = useState(false)

    useEffect(()=> {
        console.log("kuch bhi")


        return function() {
            console.log("Mera component mar gaya")
        }

    }, [rizwan])
    return (
        <>
            kuch bhi data
            <button onClick={()=> setRizwan(!rizwan)}>
                Re-render
            </button>
        </>
    )
}