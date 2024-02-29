const http = require("node:http")//default server is  http
const filw = require("fs").promises
const express=require("express")
console.log(express);
// const hostname = '127.0.0.1'
// const port = 3000
// const gethtml=async()=>
// {
//     //let indexcontent
//     await filw.readFile("./index.html",undefined,(err,data)=>
//     {
//         const indexcontent = await filw.promises.readFile("index.html") 
//         return indexcontent.toString()
//     })
    
// }
// const server = http.createServer(async(req,res)=>
// {
//    res.statusCode = 200;
//    res.setHeader('Content-Type','text/html');
//    const interhtml = await gethtml()//type of html,plain,xml or any type of file type
//    res.end(interhtml)
// });
// server.listen(port,hostname,() =>
// {
//    console.log(`Server running ar http://${hostname}:${port}/`);
// })
////const numbers=[1,2,3,4,5]
////undefined
////> numbers.reduce((a,b)=>a+=b,0)
////15  
// const numbers=[1,2,3,4,5]
// console.log(numbers.reduce((a,b)=>a+=b,0))
// const path = require('path')
// console.log(path.dirname('E:/Mern Stack/inner.js'))
// console.log(path.basename('E:/Mern Stack/inner.js'))
// const file = require('fs')
// const { readFile } = require("node:fs")
// file.readFile("E:/Mern Stack/inner.js",undefined,(err,data)=>
// {
//     console.log(data.toString())//to convert from buffer to string datatypes. 
// })
// //console.log(file.readFile('E:/Mern Stack/inner.js'))
// //const h=Buffer.from(data)
// //console.log(h)
// const file = require('fs')
// file.readFile("E:/Mern Stack/objects.json",undefined,(err,data)=>
// {
//     if(err)
//     {
//         console.log("error")
//     }
//     else{
//         const number = JSON.parse(data.toString());//coverting string to first and then we are converting it to an array
//         console.log(number.reduce((a,b)=>a+=b,0))
//         //console.log(data)
//     } 
// })
//netstat -ano|findstr /R /C:"3000"//to check the port number's number which is used to kill the porrt trasaction to fetch another value.
//netstat -ano|findstr /R /C:"3000"
// TCP    127.0.0.1:3000         0.0.0.0:0              LISTENING       14016
// PS E:\Mern Stack> taskkill /PID 14016 /F  