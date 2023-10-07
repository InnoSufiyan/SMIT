import { useState } from "react"

export default function KeyComponent() {
    const [food, setFood] = useState([{
        foodName: "biryani",
        price: 500
    }, {
        foodName: "korma",
        price: 300
    }, {
        foodName: "karahi",
        price: 350
    }])
    return (
        <>
            {/* <ul>
                <li onClick={()=>setTab("1")}>
                    one
                </li>
                <li onClick={()=>setTab("2")}>
                    two
                </li>
                <li onClick={()=>setTab("3")}>
                    three
                </li>
            </ul> */}
            {true ? <Description key="adas" item={food[0]}  /> : <Description key="mjm" item={food[1]} />}
        </>
    )
}

function Description({ item }) {

    return (
        <>
            <h1>
                {item.foodName}
            </h1>
            <h1>
                {item.price}
            </h1>
            <Rating />
        </>
    )
}

function Rating() {
    const [num, setNum] = useState(5)
    return (
        <>
            <button onClick={() => setNum(num - 1)}>
                -
            </button>
            <h2>
                rating : {
                    num
                }
            </h2>
            <button onClick={() => setNum(num + 1)}>
                +
            </button>
        </>
    )
}