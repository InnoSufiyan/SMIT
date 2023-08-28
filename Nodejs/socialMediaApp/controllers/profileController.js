export const getProfile = (req, res) => {
    console.log(req.params)
    res.status(200).send({
        status: "Success",
        data: {
            name: "sufiyan",
            age: 32
        },
        message: "Yeh log user ka data"
    })
}

export const updateProfile = (req, res) => {
    res.status(200).send({
        status: "Success",
        data: [],
        message: "User ki profile update hogai"
    })
}