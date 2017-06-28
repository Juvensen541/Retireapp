var age, yearsUntilRetirement, calculating;
calculating = true;

///retrieve data from year input

document.getElementById("calculate").addEventListener("click", function(){
    age = document.getElementById('text-field0').value;
    if(age < 65){
    yearsUntilRetirement = 65 - age;
    console.log(age);
    console.log(yearsUntilRetirement);
    document.getElementById('text-field1').value= "retiring in "+ yearsUntilRetirement + ' years!';
  }
  else {
        document.getElementById('text-field1').value= "you already Retired"

  }


})

document.getElementById("recalculate").addEventListener("click", function(){
  document.getElementById('text-field0').value = "0";
  document.getElementById('text-field1').value= "0"; 


  
})

///creat an event listener for the calculate age function.

//function calculates age and returns the amount of years until retirement if they are under the age of 65


/// display data on second line.

//create event listen for recalculate age

//event clears all the data on screen.






