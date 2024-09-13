"use strict";
describe('Function', function () {
    it('should support in typescript', function () {
        function sayHello(name) {
            return `Hello ${name}`;
        }
        expect(sayHello("Wildani")).toBe("Hello Wildani");
        function printHello(name) {
            console.info(`Hello ${name}`);
        }
        printHello("Wildani");
    });
    it('should support default value', function () {
        function sayHello(name = "Guest") {
            return `Hello ${name}`;
        }
        expect(sayHello()).toBe("Hello Guest");
        expect(sayHello("Wildani")).toBe("Hello Wildani");
    });
    it('should support rest parameter', function () {
        function sum(...values) {
            let total = 0;
            for (const value of values) {
                total += value;
            }
            return total;
        }
        expect(sum(1, 2, 3, 4, 5)).toBe(15);
    });
    it('should support optional parameter', function () {
        function sayHello(firstName, lastName) {
            if (lastName) {
                return `Hello ${firstName} ${lastName}`;
            }
            else {
                return `Hello ${firstName}`;
            }
        }
        expect(sayHello("Wildani")).toBe("Hello Wildani");
        expect(sayHello("Wildani", "Danial")).toBe("Hello Wildani Danial");
    });
    it('should support function overloading', function () {
        function callMe(value) {
            if (typeof value === "string") {
                return value.toUpperCase();
            }
            else if (typeof value === "number") {
                return value * 10;
            }
        }
        expect(callMe(10)).toBe(100);
        expect(callMe("Wildani")).toBe("WILDANI");
    });
    it('should support function as parameter', function () {
        function sayHello(name, filter) {
            return `Hello ${filter(name)}`;
        }
        function toUpper(name) {
            return name.toUpperCase();
        }
        expect(sayHello("Wildani", toUpper)).toBe("Hello WILDANI");
        expect(sayHello("Wildani", function (name) {
            return name.toUpperCase();
        })).toBe("Hello WILDANI");
        expect(sayHello("Wildani", (name) => name.toUpperCase())).toBe("Hello WILDANI");
    });
});
