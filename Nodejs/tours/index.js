import express from "express";

import fs from 'fs'

const app = express()

const port = 8000

const toursJson = fs.readFileSync('./tours.json', 'utf-8')

const parsedToursData = JSON.parse(toursJson)

console.log(JSON.parse(toursJson), "==>>toursJson")

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

app.listen(port, () => {
    console.log(`Server running on port number ${port}`)
})