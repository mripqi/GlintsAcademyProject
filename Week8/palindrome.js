const isPalindrome = (str) => {
    const cleanStr = str.toUpperCase()
    for (let i=0; i<cleanStr.length/2; i++){
      if (cleanStr[i] === cleanStr[cleanStr.length - 1- i]){
      return true
      } else{
      return false
      }
    }
  }
  
  console.log(isPalindrome('Radar'))
  