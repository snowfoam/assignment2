// cypress/integration/test.cypress.test.js
describe('Content', () => {
    // 测试用例触发前调用的函数钩子
    before(() => {
        // 进入测试页面
        cy.visit('http://localhost:8000/#/welcome');
    });

    it('Test title', () => {
        cy.title().should('contain','client')
    });

   it('click login button', () => {
        cy.get("#login").contains("Login")

   });
    it('click register button', () => {
        cy.get("#register").contains("New User")
    });


});
describe('function', () => {
    // 测试用例触发前调用的函数钩子
    beforeEach(() => {
        // 进入测试页面
        cy.visit('http://localhost:8000/#/welcome');
    });


    it('click login button then jump to /login', () => {
        cy.get('#login').click()
        cy.url().should('contain', '/login')

    });
    it('click register button then jump to /register', () => {
         cy.get("#register").click()
         cy.url().should('contain', '/register')


    });


});