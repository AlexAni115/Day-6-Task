//1.Write a “person” class to hold all the details.
class Person{
    constructor(name,age,gender,salary){
     this.name= name;
     this.age= age;
     this.gender = gender;
     this.salary = salary;
    }
}var obj1 = new Person("john",35,"male",50000);
console.log(obj1.name)
console.log(obj1.age)
console.log(obj1.gender)
console.log(obj1.salary)


// class Uber {
//     constructor(price,km){ 
//         this.price=price;
//         this.km = km;
//     }
//     {
        
//     }
   
// }var obj2 = new Uber(5,5)
// console.log(obj2.price,obj2.km)


// 2.Class Movie;

class Movie {
    constructor(title,studio,rating="PG"){
        this.title = title;
        this.studio = studio;
        this.rating = rating;

}
}var value = new Movie ("Casino Royale","Eon Productions","PG13")
var value1= new Movie ("Spector","Universal studios",)

console.log(value.title,value.studio,value.rating)
console.log(value1.title,value1.studio,value1.rating)