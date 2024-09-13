"use strict";
describe('Optional Parameters', () => {
    it('should support null and undefined', () => {
        function sayHello(name) {
            if (name) {
                console.log(`Hello ${name}`);
            }
            else {
                console.log('Hello');
            }
        }
        sayHello("Wildani");
        const name = undefined;
        sayHello(name);
        sayHello(null);
    });
});
