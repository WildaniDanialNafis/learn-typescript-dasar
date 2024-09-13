describe('Optional Parameters', () => {
    it('should support null and undefined', () => {
        function sayHello(name?: string | null) {
            if (name) {
                console.log(`Hello ${name}`);
            } else {
                console.log('Hello');
            }
        }

        sayHello("Wildani");
        const name: string | undefined = undefined;
        sayHello(name);
        sayHello(null);
    });
});