class Student{
    constructor(name,age,dateofbirth,gender,studentid,hobby){
        this._name = name
        this._age = age
        this._dateofbirth = dateofbirth
        this._gender = gender
        this._studentid = studentid
        this._hobby = [hobby]
    }

    set name(name){
       let letters = /^[A-Za-z]+$/;
       let hasil = name.match(letters)
       if (hasil != null){
          this._name = hasil
       }else{
         alert('only alphabet')
       }
        
        
    }

    set age(age){
        var reg = new RegExp('^[0-9]+$');
        var result = reg.test(age);
        result==true ? this._age = age : alert('not number')
    }

    set dateofbirth(dateofbirth){
        this._dateofbirth = dateofbirth
    }

    set gender(gender){
        let jenis =  /(boy|girl)/g
            let hasil = gender.match(jenis)
            if(hasil != null){
                this._gender = gender
            }else{
                alert('boy or girl')
            }
    }

    addhobby(hobby){
        this._hobby.push(hobby)
    }

    removeHobi(hapushobi) {
        for (let i = 0; i < this._hobby.length; i++) {
            if (this._hobby[i] === hapushobi) {
                this._hobby.splice(i, 1);
            }
        }
    }

    get data (){
        return `nama = ${this._name} 
                umur = ${this._age} 
                TTL = ${this._dateofbirth} 
                Gender = ${this._gender} 
                Id = ${this._studentid} 
                Hobby = ${this._hobby}`
    }
}

const Jony = new Student('Jony',19,"19-09-1993", 'boy', 7, 'fishing')
console.log(Jony)

Jony.addhobby('gaming')

console.log(Jony)

Jony.removeHobi('fishing')

console.log(Jony)

// Jony.gender = 'girl'
// Jony.age = '9'
// Jony.name = 'aaaa'
console.log(Jony)