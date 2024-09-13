"use strict";
describe('Any', function () {
    it('Should support in typescript', function () {
        const person = {
            id: 1,
            name: "Wildani Danial Nafis",
            age: 21
        };
        person.age = 20;
        person.address = "Indonesia";
        console.info(person);
    });
});
