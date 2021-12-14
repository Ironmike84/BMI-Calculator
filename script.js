

// Variables 
let usersName = document.getElementById("usersName").value;
let age = parseInt(document.getElementById("age").value);
let weight = parseInt(document.getElementById("weight").value);
let userHeight = parseInt(document.getElementById("userHeight").value);

// Array
let myList = [{
    name: (usersName),
    age: (age),
    height:(userHeight),
    weight: (weight),
}];



//Add Name to Object:
 
let addName = document.getElementById('addName');

addName.addEventListener("click", function(){
  let usersName = document.getElementById("usersName").value;
    myList.push({name:usersName})
    document.getElementById("object").append(` Name: ${myList[1].name} `);
    myList.keys(usersName)
})


// Add Age to Object:
let addAge = document.getElementById('addAge');

addAge.addEventListener("click", function(){
    let age = document.getElementById('age').value;
    myList.push({age:age})
    document.getElementById("storeAge").innerText = (` Age: ${myList[2].age} `);
})

// Add Height to Object:
let addHeight = document.getElementById("addHeight");

addHeight.addEventListener("click", function(){
    let height = document.getElementById("userHeight").value;
    myList.push({height:height})
    document.getElementById("storeHeight").innerText = (` Height: ${myList[3].height} inches`);
})



//Add Weight to Object:
let addWeight = document.getElementById('addWeight');

addWeight.addEventListener("click", function(){
    let weight = document.getElementById('weight').value;
    myList.push({weight:weight})
    document.getElementById("storeWeight").innerText = (` Weight: ${myList[4].weight} .lbs`);
})



// BMI
//--------------------------------------------------------------------------------------------------

//Variables
let bmiButton = document.getElementById("bmiButton");

bmiButton.addEventListener("click", function(){
    let weight = document.getElementById("weight").value;
    let userHeight = document.getElementById("userHeight").value;

//Calculation for BMI
    let Bmi = Math.fround((weight * 703) / (userHeight * userHeight));
   
    console.log(Bmi);


// If Conditional - Weight checks to see if you are over or underweight.

document.getElementById("bmi").append(Bmi);
})



// BODY Fat

let bodyFat = document.getElementById("bodyFat");


bodyFat.addEventListener("click", function(){
    let bdyFat = document.getElementById("bdyFat").value;
    let userAge = document.getElementById("age").value;
    let weight = parseInt(document.getElementById("weight").value);
    let userHeight = parseInt(document.getElementById("userHeight").value);
    let sex = document.getElementById("sex").value;

    let bmi = Math.fround((weight * 703) / (userHeight * userHeight));
    
    if (sex === "female"){
    
    let bdyFat1 = (1.20 * (bmi))
    let bdyFat2 = (0.23 * (userAge))
    let bdyFatTotal = Math.floor(bdyFat1 + bdyFat2 - 5.4);

    document.getElementById("bdyFat").append(`${bdyFatTotal}% Body Fat`);
    
       console.log(`${bdyFatTotal}% Body Fat`);
    }else if (sex === "male"){
        let bdyFat1 = (1.20 * (bmi))
        let bdyFat2 = (0.23 * (userAge))
        let bdyFatTotal2 = Math.floor(bdyFat1 + bdyFat2 - 16.2);

        document.getElementById("bdyFat").append(`You are: ${bdyFatTotal2}% Body Fat`);
    
    }else {
        console.log("Program Failed...")
    }


})




//  Print Summary Section


printSum.addEventListener("click", function(){
    
let printSum = document.getElementById("printSum");


printSum.addEventListener("click", function(){
    let userAge = document.getElementById("age").value;
    let weight = parseInt(document.getElementById("weight").value);
    let userHeight = parseInt(document.getElementById("userHeight").value);
    let sex = document.getElementById("sex").value;

    let bmi = Math.fround((weight * 703) / (userHeight * userHeight));
    
    if (sex === "female"){
        let printSum = document.getElementById("printSum");
    let bdyFat1 = (1.20 * (bmi))
    let bdyFat2 = (0.23 * (userAge))
    let bdyFatTotal = Math.floor(bdyFat1 + bdyFat2 - 5.4);
    bmiMessage()
    document.getElementById("summary").append(`${bdyFatTotal}% Body Fat`);
    
       console.log(`${bdyFatTotal}% Body Fat`);
    }else if (sex === "male"){
        let summary = document.getElementById("summary");
        let bdyFat1 = (1.20 * (bmi))
        let bdyFat2 = (0.23 * (userAge))
        let bdyFatTotal3 = Math.floor(bdyFat1 + bdyFat2 - 16.2);
    console.log(`${bdyFatTotal3}% Body Fat`)
    bmiMessage()
       summary.append(`   - You are:${bdyFatTotal3}% Body Fat`);
    }else {
        console.log("Program Failed...")
    }
    function bmiMessage(){
        if (bmi < 18.5){
            document.getElementById("summary").append(`At ${weight} .lbs, Your BMI is ${bmi}, and you are underweight! `);
            console.log("You are underWeight!");
        }else if (bmi > 18.5 && bmi < 24.9){
            document.getElementById("summary").append(`At ${weight} .lbs, Your BMI is ${bmi}, and you are at a normal weight!!`);
            console.log(" You are Normal Weight");
        }else if (bmi > 24.9 && bmi < 30){
            document.getElementById("summary").append(`At ${weight} .lbs, Your BMI is ${bmi}, and you are overweight!!`);
            console.log("You are OverWeight!!")
        }else if (bmi > 31){
            document.getElementById("summary").append(`At ${weight} .lbs, Your BMI is ${bmi}, and you are obese!!`);
            console.log("You are Obese!!")
        
        }else {
            console.log("Didn't Work!")
            }
        } 
})
})



// Picture Sizing


let bmiIndex = document.getElementById('bmiIndex');

bmiIndex.addEventListener("click", function(){
bmiIndex.id = 'bmiIndexEnlarged'
})

bmiIndex.addEventListener("dblclick", function(){
    bmiIndex.id = 'bmiIndex'
    })


//  Object.keys(myList).forEach(function(property){
//      console.log(myList[property]);
//  });
 