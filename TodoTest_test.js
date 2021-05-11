const allure = codeceptjs.container.plugins('allure');
Feature('Todo list');

Scenario('Create todo item and validate', ({ I }) => {
    
    I.amOnPage('https://todomvc.com/examples/react/#/')
    I.dontSeeElement('.todo-count');  //Assertion
    I.fillField('What needs to be done?', 'Write a guide');
    I.pressKey('Enter');
    I.see('Write a guide'); //Assertion
    I.see('1 item left');  //Assertion
    //pause()

});
/**
 * Multi Session Testing
 * To launch additional browser context (or incognito window) use session command.
 */

Scenario('I try to open this site as anonymous user', ({ I }) => {
    I.amOnPage('https://todomvc.com/examples/react/#/');
    I.dontSee('Agree to cookies');
    session('anonymous user', () => {
      I.amOnPage('https://todomvc.com/examples/react/#/');
      I.dontSee('Agree to cookies');
    });
  })

//   /**
//  * Mobile Testing -( Need to add Config )
//  */
//    const { devices } = require('playwright');
   

//    Scenario('website looks nice on iPhone', () => {
//      session('mobile user', devices['iPhone 6'], () => {
//        I.amOnPage('https://todomvc.com/examples/react/#/');
//        I.see('Hello, iPhone user!')
//      })
//    });
 
