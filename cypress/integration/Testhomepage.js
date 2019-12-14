describe('Test main page/main content', () => {
    // 测试用例触发前调用的函数钩子
    before(() => {
        // 进入测试页面
        cy.visit('http://localhost:8000/#/login');
        cy.get('#email').type('786739354@qq.com')
        cy.get('#psw').type('as102030')
        cy.get('#btnlogin').click()

    });

   it('should have title', () => {
        cy.title().should('contain','client')
    });
    it('should have avatar', () => {
        cy.get("#clickavatar")
    });
    it('should have message button', () => {
        cy.get("#message").contains("Message")
        /*cy.get("#dynamic").click()
        cy.get("#clickdynamic").click()
        cy.get("#addshow").click()
        cy.get("#sharecontent").type("dy3")
        cy.get("#butnsend").click()
        cy.get("#contentshow").click()
        cy.get('#leavecontent').type("beautiful")
        cy.get("#send").click()*/
    });
    it('should have Friends button', () => {
        cy.get("#friends").contains("Friends")
    });
    it('should have Friends button', () => {
        cy.get("#dynamic").contains("Dynamic")
    });
    it('should have Friends button', () => {
        cy.get("#dynamic").contains("Dynamic")
    });
    it('should have Add icon', () => {
        cy.get("#plus")
    });
});

describe('Test main page/edit content', () => {
    before(() => {
        // 进入测试页面
        cy.visit('http://localhost:8000/#/login');
        cy.get('#email').type('786739354@qq.com')
        cy.get('#psw').type('as102030')
        cy.get('#btnlogin').click()
    });

    it('title should be client', () => {
        cy.title().should('contain','client')
    });
    it('should have user avatar', () => {
        cy.get("#clickavatar").click()
    });
    it('should have nickname', () => {
         cy.get("#nickname1")

    });
    it('should have male button', () => {
        cy.get("#male1").contains("male")
    });
    it('should have female button', () => {
        cy.get("#female1").contains("female")
    });
    it('should have age label', () => {
        cy.get("#age1")
    });
    it('should have favor label', () => {
        cy.get("#favor1")
    });
    it('should have signature label', () => {
        cy.get("#signature1")
    });
    it('should have save button', () => {
        cy.get("#save")
    });
    it('should have logout button', () => {
        cy.get("#logout").contains("Logout")
    });

});

