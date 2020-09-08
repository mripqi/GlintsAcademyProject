function input (){
  let hasil1 = ''
  let operand1 = prompt('Nilai 1','');
  let operand2 = prompt('Nilai 2','');
  let operator = prompt('Operator','');
  
  let hasil = {
    operand1: parseInt(operand1), 
    operand2: parseInt(operand2), 
    operator: operator
  }
  hasil1 = calculate(hasil)
  alert("Hasil = " + hasil1)
  return hasil1
}

function calculate(arrNumber) {
    switch(arrNumber.operator){
      case '+': return arrNumber.operand1+arrNumber.operand2 
      case '-': return arrNumber.operand1-arrNumber.operand2 
      case '*': return arrNumber.operand1*arrNumber.operand2 
      case '/': return arrNumber.operand1/arrNumber.operand2 
      case '**': return arrNumber.operand1**arrNumber.operand2 
      case 'min': return Math.min(arrNumber.operand1,arrNumber.operand2) 
      case 'max': return Math.max(arrNumber.operand1,arrNumber.operand2) 
    }
}

