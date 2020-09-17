function getBaseLog(x) {
    let hasil = 0
    hasil = Math.log(x) / Math.log(2);
    if(Number.isInteger(hasil)){
        console.log('pangkat 2')
    }else{
        console.log('not power of two')
    }
}


getBaseLog(8)
  
