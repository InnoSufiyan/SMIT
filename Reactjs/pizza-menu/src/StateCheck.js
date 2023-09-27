import { useEffect, useState } from "react"


export default function StateCheck() {
    const [menus, setMenus] = useState(0)
    const [inputText, setInputText] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const controller = new AbortController()

    const apiCall = async (inputText) => {
        setIsLoading(true)
        const response = await fetch(
            `https://forkify-api.herokuapp.com/api/v2/recipes?search=${inputText}`,
            {signal: controller.signal}
        );

        const res = await response.json()
        // console.log(res, "==>>res")
        setMenus(res)
        setIsLoading(false)
    }

    useEffect(() => {
       inputText && apiCall(inputText)
       console.log("chal jaa new api")

       return function() {
        console.log("ruk jaa purani api")
        controller.abort()
       }
    }, [inputText])


    // console.log("baahir wala console")


    return (
        <>

            <div>

                <input placeholder="search your recipes" value={inputText} onChange={(e) => setInputText(e.target.value)} />

            </div>

            {
                isLoading && <div> Loading </div>
            }

            {
                menus?.data?.recipes?.length == 0 && <h1> No data found </h1>
            }

            {
                menus?.data?.recipes?.map((menu) => (
                    <>
                        <img src={menu?.image_url} width={200} />
                        <h1>
                            {menu?.title}
                        </h1>
                    </>
                ))
            }
        </>
    )
}