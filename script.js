function calculate(){
    var height=parseFloat(document.querySelector('input[placeholder="Height (in cm)"]').value);
    var weight=parseFloat(document.querySelector('input[placeholder="Weight (in kg)"]').value);

    var heightInMeters=height/100;
    var BMI=weight/(heightInMeters*heightInMeters);
    document.getElementById('output').innerText = "Your BMI is: "+BMI.toFixed(2);   //Limited to 2 decimal

}