describe('Test main page/Friend page content', () => {
    beforeEach(() => {
        // 进入测试页面
        cy.visit('http://localhost:8000/#/login');
        cy.get('#email').type('786739354@qq.com')
        cy.get('#psw').type('as102030')
        cy.get('#btnlogin').click()

    });

    it('title should be client', () => {
        cy.title().should('contain','client')
    });
    it('should have search text box', () => {
        cy.get("#plus").click()
        cy.get("#addshow")
    });
    it('should have new friend title', () => {
        cy.get("#friends").click()
        cy.get("#title1")

    });
    it('should have new friend button', () => {
        cy.get("#friends").click()
        cy.get("#title1").click()
    });
    it('Add friends should have user information', () => {
        cy.get("#friends").click()
        cy.get("#title1").click()
        cy.get("#friendinfo")
        cy.get("#nickname")
        cy.get("#message")
    });
    it('Check own friend', () => {
        cy.get("#friends").click()
        cy.get("#title1").click()
        cy.get("#chatfriend")
    });
    it('Check own friends nickname and signature' , () => {
        cy.get("#friends").click()
        cy.get("#title1").click()
        cy.get("#friendnick")
        cy.get("#friendsignature")
    });
    it('Check Accept button ' , () => {
        cy.get("#friends").click()
        cy.get("#title1").click()
        cy.get("#butaccept").contains("Accept")
    });
    it('Check Refuse button ' , () => {
        cy.get("#friends").click()
        cy.get("#title1").click()
        cy.get("#butrefuse").contains("Refuse")
    });

});
describe('Test main page/Dynamic page content', () => {
    beforeEach(() => {
        // 进入测试页面
        cy.visit('http://localhost:8000/#/login');
        cy.get('#email').type('786739354@qq.com')
        cy.get('#psw').type('as102030')
        cy.get('#btnlogin').click()

    });

    it('title should be client', () => {
        cy.title().should('contain','client')
    });
    it('should have dynamic click', () => {
        cy.get("#dynamic").click()
        cy.get("#clickdynamic")
    });
    it('should have dynamic about someone', () => {
        cy.get("#dynamic").click()
        cy.get("#clickdynamic").click()
        cy.get("#mynickname")
        cy.get("#time")
        cy.get("#content")

    });
    it('Check the comments', () => {
        cy.get("#dynamic").click()
        cy.get("#clickdynamic").click()
        cy.get("#usercontnet")
        cy.get("#send")
        cy.get("#leavecontent")

    });


});
describe('Test main page/message page content', () => {
    beforeEach(() => {
        // 进入测试页面
        cy.visit('http://localhost:8000/#/login');
        cy.get('#email').type('786739354@qq.com')
        cy.get('#psw').type('as102030')
        cy.get('#btnlogin').click()

    });

    it('title should be client', () => {
        cy.title().should('contain','client')
    });

    it('Check my friend avatar', () => {
        cy.get("#message").click()
        cy.get("#friendavatar")

    });
    it('Check my friends nickname', () => {
        cy.get("#message").click()
        cy.get("#fdnickname")

    });
    it('check messages', () => {
       cy.get("#message").click()
       cy.get("#fdmessage")
    });

});
describe('Test main page/chat page content', () => {
    before(() => {
        // 进入测试页面
        cy.visit('http://localhost:8000/#/login');
        cy.get('#email').type('786739354@qq.com')
        cy.get('#psw').type('as102030')
        cy.get('#btnlogin').click()
        cy.get("#message").click()
        cy.get("#click").click()

    });

    it('Check the avatars', () => {
        cy.get("#friendavatar")

    });
    it('Check the message', () => {
        cy.get("#message")

    });
    it('check the send button', () => {
        cy.get("#sendbutton")
    });
    it('check the textarea', () => {
        cy.get("#textarea")
    });

});
describe('Test main page/chat page function', () => {
    beforeEach(() => {
        // 进入测试页面
        cy.visit('http://localhost:8000/#/login');
        cy.get('#email').type('786739354@qq.com')
        cy.get('#psw').type('as102030')
        cy.get('#btnlogin').click()
        cy.get("#message").click()
        cy.get("#click").click()

    });


    it('check the textarea', () => {
        cy.get("#textarea").type("11")
    });
    it('check the send button', () => {
        cy.get("#textarea").type("11")
        cy.get("#sendbutton").click()
    });

});
describe('Test main page/Dynamic page function', () => {
    beforeEach(() => {
        // 进入测试页面
        cy.visit('http://localhost:8000/#/login');
        cy.get('#email').type('786739354@qq.com')
        cy.get('#psw').type('as102030')
        cy.get('#btnlogin').click()


    });


    it('send the dynamic', () => {
         cy.get("#dynamic").click()
         cy.get("#clickdynamic").click()
         cy.get("#addshow").click()
         cy.get("#sharecontent").type("dy3")
         cy.get("#butnsend").click()
    });
    it('send the commit', () => {
        cy.get("#dynamic").click()
        cy.get("#clickdynamic").click()
        cy.get("#contentshow").click()
        cy.get('#leavecontent').type("beautiful")
        cy.get("#send").click()
    });

});
describe('Test main page/edit page function', () => {
    beforeEach(() => {
        // 进入测试页面
        cy.visit('http://localhost:8000/#/login');
        cy.get('#email').type('786739354@qq.com')
        cy.get('#psw').type('as102030')
        cy.get('#btnlogin').click()


    });
    it('click have user avatar', () => {
        cy.get("#clickavatar").click()
    });
    it('click save button', () => {
        cy.get("#clickavatar").click()
        cy.get("#save").click()
    });
    it('Fill in nickname', () => {
        cy.get("#clickavatar").click()
        cy.get("#save").click()
        cy.get("#nickname1").type("yy")

    });
    it('click male button', () => {
        cy.get("#clickavatar").click()
        cy.get("#save").click()
        cy.get("#nickname1").type("yy")
        cy.get("#male1").click()
    });
    it('Fill in age', () => {
        cy.get("#clickavatar").click()
        cy.get("#save").click()
        cy.get("#nickname1").type("yy")
        cy.get("#male1").click()
        cy.get("#age1").type("11")
    });
    it('Fill in favor', () => {
        cy.get("#clickavatar").click()
        cy.get("#save").click()
        cy.get("#nickname1").type("yy")
        cy.get("#male1").click()
        cy.get("#age1").type("11")
        cy.get("#favor1").type("ft")
    });
    it('Fill in signature label', () => {
        cy.get("#clickavatar").click()
        cy.get("#save").click()
        cy.get("#nickname1").type("yy")
        cy.get("#male1").click()
        cy.get("#age1").type("11")
        cy.get("#favor1").type("ft")
        cy.get("#signature1").type("happy")
    });
    it('should have save button', () => {
        cy.get("#clickavatar").click()
        cy.get("#save").click()
        cy.get("#nickname1").type("yy")
        cy.get("#male1").click()
        cy.get("#age1").type("11")
        cy.get("#favor1").type("ft")
        cy.get("#save").click()
    });
    it('should have logout button', () => {
        cy.get("#clickavatar").click()
        cy.get("#logout").contains("Logout")
    });


});


