const router = require('express').Router();
const { db } = require('../config/config.js');

// API routes

router.get("/api/workouts", (req, res) => {
    console.log(db);
    db.Workout.find({},
        (err, dbWorkout) => {
            res.json(dbWorkout);
        }
        );
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
    db.Workout.findByIdAndUpdate(
        params.id,
        { $push: { exercises: body } },
        { new: true }
    ).then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });
});

router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/api/workouts/range", function (req, res) {
    db.Workout.find({}).limit(5)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

module.exports = router;

