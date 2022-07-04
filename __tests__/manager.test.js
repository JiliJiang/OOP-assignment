const Manager = require('../lib/Manager')

test('test name, id,  email, phone  of manager', () => {
    const newManager = new Manager('Joe', 7, 'joe@email.com', '123-456')
    expect(newManager.name).toBe('Joe')
    expect(newManager.id).toBe(7)
    expect(newManager.email).toBe('joe@email.com')
    expect(newManager.phone).toBe('123-456')
})