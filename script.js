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


class Uber {
    constructor(km,price=40){ 
        this.km=km;
        this.price= price;
    }
    get Price(){
        return (this.km*this.price)
    }
   
   
}var obj2 = new Uber(5)
var obj3 = new Uber (5,110)
console.log(obj2.Price)
console.log(obj3.Price)


// 2.Class Movie;

class Movie {
    constructor(title,studio,rating="PG"){
        this.title = title;
        this.studio = studio;
        this.rating = rating;

}
get movive (){
    return this.rating = "PG";
}
}var value = new Movie ("Casino Royale","Eon Productions","PG13")
var value1= new Movie ("Spector","Universal studios",)
var value2 = new Movie ("Die another day","MGM",)
var value3 = new Movie("Day after tomorrow","Disney")
console.log(value.title,value.studio,value.rating)
console.log(value1.title,value1.studio,value1.rating)
console.log(value.movive)