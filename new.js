class Person{
  constructor(firstName,lastname,salary){
    this.firstName=firstName;
    this.lastname=lastname;
    this.salary=salary;
  }
}
const heroPerson=new Person("Hero","Alam",20000);
console.log(heroPerson);
const friendlyPerson=new Person("Golam","Alam",25000);
console.log(friendlyPerson.firstName);