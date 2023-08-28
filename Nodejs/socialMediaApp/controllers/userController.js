import User from '../models/registerSchema.js'

// localhost:port/users/
// GET

export const getUsers = async (req, res) => {
    const users = await User.find()

    console.log(users)

    res.status(200).send({
        status: "success",
        message: "data found",
        data: users
    })
}


// localhost:port/users/:id
// GET

export const getUser = async (req, res) => {
    console.log(req.params)
    const user = await User.findById(req.params.id)

    console.log(user)

    res.status(200).send({
        status: "success",
        message: "data found of individual person",
        data: user
    })
}