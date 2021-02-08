const mongoose = require("mongoose");

const Schema = mongoose.Schema;

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
}, {
    toJSON: {
        virtuals: true,
    },
});

workoutSchema.virtual("totalDuration").get(function() {
    const duration = this.excercises.reduce((sum, excercise) => {
        return sum + excercise.duration;
    }, 0);
    return duration;
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;