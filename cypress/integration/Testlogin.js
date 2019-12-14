describe('Test content', () => {
    // 测试用例触发前调用的函数钩子
    before(() => {
        // 进入测试页面
        cy.visit('http://localhost:8000/#/login');
    });

    it('Test title', () => {
        cy.title().should('contain','client')
    });

    it('Test Email lab', () => {
        cy.get("#email")


    });
    it('show password label', ()=> {
        cy.get("#psw")
    });
    it('show login button', ()=> {
        cy.get("#btnlogin")
    });

});
describe('Test function', () => {

    before(() => {
        // 进入测试页面
        cy.visit('http://localhost:8000/#/login');
    });

    it('Enter the email', () => {
        cy.get('#email').type('786739354@qq.com')
    });

    it('Enter the password', () => {
        cy.get('#psw').type('as102030')


    });
    it('Click the login button', ()=> {
        cy.get('#btnlogin').click()
        cy.url().should('contain', 'home/message')
    });


});