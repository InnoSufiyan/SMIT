import { useState } from "react"

function SelectionApp() {

    const [myCounter, setMyCounter] = useState(1)

    const [advices, setAdvices] = useState([
        "Learn React",
        "Now Have Handsome Income",
        "Invest your New Income"
    ])

    function nextHandler() {
        console.log("next")
        if(myCounter < 3) {
            setMyCounter(myCounter + 1)
        }
    }
    function previousHandler() {
        console.log("previous")
        if(myCounter > 0) {
            setMyCounter(myCounter - 1)
        }
    }

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>

                {
                    Array.from([1, 2, 3], x => (
                        <div style={{ height: '50px', width: '50px', borderRadius: '50%', backgroundColor: myCounter >= x ? 'blue' : 'grey', textAlign: 'center', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {
                                x
                            }
                        </div>
                    ))
                }


            </div >
            <p style={{ textAlign: 'center' }}>
                {
                    advices[myCounter - 1]
                }
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                {
                    Array.from(["previous", "next"], x => (
                        <button onClick={x == "previous" ? previousHandler : nextHandler}>{x}</button>
                    ))
                }
            </div>
        </>

    )
}

export default SelectionApp