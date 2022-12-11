
const generatePasswordBtn = document.getElementById('generateBtn')
const passwordLength = document.getElementById('passwordLength')
const includeNumber = document.getElementById('includeNumber')
const rangeInput = document.getElementById('range-input')
const includeSymbols = document.getElementById('includeSymbols')
const includeUppercase = document.getElementById('includeUppercase')
passwordLength.addEventListener('input',syncRangeInput)
rangeInput.addEventListener('input',syncRangeInput)

function syncRangeInput(e){
    const value = e.target.value;
    passwordLength.value = value;
    rangeInput.value = value;
}

generatePasswordBtn.addEventListener('click',() => {
    const numberCount = passwordLength.value;
    const passNumbers = includeNumber.checked;
    const passUpperCase =  includeUppercase.checked;
    const passSymbols = includeSymbols.checked;

    const password = generatePasswordBtn(count,numbers,uppercase,symbols) 
})

function generatePassword(){

}

function getCharcodeArray(low,high){
    const array = []
    for(let i =  low; i <= high;i++){
        array.push(i)
    }
    return array;
}

document.querySelector('.fa-copy').addEventListener('click',() => {
    const demo = document.getElementById('demo')
    const copyText = document.getElementById('input').value;
    navigator.clipboard.writeText(copyText)
    demo.style.visibility = 'visible';

    setTimeout(() => {
        demo.style.visibility = 'hidden';
    }, 1000);
})


