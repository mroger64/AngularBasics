function sayHello(person) { return "Hello, " + person; }
var user = "Super Student";
document.getElementById("div1").innerHTML = sayHello(user);
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age, phoneNumber, zipCode, state, occupation, hourlyWage) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.zipCode = zipCode;
        this.state = state;
        this.occupation = occupation;
        this.hourlyWage = hourlyWage;
    }
    Person.prototype.addCerts = function (certs) {
        this.certs = certs;
    };
    Person.prototype.getWeeklyWage = function (hours) {
        return this.hourlyWage * hours;
    };
    Person.prototype.getName = function () {
        return this.firstName + " " + this.lastName;
    };
    Person.prototype.getLastAndPhone = function () {
        return this.lastName + " " + this.phoneNumber;
    };
    Person.prototype.getLocation = function () {
        return this.zipCode + " " + this.state;
    };
    Person.prototype.getAgeAndOcc = function () {
        return this.age + " " + this.occupation;
    };
    return Person;
}());
var person1 = new Person("John", "Doe", "35", "111-111-1111", "11111", "Hawaii", "Software Tester", 20);
var person2 = new Person("Judy", "Apple", "43", "222-222-2222", "22222", "New York", "teacher", 17);
var person3 = new Person("Jenn", " Bernstein", "19", "333-333-3333", "33333", "Illinois", "student", 0);
var person4 = new Person("Paul", "Clover", "62", "444-444-4444", "44444", "California", "retired", 0);
var person5 = new Person("Sherry", "Waters", "37", "555-555-5555", "55555", "Lousiana", "Java Developer", 25);
document.getElementById("div1").innerHTML = person3.getName() + " " + person3.getWeeklyWage(10);
document.getElementById("div2").innerHTML = person1.getAgeAndOcc();
document.getElementById("div3").innerHTML = person4.getLocation();
document.getElementById("div4").innerHTML = person2.getLastAndPhone();
document.getElementById("div5").innerHTML = person5.getName() + " " + person5.getWeeklyWage(45);
function createPerson(config) {
    var newPerson = { age: "N/A", phoneNum: "N/A", zipCode: "N/A", state: "N/A", occ: "unemployed", hourWage: 0, certs: ["N/A"] };
    if (config.age) {
        newPerson.age = config.age;
    }
    if (config.phoneNum) {
        newPerson.phoneNum = config.phoneNum;
    }
    if (config.zipCode) {
        newPerson.zipCode = config.zipCode;
    }
    if (config.state) {
        newPerson.state = config.state;
    }
    if (config.occ) {
        newPerson.occ = config.occ;
    }
    if (config.hourWage) {
        newPerson.hourWage = config.hourWage;
    }
    if (config.certs) {
        for (var i = 0; i < config.certs.length; i++) {
            newPerson.certs[i] = config.certs[i];
        }
    }
}
