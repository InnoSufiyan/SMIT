import { useEffect } from "react"
import { useParams } from "react-router-dom"

export default function UserProfile() {

    const {userid} = useParams()

    console.log(userid, "===>>addressPerKyaAya")

    useEffect(()=> {
        `http://userProfileApi?${userid}`
    })

    return (
        <>
            {userid} ki profile 
        </>
    )
}