let cityName = prompt("Enter Your City Name")

if (cityName == "Karachi" ){ 
    alert( "WELCOME TO THE CITY OF LIGHTS" )
}
else {
alert("WELCOME TO "  + cityName  )
}


let gender = prompt("Enter your gender")
 if(gender === "male"){
    alert("GOOD MORNING SIR")

 }
 else if (gender === "female") {
    alert("GOOD MORNING MAA'M")

 }
 else{
    alert("GOOD MORNING")
 }
 
 let color = prompt("Enter the color of the traffic signal (red, yellow, or green):");

 switch (color) {
   case "red":
     alert("MUST STOP! ");
     break;
   case "yellow":
     alert("READY TO MOVE");
     break;
   case "green":
     alert(" MOVE NOW !");
     break;
 }
 let remainingfuel = prompt("Enter Remaining Fuel in your car ")
 if(remainingfuel < 0.25){
    alert("Please refill fuel in your car")
 }
 else{
    alert("Your car has enough fuel")
 }

 let subject1Marks = prompt("Enter your marks in 1 subject" )
 let subject2Marks = prompt("Enter your marks in 2 subject" )
 let subject3Marks = prompt("Enter your marks in 3 subject" )
 let totalMarks = 300
if(percentage >= 80){
    console.log("Grade : A-one");
    console.log("Remarks : Excellent");
}
if(percentage <= 79 && percentage >= 70){
    console.log("Grade : A");
    console.log("Remarks : Good");
}
if(percentage <= 69 && percentage >= 60){
    console.log("Grade : B");
    console.log("Remarks : You need to improve");
}
if(percentage < 59){
    console.log("Grade : Fail");
    console.log("Remarks : Sorry");
}
   



 
 