describe('Type Alias', function () {
    it('Should return an array of type Alias', function () {
        const category = {
            id: 1,
            name: "Handphone"
        };
        const product = {
            id: "1",
            name: "Samsung S20",
            price: 20000000,
            category: category
        };
        // product.description = "Test";
        console.info(category);
        console.info(product);
    });
});
export {};
