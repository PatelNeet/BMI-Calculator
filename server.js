const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000, function(){
    console.log("Server has started on port 3000");
});

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/bmi",function(req,res){
    // console.log(req.body);
    var h = Number(req.body.num1);
    var w = Number(req.body.num2);
    var BMI = w/(h*h);
    res.send("<center><h1>The Body Mass Index is "+ BMI + " kg/m*m </h1></center>");
});

// app.get("/about",function(req,res){
//     res.send("<h1>Neet Patel</h1><p>This is preety hard to understand</p>");
// });
