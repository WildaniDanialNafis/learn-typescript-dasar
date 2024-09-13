describe('Array', function () {
    it('Should same with javascript', function () {
        const names: string[] = ["Wildani", "Danial", "Nafis"];
        const values: number[] = [1, 2, 3];

        console.info(names);
        console.info(values);
    });

    it('Should support readonly array', function () {
        const hobbies: ReadonlyArray<string> = ["Membaca", "Menulis"];
        console.info(hobbies);
        console.info(hobbies[0]);
        console.info(hobbies[1]);

        // hobbies[0] = "Main Game";
    });

    it('Should support tuple', function () {
       const person: readonly [string, string, number] = ["Wildani", "Danial", 9];
       console.info(person);

       console.info(person[0]);
       console.info(person[1]);
       console.info(person[2]);

       // person[0] = "Nafis";
    });
});