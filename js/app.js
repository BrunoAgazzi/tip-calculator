let total = 0;
let totalTip = 0;
let tip = 15;
let bill = 0;
let people = 1;



const inputBill = document.getElementById("bill");
const tip5 = document.getElementById("tip5");
const tip10 = document.getElementById("tip10");
const tip15 = document.getElementById("tip15");
const tip25 = document.getElementById("tip25");
const tip50 = document.getElementById("tip50");
const tipCustom = document.getElementById("tip-custom");
const inputPeople = document.getElementById("people");
const textTotal = document.getElementById("total");
const textTotalTip = document.getElementById("total-tip");
const buttonReset = document.getElementById("button-reset");


//New Bill

inputBill.addEventListener("change", (t) =>{
    let value = Number( t.target.value) ;
    let tipR = value * tip / 100;
    total =  value  ;
    textTotal.innerHTML =  '$' + ( (total + tipR )/ people).toFixed(2);
    textTotalTip.innerHTML = '$' +  (tipR / people).toFixed(2) ;
});

//New people number

inputPeople.addEventListener("change", (t) =>{
    p = Number( t.target.value) ;
    

    if (p > 0) {
        people = p;
        let tipR = total * tip / 100;
        textTotal.innerHTML = '$' +  ( (total + tipR) / people).toFixed(2);
        textTotalTip.innerHTML = '$' + (tipR / people).toFixed(2) ;
        return;
    }
    if (p = 0) {
        textTotal.innerHTML = "$0.00";
        textTotalTip.innerHTML = "$0.00";
        return;
    }
    inputPeople.value = 0 ;

});

//New Tip

tip5.addEventListener('click',() => {
    tipChange(5);
    let tipR = total * tip / 100;
    textTotal.innerHTML = '$' + ( (total + tipR )/ people).toFixed(2);
    textTotalTip.innerHTML = '$' + (tipR / people).toFixed(2) ;
})

tip10.addEventListener('click',() => {
    tipChange(10);
    let tipR = total * tip / 100;
    textTotal.innerHTML = '$' + ( (total + tipR )/ people).toFixed(2);
    textTotalTip.innerHTML = '$' +  (tipR / people).toFixed(2) ;
})

tip15.addEventListener('click',() => {
    tipChange(15);
    let tipR = total * tip / 100;
    textTotal.innerHTML = '$' + ( (total + tipR )/ people).toFixed(2);
    textTotalTip.innerHTML = '$' + (tipR / people).toFixed(2) ;
})

tip25.addEventListener('click',() => {
    tipChange(25);
    let tipR = total * tip / 100;
    textTotal.innerHTML = '$' +  ( (total + tipR )/ people).toFixed(2);
    textTotalTip.innerHTML = '$' + (tipR / people).toFixed(2) ;
})
tip50.addEventListener('click',() => {
    tipChange(50);
    let tipR = total * tip / 100;
    textTotal.innerHTML = '$' +  ( (total + tipR )/ people).toFixed(2);
    textTotalTip.innerHTML = '$' + (tipR / people).toFixed(2) ;
})

//Tip Custom
tipCustom.addEventListener('change', (t) => {
    tipChange('custom');
    let value = Number( t.target.value);
    tip = value;
    if (tip > 100 || tip < 0) {
        tip = 100;
        tipCustom.value = 100;
    }
    let tipR = total * tip / 100;
    if (people <= 0) {
        return;
    }
    textTotal.innerHTML = '$' + ( (total + tipR )/ people).toFixed(2);
    textTotalTip.innerHTML = '$' + (tipR / people).toFixed(2) ;
});

//Button Reset
buttonReset.addEventListener('click',()=>{
    total = 0;
    totalTip = 0;
    tip = 15;
    bill = 0;
    people = 1;
    inputBill.value= 0;
    inputPeople.value= 1;
    tipCustom.value= "";
    textTotal.innerHTML= "$0.00"
    textTotalTip.innerHTML= "$0.00"
});

//state style




const tipChange = valor =>{
    switch (valor) {
        case 5:
            tip = 5;
            tip5.style.background= "hsl(172, 67%, 45%)";
            tip5.style.color= "hsl(183, 100%, 15%)";
            tip10.style.background= "hsl(183, 100%, 15%)";
            tip10.style.color= "white";  
            tip15.style.background= "hsl(183, 100%, 15%)";
            tip15.style.color= "white";  
            tip25.style.background= "hsl(183, 100%, 15%)";
            tip25.style.color= "white";  
            tip50.style.background= "hsl(183, 100%, 15%)";
            tip50.style.color= "white";  
            tipCustom.value = "";
        break;

        case 10:
            tip = 10;
            tip10.style.background= "hsl(172, 67%, 45%)";
            tip10.style.color= "hsl(183, 100%, 15%)";
            tip5.style.background= "hsl(183, 100%, 15%)";
            tip5.style.color= "white";  
            tip15.style.background= "hsl(183, 100%, 15%)";
            tip15.style.color= "white";  
            tip25.style.background= "hsl(183, 100%, 15%)";
            tip25.style.color= "white";  
            tip50.style.background= "hsl(183, 100%, 15%)";
            tip50.style.color= "white";  
            tipCustom.value = "";
        break;

        case 15:
            tip = 15;
            tip15.style.background= "hsl(172, 67%, 45%)";
            tip15.style.color= "hsl(183, 100%, 15%)";
            tip5.style.background= "hsl(183, 100%, 15%)";
            tip5.style.color= "white";  
            tip10.style.background= "hsl(183, 100%, 15%)";
            tip10.style.color= "white";  
            tip25.style.background= "hsl(183, 100%, 15%)";
            tip25.style.color= "white";  
            tip50.style.background= "hsl(183, 100%, 15%)";
            tip50.style.color= "white";  
            tipCustom.value = "";
        break;

        case 25:
            tip = 25;
            tip25.style.background= "hsl(172, 67%, 45%)";
            tip25.style.color= "hsl(183, 100%, 15%)";
            tip5.style.background= "hsl(183, 100%, 15%)";
            tip5.style.color= "white";  
            tip10.style.background= "hsl(183, 100%, 15%)";
            tip10.style.color= "white";  
            tip15.style.background= "hsl(183, 100%, 15%)";
            tip15.style.color= "white";  
            tip50.style.background= "hsl(183, 100%, 15%)";
            tip50.style.color= "white";  
            tipCustom.value = "";
        break;

        case 50:
            tip = 50;
            tip50.style.background= "hsl(172, 67%, 45%)";
            tip50.style.color= "hsl(183, 100%, 15%)";
            tip5.style.background= "hsl(183, 100%, 15%)";
            tip5.style.color= "white";  
            tip10.style.background= "hsl(183, 100%, 15%)";
            tip10.style.color= "white";  
            tip15.style.background= "hsl(183, 100%, 15%)";
            tip15.style.color= "white";  
            tip25.style.background= "hsl(183, 100%, 15%)";
            tip25.style.color= "white";  
            tipCustom.value = "";
        break;
        case "custom":
            tip5.style.background= "hsl(183, 100%, 15%)";
            tip5.style.color= "white";  
            tip10.style.background= "hsl(183, 100%, 15%)";
            tip10.style.color= "white";  
            tip15.style.background= "hsl(183, 100%, 15%)";
            tip15.style.color= "white";  
            tip25.style.background= "hsl(183, 100%, 15%)";
            tip25.style.color= "white";  
            tip50.style.background= "hsl(183, 100%, 15%)";
            tip50.style.color= "white"; 
        break;
    
        default:
            break;
    }
}
tipChange(15);
