function recursion (variabel){
    let param = variabel.toString()
    
    let hasil = 0

    kalix = (param) => {
      let kali = 1
    for(let i=0; i<param.length;i++){
      let angka = +param[i]
              if(param.length !== 1){
                kali = kali * angka

              } else{
                return hasil = angka
              }
            }
            param = kali.toString()
            console.log('pengulangan = ', param)
            kalix(param)
    }
    
    kalix(param)

return hasil
}

console.log(recursion('39'))
console.log(recursion('999'))