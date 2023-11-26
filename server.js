const express = require('express');

const app = express();
const path = require('path');
const router = express.Router();



app.listen(2000, () => {
    console.log(`Example app listening on port ${2000}`)
})

//
// router.get('/', function (req, res, next) {
//     res.sendFile(path.join(__dirname, '/index.html'));
//     //next()
//     res.end();
// })
// app.use(router);

app.route("/")
    .get((req,res)=>{
        res.sendFile(path.join(__dirname, '/index.html'));   
    })

app.route("/AskForAvailabiliy")
    .get((req,res)=>{
        res.sendFile(path.join(__dirname, '/AskForAvailability.html'));   
    })

app.route("/CarInsurance")
    .get((req,res)=>{
        res.sendFile(path.join(__dirname, '/CarInsurance.html'));   
    }) 
    
app.route("/contactPage")
    .get((req,res)=>{
        res.sendFile(path.join(__dirname, '/contactPage.html'));   
    })

app.route("/drivingTest")
    .get((req,res)=>{
        res.sendFile(path.join(__dirname, '/drivingTest.html'));   
    })    

app.route("/requestCar")
    .get((req,res)=>{
        res.sendFile(path.join(__dirname, '/requestCar.html'));   
    })

app.route("/requestMaintenance")
    .get((req,res)=>{
        res.sendFile(path.join(__dirname, '/requestMaintenance.html'));   
    })
    


// app.get("/", (req,res)=>{
//     //res.send("home")
//     res.sendFile(path.join(__dirname, '/index.html'));
// })

// app.get("/AskForAvailabiliy", (req,res)=>{
//     res.sendFile(path.join(__dirname, '/AskForAvailabiliy.html'));
// })

// app.get("/CarInsurance", (req,res)=>{
//     res.sendFile(path.join(__dirname, '/CarInsurance.html'));
// })

// app.get("/contactPage", (req,res)=>{
//     res.sendFile(path.join(__dirname, '/contactPage.html'));
// })

// app.get("/drivingTest", (req,res)=>{
//     res.sendFile(path.join(__dirname, '/drivingTest.html'));
// })

// app.get("/requestCar", (req,res)=>{
//     res.sendFile(path.join(__dirname, '/requestCar.html'));
// })

// app.get("/requestMaintenance", (req,res)=>{
//     res.sendFile(path.join(__dirname, '/requestMaintenance.html'));
// })



