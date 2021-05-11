var assert = require('chai').assert;

Feature('login');

Scenario('Test1 - Login to staging', ({ I }) => {
    I.amOnPage('/login')

    I.fillField("Username", "aman.gupta@yellowmessenger.com")
    I.fillField("Password","Qwerty@12345")
    //click on Login button
    I.click("//*[@class='ant-btn submit___I-E-_ ant-btn-primary ant-btn-lg']"); 
    //Click on Agree button
    //I.click("//*[@class='ant-btn ant-btn-primary']");
    //Click on Sandbox
    I.click("//ul//li[text()[contains(.,'Sandbox')]]")
    // //Click on search tab
    I.click("//*[@class='ant-input']")
    // //Search for a project name
    I.fillField("Search projects", "shilpa")
    //Click on Search icon    
    // I.click({xpath: "//*[local-name()='svg' and @data-icon='search']"})
    I.pressKey('Enter')

    I.see('Sandbox')   //Assertion
    I.dontSee('Login') //Assertion
   //assert.equal('Sandbox','sandbox', "H2 string text is matching")
    
     //pause()
});

Scenario('Test2 - Grap text demo', async({ I }) => {

    I.amOnPage('https://the-internet.herokuapp.com/checkboxes');
    let a = await I.grabTextFrom('#checkboxes');
    console.log(a)

});

Scenario('Test3 - Dropdown Select Test', ({ I }) => {

    I.amOnPage('https://the-internet.herokuapp.com/dropdown');
    I.selectOption('#dropdown', 'Option 1')
    I.wait(1);

});

Scenario('Test4 - Smart Wait Test', ({ I }) => {

    I.amOnPage('https://the-internet.herokuapp.com/dynamic_loading/1');
    I.click("//button[contains(text(),'Start')]");
    I.waitForText("Hello World!",20);

});

// describe ('assert', function() {
//     it('check sagar length ', function())
//         var length= 'sagar'.length;
//         assert.equal(length,5)


// });
