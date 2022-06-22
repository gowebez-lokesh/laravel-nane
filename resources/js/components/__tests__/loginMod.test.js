const { emailValidation } =  require('../pagecomponent/LoginMod')

// const emailValidation = (str) => str.includes('@');

describe('Login Form Module', ()=>{
    // email address
    test('Email function should pass',()=>{
        const input = 'nane@gmail.com'
        expect(emailValidation(input)).toBe(true);
    })
    test('Email function should fail',()=>{
        const input = 'nanegmail.com'
        expect(emailValidation(input)).not.toBe(true);
    })
})