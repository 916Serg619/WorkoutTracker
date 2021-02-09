const mongoose = require("mongoose");

const Schema = mongoose.Schema;
//Create Schema//
const workoutSchema = new Schema({
    day: { type: Date, default: () => new Date() },
    excercises: [{
        type: {
            type: String,
        },
        name: {
            type: String,
        },
        duration: {
            type: Number,
        },
        weight: Number,
        reps: Number,
        sets: Number,
        distance: Number,
    }, ],
});


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;