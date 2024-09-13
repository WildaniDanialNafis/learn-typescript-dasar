describe('Interface', function () {
    it('should be defined', function () {
        const seller = {
            id: 1,
            name: "Wildani",
            nib: "12312321",
            npwp: "23123123"
        };
        seller.name = "Danial";
        // seller.nib = "4564564";
        console.info(seller);
    });
    it('should support function interface', function () {
        const add = (value1, value2) => {
            return value1 + value2;
        };
        expect(add(2, 2)).toBe(4);
    });
    it('support indexable interface', function () {
        const names = ["Wildani", "Danial", "Nafis"];
        console.info(names);
    });
    it('should support indexable interface for non number index', function () {
        const dictionary = {
            "name": "Wildani",
            "address": "Indonesia"
        };
        expect(dictionary["name"]).toBe("Wildani");
        expect(dictionary["address"]).toBe("Indonesia");
    });
    it('should support extends interface', function () {
        const employee = {
            id: "1",
            name: "Wildani",
            division: "IT"
        };
        console.info(employee);
        const manager = {
            id: "2",
            name: "Danial",
            division: "IT",
            numberOfEmployees: 10
        };
        console.info(manager);
    });
    it('should support function interface', function () {
        const person = {
            name: "Wildani",
            sayHello: function (name) {
                return `Hello ${name}, my name is ${this.name}`;
            }
        };
        console.info(person.sayHello("Danial"));
    });
    it('should support intersection types', function () {
        const domain = {
            id: "1",
            name: "Wildani"
        };
    });
    it('should support type assertions', function () {
        const person = {
            name: "Wildani",
            age: 21
        };
        const person2 = person;
        // person2.sayHello("Danial");
        console.info(person2);
    });
});
export {};
