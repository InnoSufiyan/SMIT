import { useState } from "react"

export default function EatNSplit() {

    const [frndsList, setFrndList] = useState(
        [
            {
                name: "Clark",
                url: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
                money: 5
            },
            {
                name: "Sarah",
                url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80",
                money: 5
            },
            {
                name: "Anthony",
                url: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
                money: 5
            }
        ]
    )
    const [addFriendBox, setAddFriendBox] = useState(false)
    const [name, setName] = useState("")
    const [imgUrl, setImageUrl] = useState("")

    function addFriendHandler() {
        const jugariList = [...frndsList]
        jugariList.push({
            name,
            url: imgUrl,
            money: 0
        })
        setFrndList(jugariList)


        //another way if you dont want to create a jugariList variable
        // setFrndList([...frndsList, {name: name, url: imgUrl, money: 0}])
        console.log(frndsList, "==>>frndList")
        setName("")
        setImageUrl("")
    }


    return (
        <>
            <div style={{ width: "50%" }}>
                {
                    frndsList?.map((frnd) => (
                        <div style={{ border: 'black 2px solid', borderRadius: "20px", display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ height: '70px', width: '70px', borderRadius: "50%", overflow: 'hidden' }}>
                                <img src={frnd.url} alt="image of user" style={{ width: "100%", height: '100%', }} />
                            </div>
                            <div>
                                <p>{frnd.name}</p>
                                <p>You and Anthony are even</p>
                            </div>
                            <button>Select</button>
                        </div>
                    ))
                }
            </div>
            <button onClick={() => {
                setAddFriendBox(true)
            }}>Add Friend</button>
            {
                addFriendBox && (
                    <div style={{ display: 'flex', flexDirection: 'column', width: "30%" }}>
                        <input placeholder="name" onChange={(e) => setName(e.target.value)} value={name} />
                        <input placeholder="url" onChange={(e) => setImageUrl(e.target.value)} value={imgUrl} />
                        <button onClick={addFriendHandler}>Add</button>
                        <button onClick={() => setAddFriendBox(false)}>Close</button>
                    </div>
                )
            }

        </>
    )
}