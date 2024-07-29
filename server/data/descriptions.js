const codecept = {
  label: 'Codecept',
  id: 'codecept',
  "What is it?":
    "CodeceptJS is a modern end to end testing framework with a special BDD-style syntax. The tests are written as a linear scenario of the user's action on a site.",
  "Case Study":
    "CodeceptJS stands out for its simplicity and readability in writing end-to-end tests. Its BDD-style syntax allows for writing clear, concise, and maintainable tests that mimic user interactions. The framework's support for multiple backend drivers like WebDriver, Puppeteer, and Playwright provides flexibility and robust testing capabilities, making it a versatile choice for different types of web applications.",
  "Samples": `
    Feature('CodeceptJS Sample');

    Scenario('test something', ({ I }) => {
      I.amOnPage('/');
      I.see('Welcome');
    });
  `,
  "Reference Docs": 'https://codecept.io/',
  "Comparison": `
    CodeceptJS vs. Cypress:
    - CodeceptJS uses a BDD-style syntax, while Cypress uses a more traditional chaining syntax.
    - CodeceptJS supports multiple backend drivers, whereas Cypress is built specifically for running in the browser.
  `
};

const cypress = {
  label: 'Cypress',
  id: 'cypress',
  "What is it?":
    "Cypress is a next-generation front-end testing tool built for the modern web. It addresses the key pain points developers and QA engineers face when testing modern applications.",
  "Case Study":
    'Cypress offers a fast, easy, and reliable testing experience for anything that runs in a browser. Its unique architecture allows it to run tests in the same run loop as the application, providing better performance and more accurate test results. The real-time reloading and interactive debugging features enhance the developer experience, making test writing and maintenance more efficient.',
  "Samples": `
    describe('My First Test', () => {
      it('Visits the Kitchen Sink', () => {
        cy.visit('https://example.cypress.io');
        cy.contains('type').click();
      });
    });
  `,
  "Reference Docs": 'https://www.cypress.io/',
  "Comparison": `
    Cypress vs. Selenium WebDriver:
    - Cypress runs in the same execution loop as your application, offering more consistent and reliable results.
    - Selenium WebDriver supports a wider range of browsers and programming languages.
  `
};

const protractor = {
  label: 'Protractor',
  id: 'protractor',
  "What is it?":
    "Protractor is an end-to-end test framework for Angular and AngularJS applications. It is built on top of WebDriverJS and is designed to test Angular applications in an Angular context.",
  "Case Study":
    'Protractor is specifically designed for Angular applications, integrating seamlessly with Angular’s features like dependency injection and the digest cycle. It can automatically sync with your application, making it easier to write tests that don’t require manual waits and sleeps. This makes it an excellent choice for teams using Angular.',
  "Samples": `
    describe('Protractor Demo App', function() {
      it('should have a title', function() {
        browser.get('http://www.angularjs.org');
        expect(browser.getTitle()).toEqual('AngularJS — Superheroic JavaScript MVW Framework');
      });
    });
  `,
  "Reference Docs": 'https://www.protractortest.org/',
  "Comparison": `
    Protractor vs. Cypress:
    - Protractor is optimized for Angular applications, while Cypress is more general-purpose.
    - Protractor uses Selenium WebDriver under the hood, whereas Cypress runs directly in the browser.
  `
};

const puppeteer = {
  label: 'Puppeteer',
  id: 'puppeteer',
  "What is it?":
    "Puppeteer is a Node library that provides a high-level API to control Chrome or Chromium over the DevTools Protocol. It is useful for headless browser testing and automation.",
  "Case Study":
    'Puppeteer provides a powerful toolset for controlling Chrome or Chromium browsers for both UI and headless testing. Its integration with the DevTools Protocol allows developers to perform a wide range of tasks, from capturing screenshots to automating form submissions. Puppeteer’s speed and reliability make it a preferred choice for end-to-end testing and web scraping.',
  "Samples": `
    const puppeteer = require('puppeteer');

    (async () => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto('https://example.com');
      await page.screenshot({ path: 'example.png' });
      await browser.close();
    })();
  `,
  "Reference Docs": 'https://pptr.dev/',
  "Comparison": `
    Puppeteer vs. Selenium WebDriver:
    - Puppeteer provides a high-level API for controlling Chrome, while Selenium WebDriver supports multiple browsers.
    - Puppeteer is often faster for headless testing, as it directly uses Chrome DevTools Protocol.
  `
};

const webdriver = {
  label: 'WebDriver',
  id: 'webdriver',
  "What is it?":
    "Selenium WebDriver is a collection of language-specific bindings to drive a browser and an implementation of the WebDriver API to interact with web browsers.",
  "Case Study":
    'Selenium WebDriver is a highly versatile tool that supports multiple programming languages and browsers, making it a standard choice for cross-browser testing. Its ability to interact directly with browser internals ensures comprehensive testing capabilities. WebDriver’s extensive community and rich ecosystem of tools and plugins provide robust support and flexibility for complex testing needs.',
  "Samples": `
    import org.openqa.selenium.WebDriver;
    import org.openqa.selenium.chrome.ChromeDriver;

    public class SeleniumTest {
      public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "/path/to/chromedriver");
        WebDriver driver = new ChromeDriver();
        driver.get("http://www.google.com");
        System.out.println("Title: " + driver.getTitle());
        driver.quit();
      }
    }
  `,
  "Reference Docs": 'https://www.selenium.dev/documentation/webdriver/',
  "Comparison": `
    Selenium WebDriver vs. Cypress:
    - Selenium WebDriver supports multiple browsers and programming languages.
    - Cypress runs in the browser and provides real-time reloading and debugging.
  `
};

