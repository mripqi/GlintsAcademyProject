
function formatDuration(angka) {
    let hasil = []
    let print = ''
    if(angka==0){
      return print='0'
    }
    
    console.log(angka)
    let sisaM = angka % 1000
    angka = angka - sisaM
    count = angka/1000
    console.log(sisaM)
    hasil.unshift(count)

    let sisaD = sisaM % 500
    angka = sisaM - sisaD
    count = angka/500
    hasil.unshift(count)

    let sisaC = sisaD % 100
    angka = sisaD - sisaC
    count = angka/100
    hasil.unshift(count)

    let sisaL = sisaC % 50
    angka = sisaC - sisaL
    count = angka/50
    hasil.unshift(count)

    let sisaX = sisaL % 10
    angka = sisaL - sisaX
    count = angka/10
    hasil.unshift(count)

    if(sisaX!=9){
        
        let sisaV = sisaX % 5
        angka = sisaX - sisaV
        count = angka/5
        hasil.unshift(count)
        
        if(sisaV>5){
        count = sisaV - 5
        hasil.unshift(count)
        }else{
          hasil.unshift(sisaV)
        }

    }else{
      hasil.unshift(0)
      hasil.unshift(sisaX)
    }
       
    // console.log(hasil)


      for(let i = hasil.length-1; i>=0; i--){
       for(let j=1; j<=hasil[i]; j++){
          if(i==0){
            if(hasil[i]==4){
              print += 'IV'
              j=5
            }else if(hasil[i]==9){
            print += 'IX'
            j=10
            }else{
            print += 'I'
            }
            
          }else if(i==1){
            print += 'V'
          }else if(i==2){
            print += 'X'
          }else if(i==3){
            print += 'L'
          }else if(i==4){
            print += 'C'
          }else if(i==5){
            print += 'D'
          }else if(i==6){
            print += 'M'
          }
       }
      }
    return print
}

console.log(formatDuration(2662)); 
console.log(formatDuration(19));
console.log(formatDuration(54));
console.log(formatDuration(555));
