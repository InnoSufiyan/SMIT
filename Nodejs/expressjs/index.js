import express from 'express'

const app = express();

const port = 8000;

// app.get('/', (req, res)=> {
//     res.status(200).send("Welcome to the home page")
// })

// app.get('/about', (req, res)=> {
//     res.status(200).send("Welcome to the about page")
// })
// app.get('/contact', (req, res)=> {
//     res.status(200).send("Welcome to the contact page")
// })
// app.get('/dahiBaray', (req, res)=> {
//     res.status(200).send("yeh lo dahiBaray")
// })
// app.get('/bhelPuri', (req, res)=> {
//     res.status(200).json({
//         plate: 1,
//         name: "bhelPuri",
//         price: 500
//     })
// })
// app.post('/bhelPuri', (req, res)=> {
//     res.status(200).send("Jani post bhel puri ki request ban gai")
// })
// app.delete('/bhelPuri', (req, res)=> {
//     res.status(200).send("Jani bhelPuri delete kardi")
// })
// app.put('/bhelPuri', (req, res)=> {
//     res.status(200).send("Jani bhelPuri main masala daal diya hai")
// })


// app.post('/register', (req, res)=> {
    
// })
// app.post('/login', (req, res)=> {

// })

// app.post('/forgetPassword', (req, res)=> {

// })

// app.get('/gettours', (req, res)=> {})
// app.get('/singleTour/:id', (req, res)=> {})

// app.post('/addTours', (req, res)=>{})
// app.delete('/deleteTours', (req, res)=>{})

app.listen(port, ()=> {
   console.log(`Sun raha hun server ko port number ${port} per`) 
})