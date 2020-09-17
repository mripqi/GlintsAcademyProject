let str = 'aku pasti bisa'

const capital = () => {
  let hasil = ''
  let array = str.split(' ')

  for(let i=0; i<array.length;i++){
      hasil += array[i][0].toUpperCase() +array[i].slice(1)+ ' '
  }
  return hasil
}

console.log(capital(str))
