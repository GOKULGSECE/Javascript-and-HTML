/*console.log("VERA MAARI");
const k=[
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": '2',
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    }
  ]
  console.log(k[0].address);
  for(let  i=0;i<k.length;i++)
  {
    const h=k[i]
    console.log(getkcompany(h).name);
  }

  function getkcompany(k)
  {
    return k.company;
  }

  var p=5;
  function factoial(p)
  {
    if(p==0) 
    {
      return 1;
    }
    else{
      return (p*factoial(p-1));
    }
  }
  console.log(factoial(p)); 
//let y=0;
//const j=k.map(user=>y+=user.id)
console.log(j)

const o=k.map(user=>user.phone.startsWith("010"))
console.log(o);//return true or false

const g=k.filter(user=>user.phone.startsWith("010"));
console.log(g)//used as the conditional statements

const r=k.map(user=>
  {
    if(user=>user.phone.startsWith("010"))
    {
      return user;
    }
  }).filter(Boolean)//use this method to return any statements//also called as functional chaining
console.log(r)

//string methods
const u='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero neque, tenetur dicta alias repellat odit pariatur nisi animi eius cum maiores explicabo accusamus mollit ia sint magnam obcaecati delectus at ipsam!'
console.log(u.includes("Lorem"))
console.log(u.indexOf('m'))
console.log(u.slice(0,3).toLocaleLowerCase)

const splith=u.split(',')
console.log(splith)
let temp=''
temp=splith[0]
splith[0]=splith[2]
splith[2]=temp
const firstname="Gokul Guna"
const e=firstname.charAt(0).concat(firstname.split(" ")[1].charAt(0)) 
console.log(e)

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];

let obj={
  "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
}
 //normal method 
 obj.phone="12334"
 console.log(obj)
  
 //with destrcutive method
 console.log({...obj,phone:'234',address:'hellooo'})

 //used to fetch the key and respective value pair
 console.log(Object.keys(obj.company))
 console.log(Object.values(obj))

 //if we don't want to change the value means use freeze method to freeze the particular value(like final keyword)
 let objq=13
 Object.freeze(objq)
 objq=33
 console.log(objq)
 const i=[1,2,6,3,55,7]
 console.log(i.sort((a,b)=>a-b))//ascending sort.
 console.log(i.sort((a,b)=>b-a))//desecending sort.

 let init = 0;
 console.log(i.reduce((a,b)=>a+b,init)) //used to sum up the arrays.

 const marks = {
  maths:90,
  english:99,
  tamil:93
 }
 let sum=0;
 console.log(Object.values(marks).reduce((a,b)=>a+b,sum))
 

 /*const [t1,t2,t3]=document.getElementsByTagName('td')
 console.log(t1.innerText.toLocaleLowerCase())
 t1.style.fontSize='20px'
 t1.style.color="brown"

t1.onmouseover = () =>
{
  t1.style.color="blue"

}
t1.onmouseleave = () =>
{
  t1.style.color="brown"
}

const tablerows=[...document.getElementsByTagName('tr')]
const tf = tablerows.map(row=>
  {
    return row.getElementsByTagName('td')
  })
console.log(tf)

//const tditems = [...tf]
const sub=tditems.map(items=>
console.log(items))
*/
const table=document.getElementsByTagName("tr");
var subject=[]
var mark=[]
var objr={}
for(let i=1;i<table.length;i++)
{
  subject.push(table[i].cells[0].innerText)
  mark.push(table[i].cells[1].innerText)
}
for(let i=0;i<subject.length;i++)
{
  objr[subject[i]] = mark[i];
}
console.log(objr)

const button=document.getElementById("tool")
console.log(button)
button.onclick=()=>
{
  const total=mark.reduce((a,b)=>a+parseInt(b),0)
  var ans = document.getElementsByTagName("td")[7];
  setTimeout(()=>
  {
    ans.innerText = total; 
  },5000)
}

let count = 0;
let intervalId;
let hour1=0;
let minute2=0;

const buttonElement = document.getElementById('hi');
const hour = document.getElementById('qwe');
const minute = document.getElementById('wer');
const second = document.getElementById('ert');
const k=document.getElementById('sss')
let isButtonClicked = true;

buttonElement.onclick=() => {
  if (isButtonClicked) {
    intervalId = setInterval(() => {
      hour.textContent=hour1
      minute.textContent=':'+minute2
      count++; 
      second.textContent = ':'+count
      if(count==60) 
      {
        minute.textContent = minute2+=1
        count=0
      }
      if(minute2==60) 
      {
        hour.textContent = hour1+=1
        minute2=0
      }
    }, 1000); 

    isButtonClicked = false;

    return intervalId;
  }
};

const button2 = document.getElementById('hello');
button2.onclick=() => {
  
  clearInterval(intervalId);


  isButtonClicked = true;
};

const button3 = document.getElementById('just');
button3.onclick =() => {
  /*count =0;
  hour1=0
  minute2=0
  hour.textContent=hour1
  minute.textContent=':'+minute2
  second.textContent = ':'+count
  clearInterval(intervalId)*/
  const lapTime = `Minute: ${minute2} | Seconds: ${count}`;
  const lapDiv = document.createElement('div');
  lapDiv.innerHTML = `<p>${lapTime}</p>`
 document.body.append(lapDiv)

};
const obh={
  name:"gokul",
  phone:null,
  email:"gokuljrjnfkj@gmail.com"}
const o = obh.name;
console.log(o)
Object.values("obh").phone
const {phone,mobile="12345678"} = obh;//assigning default values using destructing 
console.log(mobile)
// Object destructing



 let num;
 new Promise((resolve)=>
 {
  setTimeout(()=>
 {
  num = 10
  resolve()
 },1000)
 }).then()
 
 console.log(num)





































 //github.com/santhosh-chinnasamy/mern