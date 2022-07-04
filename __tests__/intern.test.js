const Intern = require('../lib/Intern')

test('test name, id,  email, school of intern', () => {
    const newIntern = new Intern('Joe', 7, 'joe@email.com', 'UCB')
    expect(newIntern.name).toBe('Joe')
    expect(newIntern.id).toBe(7)
    expect(newIntern.email).toBe('joe@email.com')
    expect(newIntern.school).toBe('UCB')
})