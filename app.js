const express= require("express");
const app= express();
const path= require("path")
const fs = require("fs");
const port= 3000
const bodyParser= require("body-parser");



//using Template engine EJS
// app.set('view engine', 'ejs');

app.set('view engine', 'pug')

//setting the view directory
app.set('views',path.join(__dirname,"views"))

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))

app.get("/", function(req, res){
  const param="Hi"
  const con="My first code"
  res.status(200).render("index", {title:param, content:con})
})
app.post("/", function(req, res){
  name=req.body.name
  age= req.body.age
  gender= req.body.gender
  address= req.body.address
  more= req.body.more

  let outputTxt=`Your name ${name} and your age is ${age}, your gender is ${gender}, confirm your address ${address}and thank you for your comments${more}`
  let param= "thank your for submitting the data"
  fs.writeFileSync("output.txt", outputTxt)
  res.status(200).render("index", {param})
})
app.get('/demo', function (req, res) {
  res.render('demo', { title: 'Hey', message: 'Hello there!' })
})

app.get("/about", (req, res)=>{
  res.send("This is about page of my first express app with Harry");
});

app.post("/about", (req, res)=>{
  res.send("This is a post request about page of my first express app with Harry");
});
app.get("/this", (req, res)=>{
  res.status(404).send("This page is not found on my website cwh");
});

app.listen(port, function() {
    console.log("Server started on port 3000" );
  });
  