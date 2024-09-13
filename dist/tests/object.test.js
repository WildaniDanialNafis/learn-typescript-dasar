"use strict";
describe('Object', function () {
    it('Should return an object', function () {
        const person = {
            id: "1",
            name: "Wildani"
        };
        console.info(person);
        person.id = "2";
        person.name = "Danial";
        // person.description = "A";
        console.info(person);
    });
});
