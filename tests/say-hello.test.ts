import { sayHello } from "../src/say-hello"

describe('sayHello', function() {
    it('should return hello wildani', function() {
        expect(sayHello('wildani')).toBe('Hello wildani');
    })
})