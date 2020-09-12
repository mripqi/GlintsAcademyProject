const userProfile = function (id, callback) {
    if(!id){
        //if use err.message change the inside
        return callback(new Error('Invalid userId'))
    }
    let result = {
        success:true,
        id: id,
        message: 'User found'
    }
    return callback(null, result)
}

userProfile(0,function(err, result){
    if ((err)) {
        //if want to use default
        // console.log(err.message)
        
        //custom error msg
        console.log('there is no id')
    }
    console.log(result)
})