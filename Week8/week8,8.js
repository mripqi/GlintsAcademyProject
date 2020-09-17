function words (num){
    console.log('input', num)
    let param = num.toString()
    let loop = Math.floor(param.length/3)
    let sisa = param.length % 3
    
    // console.log(loop, sisa)
  
    let hasil =''
    let count = 0
  
        if(loop!=0){
          if(sisa!==0){
            for(let t=sisa;t>0;t--){
              if(t==1 && param[count] !== '0'){
                hasil += angkatoletter(param[count])
              }else if(t==2 &&param[count] !== '0'){
                
                hasil += angkatoletter(param[count]) +' puluh'     
              }
              count++
            }
  
            afterthree(loop+1)
          }
          for(let j=loop; j>0;j--){
          
            for(let z=2; z>=0;z--){
    
                  if(z==0 && param[count]!==0){
                     hasil += angkatoletter(param[count])
                  }else if(z==1 && param[count]!== '0'){
  
                    // console.log('angka di cek ', param[count])
                     hasil += angkatoletter(param[count]) +' puluh'
  
                  }else if(z==2 && param[count]!=='0'){
                      hasil += angkatoletter(param[count]) +' ratus'
                  }
                  count++
            }
  
            if(param[count]!=='0' && param[count-1]!==0 )
            afterthree(j)
            
          }
        }else{
          if(sisa!==0){
            for(let t=sisa;t>0;t--){
              if(t==1 && param[count] !== '0'){
                hasil += angkatoletter(param[count])
              }else if(t==2 && param[count] !== '0'){
                hasil += angkatoletter(param[count]) +' puluh'     
              }
              count++
            }
          } 
        }
    
  
    function angkatoletter(x){
      switch(x){
        case '1': return " satu "
        case '2': return " dua "
        case '3': return " tiga "
        case '4': return " empat "
        case '5': return " lima "
        case '6': return " enam "
        case '7': return " tujuh "
        case '8': return " delapan "
        case '9': return " sembilan "
        default: return ""
      }
    }
  
    function afterthree(j){
        if(j==2){
               hasil += ' ribu '
             }else if(j==3){
               hasil += ' juta '
             }else if(j==4){
               hasil += ' milliar '
             }else if(j==5){
               hasil += ' triliun '
             }else if(j==6){
               hasil += ' kuadriliun '
             }
    }
    console.log(hasil)
  }
  
  words(22876245)
  words(987654321234567)
  
  words(7000000000000000)