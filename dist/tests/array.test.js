"use strict";
describe('Array', function () {
    it('Should same with javascript', function () {
        const names = ["Wildani", "Danial", "Nafis"];
        const values = [1, 2, 3];
        console.info(names);
        console.info(values);
    });
    it('Should support readonly array', function () {
        const hobbies = ["Membaca", "Menulis"];
        console.info(hobbies);
        console.info(hobbies[0]);
        console.info(hobbies[1]);
        // hobbies[0] = "Main Game";
    });
    it('Should support tuple', function () {
        const person = ["Wildani", "Danial", 9];
        console.info(person);
        console.info(person[0]);
        console.info(person[1]);
        console.info(person[2]);
        // person[0] = "Nafis";
    });
});
