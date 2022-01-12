const mongoose = require('mongoose');

const schema = new mongoose.Schema({ 
    day:{
        type: Date,
        default: () => new Date(),
    },
    exercises:[
        {
            type: {
                type: String,
            },
            name: {
                type: String,
            },
            duration: {
                type: Number,
            },
            weight: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            distance: {
                type: Number,
            }
        }
    ]
})

const Workout = mongoose.model('workout',schema);

module.exports = Workout;

