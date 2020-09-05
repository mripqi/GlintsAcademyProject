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

function kali(operand1, operand2) {
  let hasil2 = ''
  hasil2 = operand1 * operand2
  return hasil2
}
function tambah(operand1, operand2) {
  let hasil2 = ''
  hasil2 = operand1 + operand2
  return hasil2
}
function kurang(operand1, operand2) {
  let hasil2 = ''
  hasil2 = operand1 - operand2
  return hasil2
}
function bagi(operand1, operand2) {
  let hasil2 = ''
  hasil2 = operand1 / operand2
  return hasil2
}

function pangkat(operand1, operand2) {
  let hasil2 = ''
  hasil2 = operand1 ** operand2
  return hasil2
}

function max(operand1, operand2) {
  let hasil2 = ''
  hasil2 = Math.max(operand1,operand2)
  return hasil2
}

function min(operand1, operand2) {
  let hasil2 = ''
  hasil2 = Math.min(operand1,operand2)
  return hasil2
}

function calculate(arrNumber) {
  let temp = ''
    if (arrNumber.operator== '*'){
        temp = kali(arrNumber.operand1,arrNumber.operand2)
      } else if (arrNumber.operator== '+'){
        temp = tambah(arrNumber.operand1,arrNumber.operand2)
      }  else if (arrNumber.operator== '-'){
       temp = kurang(arrNumber.operand1,arrNumber.operand2)
      }  else if (arrNumber.operator== '**'){
       temp = pangkat(arrNumber.operand1,arrNumber.operand2)
      }else if (arrNumber.operator== 'max'){
        console.log(arrNumber.operator)
        temp = max(arrNumber.operand1,arrNumber.operand2)
       }else if (arrNumber.operator== 'min'){
         console.log(arrNumber.operator)
        temp = min(arrNumber.operand1,arrNumber.operand2)
       }else {
        temp =bagi(arrNumber.operand1,arrNumber.operand2)
      }
  return temp
}

