"use strict";
var myName = "Mahdi";
var age;
var isHungry = false;
var studentId = 54565;
studentId = "web4-5545";
var person = {
    name: "mahdi",
    age: 12,
    hobby: "sleeping",
};
var person2 = {
    name: "aaa",
    age: 14,
};
var numbers = [10, 20, 30, 40];
var persons = [
    {
        name: "mahdi",
        age: 25,
    },
    {},
    {},
];
// functions
var greeting = function (name) {
    console.log("hello " + name);
};
greeting("Mahdi");
var add = function (a, b) {
    return a + b;
};
var introduce = function (_a) {
    var name = _a.name, age = _a.age, hobby = _a.hobby;
    console.log("Hello " + person.name);
};
var getArray = function (arr) {
    return arr;
};
getArray(["mahdi", "abc"]);
getArray([123, 456]);
// enum
var Week;
(function (Week) {
    Week[Week["Sat"] = 0] = "Sat";
    Week[Week["Sun"] = 1] = "Sun";
    Week[Week["Mon"] = 2] = "Mon";
    Week[Week["Tue"] = 3] = "Tue";
    Week[Week["Wed"] = 4] = "Wed";
    Week[Week["Thus"] = 5] = "Thus";
    Week[Week["Fri"] = 6] = "Fri";
})(Week || (Week = {}));
console.log(Week.Sat);
