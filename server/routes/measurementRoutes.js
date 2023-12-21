const express = require('express');
const router = express.Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const measurementsPath = "./Data/Data.JSON";

router.use(express.json());

router
    .route('/measurements')
    .get((_req, res) => {

        try {

            const measurementsFile = fs.readFileSync(measurementsPath);
            const measurementsData = JSON.parse(measurementsFile)
            
            console.log("data being sent from the /videos route: ", measurementsData);
            res.send(measurementsData)

        } catch (err) {

            console.log("error from the /measurements fs.readFileSync object: ", err);
            res.status(500).send({ error: 'Internal Server Error' });

        }

    })
    .post((req, res) => {

        const newMeasurementSet = req.body;

        try {

            const measurementsFile = fs.readFileSync(measurementsPath);
            const measurementsData = JSON.parse(measurementsFile)
            // combining the req.body with a bunch of other data using the object spread operator
            measurementsData.push({
                id: `${uuidv4()}`,
                ...newMeasurementSet
            });

            fs.writeFileSync(measurementsPath, JSON.stringify(measurementsData, null, 2));
            res.status(201).send({ message: 'set of measurements added successfully', newMeasurementSet });

        } catch (err) {

            console.error('Error reading or writing to Data.json:', err);
            res.status(500).send({ error: 'Internal Server Error' });

        }

    })


router
    .route('/measurements/:id')
    .get((req, res) => {

        const measurementsId = req.params.id;

        try {

            const measurementsFile = fs.readFileSync(measurementsPath);
            const measurementsData = JSON.parse(measurementsFile);
            const selectedSet = measurementsData.find(set => set.id === measurementsId);
            if (selectedSet) {
                console.log("the selected set is: ", selectedSet);
                res.send(selectedSet);
            } else {
                console.log("Set not found");
                res.status(404).send({ error: 'Set not found' });
            }

        } catch (error) {

                console.log("JSON error: ", error);
                res.status(500).send({ error: 'Internal Server Error' });

        }

    })

module.exports = router;