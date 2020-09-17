var str = "HELLO WORLD";
  var n = []
let character = ''

for(let i=0; i<str.length;i++){
    n[0] = str.charCodeAt(i) + 1
   character += String.fromCharCode(n);
}

  console.log(character)