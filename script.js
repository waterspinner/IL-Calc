//constants
const ilSubmitBtn = document.querySelector(".token-input");

//IL Object
const ilCalc = {
    displayValue: '0.00%',
    aTokenChange: 0,
    aTokenWeight: .5,
    bTokenChange: 0,
    bTokenWeight: .5,
}
console.log(ilCalc);
//change element values on input change
const tokenInputs = document.querySelectorAll('.token');
  tokenInputs.forEach((tokenInput) => {  
    tokenInput.addEventListener('input', (event) => {
        // access the clicked element
        const property = event.target.dataset.property;
        let value = event.target.value;
            value = Number(value);
        ilCalc[property] = value;
        console.log(ilCalc);
    });
});

//on form submit, execute IL formula
function calculateIl(event){
    event.preventDefault();
    console.log(ilCalc.aTokenChange + 1);
    //find value of pool
    //take each asset price change to the power of pool weight %
   let valueOfPool = ((ilCalc.aTokenChange + 1)**(ilCalc.aTokenWeight)) * ((ilCalc.bTokenChange + 1)**(ilCalc.bTokenWeight));
   //value if held is token change * token weight
   let valueIfHeld = ((ilCalc.aTokenChange + 1) * ilCalc.aTokenWeight) + ((ilCalc.bTokenChange + 1) * ilCalc.bTokenWeight);

   console.log(valueOfPool);
   console.log(valueIfHeld);
   ilCalc.displayValue = ((valueOfPool / valueIfHeld) - 1) * -100
   document.querySelector('.calculated-loss').textContent = `${parseFloat(ilCalc.displayValue).toFixed(2)}%`
 }

ilSubmitBtn.addEventListener('submit', calculateIl);
// update displayValue

