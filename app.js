const express = require("express");
const path = require("path");
const app = express();
const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");

app.use(express.static('public'));

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/index", indexRouter);




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
app.listen(PORT, ()=>{
    
    console.log(`The port is running at ${PORT}`)
});

app.use((err,req,res,next)=>{
    console.error(err);
    res.status(err.statusCode || 500).send(err.message);
});