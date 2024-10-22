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