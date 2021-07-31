const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render('landing');
});

app.get("/places", (req, res) =>{
    var places = [
        { name: "Ajmer", image:"https://www.photosforclass.com/download/pb_3341872"},
        { name: "Goa", image:"https://www.photosforclass.com/download/pb_1121506"},
        { name: "Manali", image:"https://www.photosforclass.com/download/pb_5104279"},
        { name: "Dharamshala", image:"https://www.photosforclass.com/download/pb_5181197"},
    ];
    res.render("places", {places : places});
});

app.listen(3000, () => {
    console.log("Server is Up !!!")
});