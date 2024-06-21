let gender=String("a");
console.log(typeof gender);
if(gender==="male"){
    console.log("He is a male");
}else if(gender==="female"){
    console.log("She is a female");

}else{
    console.log("they are other");
}
let age=23;

if(age>0 && age<=18 ){
    console.log("underage");
}else if(age>18 && age<=60){
    
    console.log("adult");
}
    else if(age>60 && age<=100){
    console.log("senior citizen");
    }else{
        console.log("invalid age");
    }