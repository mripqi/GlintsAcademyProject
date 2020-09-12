function input (){
//   let hasil1 = ''
  let operand1 = prompt('Nilai 1','');
  let operand2 = prompt('Nilai 2','');
  let operator = prompt('Operator','');
  
//   let hasil = {
//     operand1: parseInt(operand1), 
//     operand2: parseInt(operand2), 
//     operator: operator
//   }
//   hasil1 = calculate(hasil)
   
    const hasil = new kalkulator(operand1,operand2,operator)

  alert("Hasil = " + hasil)
  return hasil
}

// function calculate(arrNumber) {
//     switch(arrNumber.operator){
//       case '+': return arrNumber.operand1+arrNumber.operand2 
//       case '-': return arrNumber.operand1-arrNumber.operand2 
//       case '*': return arrNumber.operand1*arrNumber.operand2 
//       case '/': return arrNumber.operand1/arrNumber.operand2 
//       case '**': return arrNumber.operand1**arrNumber.operand2 
//       case 'min': return Math.min(arrNumber.operand1,arrNumber.operand2) 
//       case 'max': return Math.max(arrNumber.operand1,arrNumber.operand2) 
//     }
// }

class kalkulator{
  constructor(operand1,operand2,operator){
      this.operand1 = operand1
      this.operand2 = operand2
      this.operator = operator
  }

  get hasil(){
    return this.calculatearea()
  }

  calculatearea() {
    switch(this.operator){
      case '+': return this.operand1+this.operand2 
      case '-': return this.operand1-this.operand2 
      case '*': return this.operand1*this.operand2 
      case '/': return this.operand1/this.operand2 
      case '**': return this.operand1**this.operand2 
      case 'min': return Math.min(this.operand1,this.operand2) 
      case 'max': return Math.max(this.operand1,this.operand2) 
    }
  }
}