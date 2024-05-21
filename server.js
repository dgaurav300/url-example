const http=require("http")
const url=require("url")
const fs=require("fs")
const express=require("express");


http.createServer((req,res)=>{

    let q=url.parse(req.url);

    let filname="."+q.pathname;
    fs.readFile(filname,(err,data)=>{
      if(err){
        res.writeHead(404,{"content-type":"text/html"})
        return res.end("<h2>404 Page Not Found</h2>")

      }
      res.writeHead(200,{"content-type":"text/html"})
      res.write(`<h1>${data}</h1>`)
      return res.end();
    })

    
    
}).listen(4000,()=>{
    console.log("Server started on 4000");
})