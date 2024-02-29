const http = require("node:http")//default server is  http
const hostname = '127.0.0.1'
const port = 3000
const server = http.createServer((req,res)=>
{
   res.statusCode = 200;
   res.setHeader('Content-Type','text/html');//type of html,plain,xml or any type of file type
   res.end(`<!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title style="font-family: Verdana, Geneva, Tahoma, sans-serif;">Mern stack bootcamp</title>

   </head>
   <style>
       #tool
       {
           background-color: aqua;
           font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
           text-align: center;
       }
       table,th,td,tr{
           border: solid;
           border-color: black;
           
       }
       div{
           display:flex;
           align-items: center;
           justify-content: center;
           font-size: 30px;
       }
       button{
           margin: 5px;
       }
   </style>
   <body style="background-color:wheat;">
       <h1 style="text-align: center;">Marks</h1>
       <table>
           <th>subject</th>
           <th>marks</th>
           <tr>
               <td>English</td>
               <td>100</td>
           </tr>
           <tr>
               <td>Tamil</td>
               <td>99</td>
           </tr>
           <tr>
               <td>Maths</td>
               <td>97</td>
           </tr>
           <tr>
               <td>total</td>
               <td>0</td>
           </tr>
       </table>
       <button id="tool">calculate total</button>
       <br>
       <h1>stopwatch</h1>
       <div>
           <p id="qwe">0</p>
           <p id="wer">:0</p>
           <p id="ert">:0</p>
       </div>
       <div style="margin: 50px;">
           <button id="hi">start</button>
           <button id="hello">stop</button>
           <button id="just">reset</button>
       </div>
       <p id="sss"></p>
       
       <script src="index.js">
           
       </script>
   </body>
   </html>`)
});
server.listen(port,hostname,() =>
{
   console.log(`Server running ar http://${hostname}:${port}/`);
})
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