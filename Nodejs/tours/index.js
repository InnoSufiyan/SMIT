import express from "express";

import fs from 'fs'

const app = express()

const port = 8000

const toursJson = fs.readFileSync('./tours.json', 'utf-8')

const parsedToursData = JSON.parse(toursJson)

console.log(JSON.parse(toursJson), "==>>toursJson")

app.use(express.json())

app.get('/api/v1/tours', (req, res) => {
    res.status(200).json({
        status: "success",
        data: parsedToursData
    })
})

app.get('/api/v1/tours/:tourId', (req, res) => {
    console.log(req.params.tourId, "==>>params")
    console.log(typeof req.params.tourId, "==>>typeof")
    console.log(parsedToursData?.data.length, "==>>length")

    if ((req.params.tourId * 1) > parsedToursData?.data.length) {
        return res.status(404).send("Data not available")
    }

    const singleTour = parsedToursData?.data?.find(tour => tour.id == req.params.tourId)

    console.log(singleTour, "===>> singleTour")

    res.status(200).json({
        status: "success",
        data: singleTour
    })
})

app.post('/api/v1/tours', (req, res) => {
    console.log(parsedToursData.data.length, "already available tours")

    if (!req.body.destinationName || !req.body.country || !req.body.tourCapacity || !req.body.departure || !req.body.arrival || !req.body.price || !req.body.transport) {
        res.status(400).send({
            status: "Rejected",
            data: "Missing Fields"
        })
    }

    const datatoWriteInDb = {
        id: parsedToursData.data.length + 1,
        ...req.body
    }

    parsedToursData.data.push(datatoWriteInDb)

    fs.writeFile('./tours.json', JSON.stringify(parsedToursData), () => {
        res.status(200).send({
            status: "Success",
            data: "Data added Successfully"
        })
    })
})

app.delete('/api/v1/tours/:tourId', (req, res) => {
    console.log(req.params.tourId)
    const filteredData = parsedToursData.data.filter(tour => tour.id != (req.params.tourId * 1))

    parsedToursData.data = filteredData

    fs.writeFile('./tours.json', JSON.stringify(parsedToursData), () => {
        res.status(200).send({
            status: "success",
            data: "Successfully Deleted"
        })
    })
})

app.put('/api/v1/tours/:tourId', (req, res) => {
    console.log(req.params.tourId)

    let indexNumber;

    parsedToursData.data.forEach((tour, idx) => {
        if (tour.id === (req.params.tourId * 1)) {
            indexNumber = idx
        }
    })

    parsedToursData.data.splice(indexNumber, 1, req.body)

    // parsedToursData.data.splice()

    fs.writeFile('./tours.json', JSON.stringify(parsedToursData), () => {
        res.status(200).send({
            status: "success",
            data: "Update Successfully"
        })
    })
})



app.listen(port, () => {
    console.log(`Server running on port number ${port}`)
})