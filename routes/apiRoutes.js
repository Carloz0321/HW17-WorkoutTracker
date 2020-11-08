const app = require("express").Router();
const Workout = require("../models/workout");

app.post("/api/workouts", ({ body }, res) =>{
    console.log("Creating a new workout")
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    });
});

app.get("/api/workouts", (req, res) => {
    console.log("Reading workout")
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

app.put("/api/workouts/:id", (req, res) => {
    console.log("Adding en exercise")
    Workout.findByIdAndUpdate(
        req.params.id,
        {$push: {exercises: req.body}},
        {new: true}
    )
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

app.get("/api/workouts/range", (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

module.exports = app;