const testChild1 = {
  label: 'TestChild1',
  id: 'testChild1',
  "What is it?":
    "TestChild is an innovative testing framework designed to simplify and streamline the end-to-end testing process for modern web applications.",
  "Case Study":
    'TestChild offers a user-friendly interface and intuitive API, making it accessible for both developers and non-technical team members. Its modular design allows for easy integration with various tools and platforms, providing flexibility and scalability for growing projects. With robust debugging tools and real-time test execution, TestChild enhances productivity and ensures high-quality software delivery.',
  "Samples": `
    describe('TestChild Sample Test', () => {
      it('should do something', () => {
        testChild.visit('http://example.com');
        testChild.click('button');
        testChild.should('contain', 'Success');
      });
    });
  `,
  "Reference Docs": 'https://www.testchild.io/',
  "Comparison": `
    TestChild vs. Cypress:
    - TestChild offers modular integration with various tools, while Cypress is more of an all-in-one solution.
    - TestChild is designed for both developers and non-technical users, while Cypress is more developer-focused.
  `
};

const testChild2 = {
  label: 'TestChild2',
  id: 'testchild2',
  "What is it?":
    "TestChild is an innovative testing framework designed to simplify and streamline the end-to-end testing process for modern web applications.",
  "Case Study":
    'TestChild offers a user-friendly interface and intuitive API, making it accessible for both developers and non-technical team members. Its modular design allows for easy integration with various tools and platforms, providing flexibility and scalability for growing projects. With robust debugging tools and real-time test execution, TestChild enhances productivity and ensures high-quality software delivery.',
  "Samples": `
    describe('TestChild Sample Test', () => {
      it('should do something', () => {
        testChild.visit('http://example.com');
        testChild.click('button');
        testChild.should('contain', 'Success');
      });
    });
  `,
  "Reference Docs": 'https://www.testchild.io/',
  "Comparison": `
    TestChild vs. Cypress:
    - TestChild offers modular integration with various tools, while Cypress is more of an all-in-one solution.
    - TestChild is designed for both developers and non-technical users, while Cypress is more developer-focused.
  `
};

const testChild3 = {
  label: 'TestChild3',
  id: 'testchild3',
  "What is it?":
    "TestChild is an innovative testing framework designed to simplify and streamline the end-to-end testing process for modern web applications.",
  "Case Study":
    'TestChild offers a user-friendly interface and intuitive API, making it accessible for both developers and non-technical team members. Its modular design allows for easy integration with various tools and platforms, providing flexibility and scalability for growing projects. With robust debugging tools and real-time test execution, TestChild enhances productivity and ensures high-quality software delivery.',
  "Samples": `
    describe('TestChild Sample Test', () => {
      it('should do something', () => {
        testChild.visit('http://example.com');
        testChild.click('button');
        testChild.should('contain', 'Success');
      });
    });
  `,
  "Reference Docs": 'https://www.testchild.io/',
  "Comparison": `
    TestChild vs. Cypress:
    - TestChild offers modular integration with various tools, while Cypress is more of an all-in-one solution.
    - TestChild is designed for both developers and non-technical users, while Cypress is more developer-focused.
  `
};

const testChild4 = {
  label: 'TestChild4',
  id: 'testchild4',
  "What is it?":
    "TestChild is an innovative testing framework designed to simplify and streamline the end-to-end testing process for modern web applications.",
  "Case Study":
    'TestChild offers a user-friendly interface and intuitive API, making it accessible for both developers and non-technical team members. Its modular design allows for easy integration with various tools and platforms, providing flexibility and scalability for growing projects. With robust debugging tools and real-time test execution, TestChild enhances productivity and ensures high-quality software delivery.',
  "Samples": `
    describe('TestChild Sample Test', () => {
      it('should do something', () => {
        testChild.visit('http://example.com');
        testChild.click('button');
        testChild.should('contain', 'Success');
      });
    });
  `,
  "Reference Docs": 'https://www.testchild.io/',
  "Comparison": `
    TestChild vs. Cypress:
    - TestChild offers modular integration with various tools, while Cypress is more of an all-in-one solution.
    - TestChild is designed for both developers and non-technical users, while Cypress is more developer-focused.
  `
};

const testChild5 = {
  label: 'TestChild5',
  id: 'testchild5',
  "What is it?":
    "TestChild is an innovative testing framework designed to simplify and streamline the end-to-end testing process for modern web applications.",
  "Case Study":
    'TestChild offers a user-friendly interface and intuitive API, making it accessible for both developers and non-technical team members. Its modular design allows for easy integration with various tools and platforms, providing flexibility and scalability for growing projects. With robust debugging tools and real-time test execution, TestChild enhances productivity and ensures high-quality software delivery.',
  "Samples": `
    describe('TestChild Sample Test', () => {
      it('should do something', () => {
        testChild.visit('http://example.com');
        testChild.click('button');
        testChild.should('contain', 'Success');
      });
    });
  `,
  "Reference Docs": 'https://www.testchild.io/',
  "Comparison": `
    TestChild vs. Cypress:
    - TestChild offers modular integration with various tools, while Cypress is more of an all-in-one solution.
    - TestChild is designed for both developers and non-technical users, while Cypress is more developer-focused.
  `
};

module.exports = {
  codecept,
  cypress,
  protractor,
  puppeteer,
  webdriver,
  testChild1,
  testChild2,
  testChild3,
  testChild4,
  testChild5
};
