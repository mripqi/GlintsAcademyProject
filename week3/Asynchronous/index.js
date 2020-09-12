
// di index.js
var readBooks = require('./callback')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Tulis code untuk memanggil function readBooks di sini
readBooks(10000,books[0],function(result){
    readBooks(result,books[1], function(result){
        readBooks(result,books[2], function(result){
            readBooks(result,books[2], function(err,result){
                // if ((err)) {
                //     console.log('no time')
                // }
                return result
            })
        })
    })

    
})