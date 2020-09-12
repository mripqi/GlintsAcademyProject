// Normal JS
// var input = ()=>{
//   let hasil1 = ''
//   let operand1 = prompt('Nilai 1','');
//   let operand2 = prompt('Nilai 2','');
//   let operator = prompt('Operator','');
  
//   let hasil = {
//     operand1: parseInt(operand1), 
//     operand2: parseInt(operand2), 
//     operator: operator
//   }
//   hasil1 = calculate(hasil)
//   alert("Hasil = " + hasil1)
//   return hasil1
// }

// var calculate = (arrNumber) =>{
//   switch(arrNumber.operator){
//     case '+': return arrnumber.operand1+arrnumber.operand2 
//   case '-': return arrnumber.operand1-arrnumber.operand2 
//   case '*': return arrnumber.operand1*arrnumber.operand2 
//   case '/': return arrnumber.operand1/arrnumber.operand2 
//   case '**': return arrnumber.operand1**arrnumber.operand2 
//   case 'min': return Math.min(arrnumber.operand1,arrnumber.operand2) 
//   case 'max': return Math.max(arrnumber.operand1,arrnumber.operand2) 
//   }
// }

// =====================================================================
// Class
// class kalkulator{
//   constructor(operand1,operand2,operator){
//       this.operand1 = operand1
//       this.operand2 = operand2
//       this.operator = operator
//   }

//   get hasil(){
//     return this.calculatearea()
//   }

//   calculatearea() {
//     switch(arrNumber.operator){
//       case '+': return arrNumber.operand1+arrNumber.operand2 
//       case '-': return arrNumber.operand1-arrNumber.operand2 
//       case '*': return arrNumber.operand1*arrNumber.operand2 
//       case '/': return arrNumber.operand1/arrNumber.operand2 
//       case '**': return arrNumber.operand1**arrNumber.operand2 
//       case 'min': return Math.min(arrNumber.operand1,arrNumber.operand2) 
//       case 'max': return Math.max(arrNumber.operand1,arrNumber.operand2) 
//     }
//   }
// }

// ======================================================================

// ES6
var input = ()=>{
  let operand1 = prompt('Nilai 1','');
  let operand2 = prompt('Nilai 2','');
  let operator = prompt('Operator','');
  
  const hasil = {
    operand1, 
    operand2, 
    operator
  }

  hasil1 = calculate(+operand1,+operand2,operator)
  alert("Hasil = " + hasil1)
  return hasil1
}

var calculate = (a,b,op) =>{
  switch(op){
  case '+': return a+b 
  case '-': return a-b 
  case '*': return a*b 
  case '/': return a/b 
  case '**': return a**b 
  case 'min': return Math.min(a,b) 
  case 'max': return Math.max(a,b) 
  }
}



