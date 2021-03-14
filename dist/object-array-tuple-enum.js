"use strict";
var tuplePerson = {
    name: 'mike',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author'],
};
console.log(tuplePerson);
for (var _i = 0, _a = tuplePerson.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
console.log('-----------------');
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var enumPerson = {
    name: 'mike',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN,
};
if (enumPerson.role === Role.ADMIN) {
    console.log('管理ユーザ');
}
console.log('-----------------');
var product = {
    id: 'abc1',
    price: 13,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet',
    },
};
console.log(product);
