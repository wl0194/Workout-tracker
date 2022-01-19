const mongoose = require('mongoose');

const WorkoutSchema = new mongoose.Schema({
    day: {
        type: Date,
        default: () => new Date(),
    },
    exercises: [
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
    ],
},
{
    // include any virtual properties when data is requested
    toJson: {
        virtuals: true
    }
}
);


const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;

