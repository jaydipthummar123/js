function sum(a,b){
    return (a+b)
}
const result =sum(45 ,78 )
console.log(`result is ${result}`)


function  loginusername (username ){
    if(!username){
      console.log(" plz reenter your username ")
      return 
    }
  return (`${username} just looged in `)
}
 console.log(loginusername("jaydip"))




 function calclutecartprice( val1,val2,...num){
  return num 
 }
 console.log(calclutecartprice(100,300,400,500,600))


//  const user = {
//   username : "jaydip",
//   prices : 35000,
//   age: 21
//  }

 function username1 ( u){
  console.log(`username is ${u.username} and price sale is ${u.prices} and he age is ${u.age}`)
 }
//  username1(user);
username1({
  username: "hemdip",
  prices : 45000,
  age : 21
})



// const arry = [100,200,300, 400 ]
// arry.push(500)
function arrys  (mynewarry){
  return ` the mobile price is ${mynewarry[4]}`
}
console.log(arrys([100,200,300,400,1000]))



