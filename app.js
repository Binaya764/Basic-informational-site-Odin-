const express = require("express");
const path = require("path");
const app = express();
const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/index", indexRouter);


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