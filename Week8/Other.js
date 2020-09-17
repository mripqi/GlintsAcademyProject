function other(param){
    let arr =[]
    let hasil
    let result = ''
  
      for(let i=0; i<param.length;i++){
            hasil = 1
            arr = param.toString()
            arr = arr.split(',')
            // console.log('arr' , arr)
            arr.splice(i,1) 
            // console.log('slice', arr)   
          for(let j=0;j<arr.length;j++){
            hasil *= parseInt(arr[j])
            // console.log(arr[j])
            
          }
          // console.log('hasil' , hasil)
          result += hasil + ' '
     
      }
      return result
  }
  console.log(other([1,2,3,4,5]))