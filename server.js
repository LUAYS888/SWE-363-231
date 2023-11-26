const express = require('express');

const app = express();
const path = require('path');



app.listen(2000, () => {
    console.log(`Example app listening on port ${2000}`)
})

//

app.get("/", (req,res)=>{
    //res.send("home")
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.get("/AskForAvailabiliy", (req,res)=>{
    res.sendFile(path.join(__dirname, '/AskForAvailabiliy.html'));
})

app.get("/CarInsurance", (req,res)=>{
    res.sendFile(path.join(__dirname, '/CarInsurance.html'));
})

app.get("/contactPage", (req,res)=>{
    res.sendFile(path.join(__dirname, '/contactPage.html'));
})

app.get("/drivingTest", (req,res)=>{
    res.sendFile(path.join(__dirname, '/drivingTest.html'));
})

app.get("/requestCar", (req,res)=>{
    res.sendFile(path.join(__dirname, '/requestCar.html'));
})

app.get("/requestMaintenance", (req,res)=>{
    res.sendFile(path.join(__dirname, '/requestMaintenance.html'));
})



