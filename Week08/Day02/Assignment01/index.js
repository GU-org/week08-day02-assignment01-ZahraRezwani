function bmiCalc(w,h){
    bmi=w/(h*h);
    return bmi;
}
let weight =prompt("please enter your weight in kg.");
let height= prompt("please enter your height in m.");
let result= bmiCalc(weight,height);
if(result<18.5){
    alert("you are skinny.");
}
if(result>18.5 && result<=24.9){
    alert("you are normal.");
}
if(result>24.9 && result<=29.9){
    alert("you have overweight.");
}
if(result>29.9){
    alert("you are fat.");
}
bmiCalcm()