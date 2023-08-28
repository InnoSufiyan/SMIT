import User from '../models/registerSchema.js'

export const registeration = async (req, res) => {
    try {
        console.log("user ki registration ki api")
        console.log(req.body)

        // const newUser = new User(req.body)

        // await newUser.save();

        const newUser = await User.create(req.body)

        console.log(newUser, "==>>newUser")

        // const tours = tours.insetOne(req.body)      //data db main chala gaya
        res.status(200).send({
            status: "Success",
            message: "User Signed up Successfully",
            data: newUser
        })
    } catch (error) {
        console.log(error, "==>>errror")
        res.status(200).send({
            status: "Failed",
            message: error.message,
        })
    }
}
export const login = (req, res) => {
    res.status(200).send({
        status: "Success",
        message: "User Logged in Successfully"
    })
}