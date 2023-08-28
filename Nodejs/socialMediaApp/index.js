import express from 'express'
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes.js'
import profileRoutes from './routes/profileRoutes.js'
import userRoutes from './routes/userRoutes.js';

const app = express()

const PORT = 8000

const mongoUri = 'mongodb+srv://sufiyanattari:DU4y5acIFafimC14@cluster0.7r8wctz.mongodb.net/'

// process.env.MONGO

const connect = () => {
    mongoose
        .connect(mongoUri)
        .then(() => {
            console.log(`connected to DB`);
        })
        .catch((err) => {
            throw err;
        });
};

app.use(express.json())

app.use((req, res, next) => {
    req.body.date = new Date()
    console.log(req.body)
    next()
})
//express.Router()
app.use('/auth', authRoutes)
app.use('/profile', profileRoutes)
app.use('/users', userRoutes)

app.use((req, res, next) => {
    res.send("ghalat jagah aagaey ho, aesa koi route hi nahin hai")
})

app.listen(PORT, () => {
    console.log("Server chal gaya at port number" + PORT)
    connect()
})