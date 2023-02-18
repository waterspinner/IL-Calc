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

// update displayValue