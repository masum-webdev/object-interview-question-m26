const normalPerson={
  firstName:'Rahim',
  lastName:'Uddin',
  salary:15000,
  getFullName:function(){
    return this.firstName+" "+this.lastName;
    // console.log(this.firstName,this.lastName);
  },
  chargeBill:function(amount){
    console.log(this);
    this.salary=this.salary-amount;
    return this.salary;
  }

}
// console.log(normalPerson)
// normalPerson.getFullName();

// console.log(normalPerson.chargeBill(100));
// console.log(normalPerson.chargeBill(200));
const heroPerson={
  firstName:'Hero',
  lastName:'Balam',
  salary:25000
}
const friendlyPerson={
  firstName:'Kajal',
  lastName:'Miah',
  salary:20000
}
// const heroFullName=normalPerson.getFullName.bind(heroPerson);
// const heroChargeBill=normalPerson.chargeBill.bind(heroPerson);
// console.log(heroChargeBill(10));
// console.log(heroFullName());
// console.log(normalPerson.getFullName());
// console.log(normalPerson.getFullName());

normalPerson.chargeBill.call(heroPerson,900);
console.log(heroPerson.salary)
normalPerson.chargeBill.apply(friendlyPerson,[1000]);
console.log(friendlyPerson.salary);
