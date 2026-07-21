const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/Stayease";
main()
.then(()=>{
    console.log("connected");
})
.catch((err) => {
console.log(err);
})
async function main(){
    await mongoose.connect(MONGO_URL);
}

app.get("/",(req,res) =>{
    res.send("Root file running");
});

app.get("/testListing", async (req,res) => {
    let sampleListing = new Listing ({
        title : "My new Villa",
        description : "By the Beach",
        price:1200,
        location:"Calangute, Goa",
        country : "India",
    });
    await sampleListing.save();
    console.log("Sample was saved");
    res.send("successful testing");
});

app.listen(8080,() => {
    console.log("Server is running on port 8080");
});