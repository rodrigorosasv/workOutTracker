const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [{    
        type: {
            type: String,
            trim: true,
            required: "Enter a type"
        },
        name: {
            type: String,
            trim: true,
            required: "Enter a name"
        },
        duration: {
            type: String,
            trim: true,
            required: false
        },
        weight: {
            type: Number,
            required: false
        },
        reps: {
            type: Number,
            required: false
        },
        sets: {
            type: Number,
            required: false
        },
        distance: {
            type: Number,
            required: false
        }
    }
  ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;