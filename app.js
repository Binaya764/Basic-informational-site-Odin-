const express = require("express");
const path = require("path");
const app = express();
app.use(express.static('public'));
app.get("/",(req,res)=>
{
    res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/about", (req,res)=>{
    res.sendFile(path.join(__dirname, "about.html"));
});

app.get("/contact-me",(req,res)=>{
    res.sendFile(path.join(__dirname, "contact-me.html"));
});

const PORT = 3000;
app.listen(PORT, (error)=>{
    if(error){
        throw error;
    }
    console.log(`The port is running at ${PORT}`)
});