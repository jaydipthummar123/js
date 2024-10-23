// let index = 0
// for(i = 1;i<=10;i++){
//     // const number = index * index;
//     console.log("number")
// }




// ++++++++++++++++++++++++++while+++++++++++++++++++++++
let myarrry =["thor", "hulk","iron man","spiderman"]
myarrry.push("batman")
// let i = 0;
// while (i<myarrry.length) {
//     console.log(` ${myarrry[i]}`)
//     i++
// }



for (const i of myarrry) {
    // console.log(i)
}




// 4+++++++++++++++++=map=++++++++++++++++==

const map = new Map


const myobject = {
    name : "jaydip",
    surname  : "thummar",
    age : 21,
    phonenumber : 4978565467
}
for (const key in myobject) {
    // console.log(`${key} : ${myobject[key]}`)
    
}


// let myarry =["thor", "hulk","iron man","spiderman","heromay"]
// for (const i in myarry) {
//    console.log(myarrry[i])
// }

let hero=["thor", "hulk","iron man","spiderman","monkeyman"]
hero.forEach((i)=>{
  console.log(i)
 })











 const mycoding = [
   {
    name : "jaydip ",
    surname : "thummar",
    age : 21
   },
   {
    name : "jaydip ",
    surname : "thummar",
    age : 22
   },
   {
    name : "jaydip ",
    surname : "thummar",
    age : 24
   }
 ]
 mycoding.forEach((i)=>{
  console.log(i.age,i.name,i.surname)
 })