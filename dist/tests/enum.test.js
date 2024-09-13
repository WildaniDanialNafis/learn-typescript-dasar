import { CustomerType } from "../src/enum";
describe('Enum', function () {
    it('should be defined', function () {
        const customer = {
            id: 1,
            name: "Wildani",
            type: CustomerType.GOLD
        };
        console.info(customer);
    });
});
