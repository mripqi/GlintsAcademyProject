function dataStudents(param){
    console.log(param)
    // ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"] 
    // ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
    param.splice(1, 1, "Roman Alamsyah Elsharawy");
    param.splice(2, 1, "Provinsi Bandar Lampung");
    param.splice(4, 1, "Pria","SMA Internasional Metro");
  
      console.log(param)
  
      var res = param[3].split("/");
      res[1] = parseInt(res[1])
      console.log(res)
  
      switch(res[1]) {
      case 1:
        console.log('Jan')
        break;
      case 2:
      console.log('Feb')
        break;
        case 3:
        console.log('Mar')
        break;
      case 4:
      console.log('Apr')
        break;
        case 5:
        console.log('Mei')
        break;
      case 6:
      console.log('Jun')
        break;
        case 7:
        console.log('Jul')
        break;
      case 8:
      console.log('Aug')
        break;
        case 9:
        console.log('Sep')
        break;
      case 10:
      console.log('Oct')
        break;
        case 11:
        console.log('Nov')
        break;
      case 12:
      console.log('Des')
        break;
    }
  
      res.sort()
      // res.reverse()
      console.log(res)
  
      var arr = res.join('-')
      console.log(arr)
      param[3]=arr
      // var nama = ''
      // for(let i=0; i<15; i++){
      //   nama = nama + param[1][i]
      // }
  
      // console.log(nama)
      var nama = param[1].slice(0, 14);
      console.log(nama)
      param[1]=nama
      console.log("======================")
      console.log("Hasil:")
  
      return param
  }
  
  console.log(dataStudents(["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]))