const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req,res) => {
    let filePath = '';
    if(req.url === '/'){
        filePath = 'index.html';

    }else if (req.url === '/about'){
        filePath = 'about.html';

    }else if(req.url === '/contact-me'){
        filePath = 'contact-me.html';
    }else if(req.url === '/index.js'){
        filePath = 'index.js';


    }
    else if(req.url === '/style.css'){
        filePath = 'style.css';
    }
    else{
        filePath = '404.html';
    }

fs.readFile(path.join(__dirname,filePath),(err,content)=>{
    if(err){
        res.writeHead(500);
        res.end('Error loading page');
    }
    else{
        const statusCode = filePath === '404.html' ?404 : 200;
        res.writeHead(statusCode,{
            'Content-Typs': 'text/html'
        });
        res.end(content, 'utf-8');
    }
});
});

const PORT = 8080;
server.listen(PORT,()=>{
    console.log('Server running at http://localhost:8080/');

});