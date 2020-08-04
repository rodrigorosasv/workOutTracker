const db = require("../models");

module.exports = function(app) {
//Get workouts
    app.get("/api/workouts", function(req, res) {
        db.Workout.find().then(function(dbWorkouts) {
            res.json(dbWorkouts);
        })
        .catch(function (err){
            res.json(err);
        })
    });
//Create Workout
    app.post("/api/workouts", function({body},res){
        db.Workout.create(body).then(function (dbWorkouts) {
            res.json(dbWorkouts);
        })
        .catch(function (err){
            res.json(err);
        })
    });
//Add exercise
    app.put("/api/workouts/:id", function({body,params},res) {
        let id = params.id;
        console.log("ID of the workout", id);
        db.Workout.updateOne({_id:id},{$push: {exercises: body}})
        .then(function (dbExercise) {
            res.json(dbExercise);
        })
        .catch(function (err){
            res.json(err);
        })
    });
//Get Workouts
    app.get("/api/workouts/range",(req,res) => {
        db.Workout.find().then(function (dbWorkouts){
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err);
        });
    });
};
