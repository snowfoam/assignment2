describe('Register page /Test content', () => {
    // 测试用例触发前调用的函数钩子
    before(() => {
        // 进入测试页面
        cy.visit('http://localhost:8000/#/register');
    });

    it('Test title', () => {
        cy.title().should('contain','client')
    });

    it('show the head', () => {
        cy.get("#title")

    });
    it('show the label', ()=>{
        cy.get("#email")
    });
    it('show the code label', ()=>{
        cy.get("#code")
    });
    it('show the label button', ()=>{
        cy.get("#sendcode").contains("Send Code")
    });
    it('show the pwd label', ()=>{
        cy.get("#pwd")
    });
    it('show the Next button', ()=>{
        cy.get("#next1").contains("Next")
    });


});
describe('Register page /Test function', () => {
    // 测试用例触发前调用的函数钩子
    before(() => {
        // 进入测试页面
        cy.visit('http://localhost:8000/#/register');
    });
    it('Fill the email', () => {
          cy.get('#email').type('786739354@qq.com')

    });
    it('Click the button to send code', ()=>{
        cy.get('#sendcode').click()
    });
    it('Fill the password', ()=>{
        cy.get('#pwd').type('as102030')
    });
    it('click the next button', ()=>{
        cy.get('#next1').click()

       /* cy.get('#nickname').type('ys')
        cy.get('#female').click()
        cy.get('#age').type('12')
        cy.get('#favor').type('football')
        cy.get('#next2').click()
        cy.url().should('contain', '/welcome')*/
    });

});
describe('Register page /Test the Edit content', () => {
    // 测试用例触发前调用的函数钩子
    before(() => {
        cy.visit('http://localhost:8000/#/register')
        cy.get('#email').type('786739354@qq.com')
        cy.get('#sendcode').click()
        cy.get('#pwd').type('as102030')
        cy.get('#next1').click()
    });
    it('Show a label', () => {
        cy.get('#title1')

    });
    it('Show a nickname label', () => {
        cy.get('#nickname')

    });
    it('show the button to select sex', ()=>{
        cy.get('#male').contains("male")
        cy.get('#female').contains("female")
    });
    it('Show the age label', ()=>{
        cy.get('#age')
    });
    it('show the favor label', ()=>{
        cy.get('#favor')
    });
    it('show the next button', ()=>{
        cy.get("#next2").contains("Next")
    });

});
describe('Register page /Test the Edit function', () => {
    before(() => {
        cy.visit('http://localhost:8000/#/register')
        cy.get('#email').type('786739354@qq.com')
        cy.get('#sendcode').click()
        cy.get('#pwd').type('as102030')
        cy.get('#next1').click()
    });
    it('Fill the nickname', () => {
        cy.get('#nickname').type('ys')
    });
    it('choose the female sex', () => {
        cy.get('#female').click()

    });
    it('choose the male sex', () => {
        cy.get('#male').click()

    });
    it('Fill the age', ()=>{
        cy.get('#age').type('12')
    });
    it('Fill the favor', ()=>{
        cy.get('#favor').type("fb")
    });
    it('click the next button', ()=>{
        cy.get('#next2').click()
        cy.url().should('contain', '/welcome')
    });

});