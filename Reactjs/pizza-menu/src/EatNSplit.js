import { useState } from "react"

export default function EatNSplit() {

    const [frndsList, setFrndList] = useState(
        [
            {
                userId: 1,
                name: "Clark",
                url: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
                money: 500
            },
            {
                userId: 2,
                name: "Sarah",
                url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80",
                money: -175
            },
            {
                userId: 3,
                name: "Anthony",
                url: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
                money: 0
            }
        ]
    )

    //true   //lkjefrok4354n
    const [splitState, setSplitState] = useState(false)

    const [user, setUser] = useState({})

    const [addFriendBox, setAddFriendBox] = useState(false)


    function addFriendHandler(name, imgUrl) {
        const jugariList = [...frndsList]
        jugariList.push({
            name,
            url: imgUrl,
            money: 0
        })
        setFrndList(jugariList)


        //another way if you dont want to create a jugariList variable
        setFrndList([...frndsList, { name: name, url: imgUrl, money: 0 }])
        console.log(frndsList, "==>>frndList")

    }


    return (
        <>
            <div style={{ display: 'flex' }}>

                <div>

                    <div style={{ width: "50%" }}>
                        {
                            frndsList?.map((frnd, i) => (
                                <div key={i} style={{ border: 'black 2px solid', borderRadius: "20px", display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ height: '70px', width: '70px', borderRadius: "50%", overflow: 'hidden' }}>
                                        <img src={frnd.url} alt="image of user" style={{ width: "100%", height: '100%', }} />
                                    </div>
                                    <div>
                                        <p>{frnd.name}</p>
                                        {
                                            frnd.money > 0 ? <p>
                                                Menay {frnd.name} sey {frnd.money} lenay hain
                                            </p> : frnd.money < 0 ? <p>
                                                Menay {frnd.name} ko {Math.abs(frnd.money)} denay hain
                                            </p> : <p>
                                                Hum sath sath hain
                                            </p>
                                        }

                                    </div>

                                    {
                                        frnd?.userId === user?.userId ? (
                                            <button onClick={() => {
                                                setSplitState(false)
                                                setUser({})
                                            }}>Close</button>
                                        ) : (
                                            <button onClick={() => {
                                                setSplitState(true)
                                                setUser(frnd)
                                            }}>Select</button>
                                        )
                                    }
                                </div>
                            ))
                        }
                    </div>
                    <button onClick={() => {
                        setAddFriendBox(true)
                    }}>Add Friend</button>
                    {
                        addFriendBox && <AddFriendBox setAddFriendBox={setAddFriendBox} addFriendHandler={addFriendHandler} />
                    }
                </div>
                {
                    splitState && <EatSplitArea frnd={user} />
                }
                {/* <Check1 component={<GenericAlert text="error" />}  />
                <Check1 component={<GenericAlert text="success" />} />
                <Check1 component={<GenericAlert text="fail" />} /> */}

                <Check1>
                    <h1>dasdasd</h1>
                    <GenericAlert text="success" /></Check1>
                    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" width="200" />
                <Check1>
                    <GenericAlert text="fail" />
                </Check1>
                <Check1>
                    <GenericAlert text="error" />
                </Check1>
            </div>

        </>
    )
}



function AddFriendBox({ setAddFriendBox, addFriendHandler }) {




    console.log(setAddFriendBox, "==>>setAddFriendBox")
    const [name, setName] = useState("")
    const [imgUrl, setImageUrl] = useState("")
    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: "30%" }}>
            <input placeholder="name" onChange={(e) => setName(e.target.value)} value={name} />
            <input placeholder="url" onChange={(e) => setImageUrl(e.target.value)} value={imgUrl} />
            <button onClick={() => {
                addFriendHandler(name, imgUrl)
                setName("")
                setImageUrl("")
            }}>Add</button>
            <button onClick={() => setAddFriendBox(false)}>Close</button>
        </div>
    )
}


function EatSplitArea({ frnd }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h1>
                Split a bill with {frnd.name}
            </h1>
            Bill Value <input placeholder="461321" />
            Your expense <input placeholder="461321" />
            {frnd.name} expense <input placeholder="461321" />
            <select>
                <option>You</option>
                <option>{frnd.name}</option>
            </select>
            <button>Add Bill</button>
        </div>
    )
}

function Check1({ children }) {
    return (
        <>
            {children}
        </>
    )
}

function GenericAlert({ text }) {
    return (
        <h1>{text}</h1>
    )
}


