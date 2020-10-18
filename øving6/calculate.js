//create variables for the values of income and wealth
//which can be accessed by both eventlisteners
var income = document.getElementById("income").value;
var wealth = document.getElementById("wealth").value;

//variabel for the tax element
var tax = document.getElementById("tax");

//calculating the tax with income and wealth as input
function calculate(income,wealth){
    var tax = ((.35 * income) + (.25 * wealth))
    return tax
}

//change value of income on input and update the value of the tax field with calculate
document.getElementById("income").addEventListener("input",function(){
    income = this.value;
    tax.value = calculate(income,wealth);
    
})

//change value of wealth on input and update the value of the tax field with calculate
document.getElementById("wealth").addEventListener("input", function(){
    wealth = this.value;
    tax.value = calculate(income,wealth);
})


if(1 + 2 === 3){
    console.log("True")
}else{
    console.log("False")
}


