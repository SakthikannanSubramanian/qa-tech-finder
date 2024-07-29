const { 
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
} = require("./descriptions");

const completeData = [
    {
        label: "Frontend",
        id: "frontend",
        children: [
            {
                label: "Functional Testing",
                id: "functional-testing",
                children: [
                    codecept,
                    cypress,
                    protractor,
                    puppeteer,
                    webdriver
                ]
            },
            {
                label: "Visual Testing",
                id: "visual-testing",
                children: [
                    testChild1,
                    testChild2,
                    testChild3,
                    testChild4,
                    testChild5
                ]
            }
        ]
    },
    {
        label:"Backend",
        id:"backend",
        children:[testChild1, testChild2]
    },
    {
        label:"Apps",
        id:"apps",
        children:[testChild3, testChild4]
    },
    {
        label:"Observability",
        id:"observability",
        children:[testChild5]
    }
]

module.exports = completeData;