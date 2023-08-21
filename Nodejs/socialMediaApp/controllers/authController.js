export const registeration = (req, res) => {
    console.log("user ki registration ki api")
    console.log(req.body)
    res.status(200).send({
        status: "Success",
        message: "User Signed up Successfully"
    })
}
export const login = (req, res) => {
    res.status(200).send({
        status: "Success",
        message: "User Logged in Successfully"
    })
}